package resume_ai_assistant.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import resume_ai_assistant.dto.AiAnalysisResponse;
import resume_ai_assistant.entity.AnalysisResult;
import resume_ai_assistant.entity.Resume;
import resume_ai_assistant.repository.AnalysisResultRepository;
import resume_ai_assistant.repository.ResumeRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class GeminiService {
    private final AnalysisResultRepository analysisResultRepository;
    private final ObjectMapper objectMapper;
    private final RestClient restClient;
    private final ResumeRepository resumeRepository;

    @Value("${gemini.api.key}")
    private String apiKey;

    public AiAnalysisResponse analyzeResume(
            Long resumeId,
            String jobDescription) throws Exception {

        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() ->
                        new RuntimeException("Resume not found"));

        String resumeText = resume.getExtractedText();

        String prompt = """
                Analyze this resume and return ONLY valid JSON.

                {
                  "matchScore":85,
                  "skillsFound":["Java"],
                  "missingSkills":["Kafka"],
                  "interviewQuestions":["Q1","Q2","Q3","Q4","Q5"]
                }

                Resume:
                %s

                Job Description:
                %s
                """.formatted(resumeText, jobDescription);

        String url =
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key="
                        + apiKey;

        Map<String, Object> request =
                Map.of(
                        "contents",
                        List.of(
                                Map.of(
                                        "parts",
                                        List.of(
                                                Map.of("text", prompt)
                                        )
                                )
                        )
                );

        String response = restClient.post()
                .uri(url)
                .body(request)
                .retrieve()
                .body(String.class);






        JsonNode root = objectMapper.readTree(response);

        String aiText = root.path("candidates")
                .get(0)
                .path("content")
                .path("parts")
                .get(0)
                .path("text")
                .asText();

        // Remove markdown wrapper
        aiText = aiText
                .replace("```json", "")
                .replace("```", "")
                .trim();

        AiAnalysisResponse result =
                objectMapper.readValue(
                        aiText,
                        AiAnalysisResponse.class
                );

        AnalysisResult analysisResult =
                AnalysisResult.builder()
                        .resumeId(resumeId)
                        .matchScore(result.getMatchScore())
                        .skillsFound(
                                String.join(", ",
                                        result.getSkillsFound())
                        )
                        .missingSkills(
                                String.join(", ",
                                        result.getMissingSkills())
                        )
                        .interviewQuestions(
                                String.join(" | ",
                                        result.getInterviewQuestions())
                        )
                        .createdAt(LocalDateTime.now())
                        .build();

        analysisResultRepository.save(analysisResult);

        return result;
//        return objectMapper.readValue(
//                aiText,
//                AiAnalysisResponse.class
//        );
    }
}
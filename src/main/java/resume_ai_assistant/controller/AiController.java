package resume_ai_assistant.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import resume_ai_assistant.dto.AiAnalysisResponse;
import resume_ai_assistant.dto.AnalyzeRequest;
import resume_ai_assistant.service.GeminiService;

@RestController
@RequestMapping("/api/ai")
@RequiredArgsConstructor
public class AiController {

    private final GeminiService geminiService;

    @PostMapping("/analyze")
    public AiAnalysisResponse analyze(
            @RequestBody AnalyzeRequest request) throws Exception {

        return geminiService.analyzeResume(
                request.getResumeId(),
                request.getJobDescription()
        );
    }
}

package resume_ai_assistant.service;


import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import resume_ai_assistant.dto.DashboardResponse;
import resume_ai_assistant.entity.AnalysisResult;
import resume_ai_assistant.entity.Resume;
import resume_ai_assistant.repository.AnalysisResultRepository;
import resume_ai_assistant.repository.ResumeRepository;

import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final ResumeRepository resumeRepository;
    private final AnalysisResultRepository analysisResultRepository;

    public DashboardResponse getDashboard() {

        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        long totalResumes =
                resumeRepository.countByUserEmail(email);

        List<Long> resumeIds =
                resumeRepository.findResumeIdsByUserEmail(email);

        long totalAnalysis = 0;

        double averageScore = 0;

        String lastAnalysisDate = "No Analysis";

        if (!resumeIds.isEmpty()) {

            totalAnalysis =
                    analysisResultRepository
                            .countByResumeIdIn(resumeIds);

            Double avg =
                    analysisResultRepository
                            .getAverageScore(resumeIds);

            averageScore =
                    avg == null ? 0 : avg;

            List<AnalysisResult> analysis =
                    analysisResultRepository
                            .findByResumeIdInOrderByCreatedAtDesc(
                                    resumeIds
                            );

            if (!analysis.isEmpty()) {

                lastAnalysisDate =
                        analysis.get(0)
                                .getCreatedAt()
                                .format(
                                        DateTimeFormatter.ofPattern(
                                                "dd MMM yyyy HH:mm"
                                        )
                                );

            }

        }

        return DashboardResponse.builder()

                .totalResumes(totalResumes)

                .totalAnalysis(totalAnalysis)

                .averageScore(averageScore)

                .lastAnalysisDate(lastAnalysisDate)

                .build();

    }

}

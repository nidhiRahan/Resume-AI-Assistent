package resume_ai_assistant.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DashboardResponse {

    private Long totalResumes;

    private Long totalAnalysis;

    private Double averageScore;

    private String lastAnalysisDate;

}
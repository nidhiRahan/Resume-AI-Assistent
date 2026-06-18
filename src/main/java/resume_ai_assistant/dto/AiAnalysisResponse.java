package resume_ai_assistant.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AiAnalysisResponse {
    private Integer matchScore;

    private List<String> skillsFound;

    private List<String> missingSkills;

    private List<String> interviewQuestions;
}

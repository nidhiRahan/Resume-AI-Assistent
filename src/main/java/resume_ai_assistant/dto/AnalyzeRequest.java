package resume_ai_assistant.dto;

import lombok.Data;

@Data
public class AnalyzeRequest {
    private Long resumeId;
    private String jobDescription;
}

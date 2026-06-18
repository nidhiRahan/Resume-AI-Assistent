package resume_ai_assistant.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import resume_ai_assistant.entity.AnalysisResult;
import resume_ai_assistant.entity.Resume;
import resume_ai_assistant.repository.AnalysisResultRepository;
import resume_ai_assistant.repository.ResumeRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AnalysisService {

    private final AnalysisResultRepository analysisResultRepository;
    private final ResumeRepository resumeRepository;

    public List<AnalysisResult> getHistory(Long resumeId) {

        Resume resume = resumeRepository
                .findById(resumeId)
                .orElseThrow(() ->
                        new RuntimeException("Resume not found"));

        String email = getLoggedInUserEmail();

        if (!resume.getUser().getEmail().equals(email)) {
            throw new RuntimeException("Access Denied");
        }

        return analysisResultRepository.findByResumeId(resumeId);
    }

    private String getLoggedInUserEmail() {
        return SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
    }
}
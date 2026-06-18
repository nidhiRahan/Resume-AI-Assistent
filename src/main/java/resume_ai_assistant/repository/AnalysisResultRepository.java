package resume_ai_assistant.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import resume_ai_assistant.entity.AnalysisResult;
import resume_ai_assistant.entity.Resume;

import java.util.List;
@Repository
public interface AnalysisResultRepository extends JpaRepository<AnalysisResult, Long> {

    List<AnalysisResult> findByResumeId(Long resumeId);
}

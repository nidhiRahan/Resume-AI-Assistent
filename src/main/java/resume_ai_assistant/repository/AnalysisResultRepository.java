package resume_ai_assistant.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import resume_ai_assistant.entity.AnalysisResult;
import resume_ai_assistant.entity.Resume;

import java.util.List;
@Repository
public interface AnalysisResultRepository extends JpaRepository<AnalysisResult, Long> {

    List<AnalysisResult> findByResumeId(Long resumeId);

    long countByResumeIdIn(List<Long> resumeIds);

    List<AnalysisResult> findByResumeIdInOrderByCreatedAtDesc(List<Long> resumeIds);

    @Query("""
SELECT AVG(a.matchScore)
FROM AnalysisResult a
WHERE a.resumeId IN :resumeIds
""")
    Double getAverageScore(List<Long> resumeIds);
}

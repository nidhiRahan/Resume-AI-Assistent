package resume_ai_assistant.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import resume_ai_assistant.entity.Resume;
@Repository
public interface ResumeRepository extends JpaRepository<Resume,Long> {
}

package resume_ai_assistant.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import resume_ai_assistant.entity.Resume;

import java.util.List;

@Repository
public interface ResumeRepository extends JpaRepository<Resume,Long> {

    long countByUserEmail(String email);

    @Query("""
SELECT r.id
FROM Resume r
WHERE r.user.email = :email
ORDER BY r.id DESC
LIMIT 1
""")
    Long findLatestResumeIdByEmail(String email);

    @Query("""
    SELECT r.id
    FROM Resume r
    WHERE r.user.email = :email
    """)
    List<Long> findResumeIdsByUserEmail(String email);

    Resume findTopByUserEmailOrderByIdDesc(String email);
}

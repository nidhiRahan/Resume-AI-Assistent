package resume_ai_assistant.service;

import lombok.RequiredArgsConstructor;
import org.apache.pdfbox.Loader;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import resume_ai_assistant.entity.Resume;
import resume_ai_assistant.entity.User;
import resume_ai_assistant.repository.ResumeRepository;
import resume_ai_assistant.repository.UserRepository;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class ResumeService {

    private final ResumeRepository resumeRepository;
    private final UserRepository userRepository;

    public String uploadResume(MultipartFile file)
            throws IOException {

        String extractedText;

        try (var document =
                     Loader.loadPDF(file.getBytes())) {

            PDFTextStripper stripper =
                    new PDFTextStripper();

            extractedText =
                    stripper.getText(document);
        }

        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        Resume resume = Resume.builder()
                .fileName(file.getOriginalFilename())
                .extractedText(extractedText)
                .user(user)
                .build();

        resumeRepository.save(resume);

        return extractedText;
    }
}
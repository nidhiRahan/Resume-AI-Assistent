package resume_ai_assistant.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import resume_ai_assistant.entity.Resume;
import resume_ai_assistant.service.ResumeService;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api/resume")
@RequiredArgsConstructor
public class ResumeController {

    private final ResumeService resumeService;


    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Map<String, Object>> uploadResume(
            @RequestParam("file") MultipartFile file)
            throws IOException {

        Resume resume = resumeService.uploadResume(file);

        return ResponseEntity.ok(
                Map.of(
                        "message", "File uploaded successfully",
                        "resumeId", resume.getId(),
                        "fileName", resume.getFileName()
                )
        );
    }
}

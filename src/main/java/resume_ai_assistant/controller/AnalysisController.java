package resume_ai_assistant.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import resume_ai_assistant.entity.AnalysisResult;
import resume_ai_assistant.service.AnalysisService;
import resume_ai_assistant.service.PdfReportService;

import java.util.List;

@RestController
@RequestMapping("/api/analysis")
@RequiredArgsConstructor
public class AnalysisController {
    private final AnalysisService analysisService;
    private final PdfReportService pdfReportService;

    @GetMapping("/history/{resumeId}")
    public List<AnalysisResult> getHistory(
            @PathVariable Long resumeId) {

        return analysisService.getHistory(resumeId);
    }

    @GetMapping("/report/{analysisId}")
    public ResponseEntity<byte[]> downloadReport(
            @PathVariable Long analysisId)
            throws Exception {

        System.out.println("REPORT API HIT");
        System.out.println("Analysis Id = " + analysisId);

        byte[] pdf = pdfReportService.generateReport(analysisId);

        System.out.println("PDF Length = " + pdf.length);

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_PDF)
                .header(
                        HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=analysis-report.pdf"
                )
                .contentLength(pdf.length)
                .body(pdf);
    }


}

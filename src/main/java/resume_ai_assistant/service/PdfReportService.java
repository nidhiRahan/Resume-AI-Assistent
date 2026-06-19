package resume_ai_assistant.service;


import com.itextpdf.text.Document;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import resume_ai_assistant.entity.AnalysisResult;
import resume_ai_assistant.repository.AnalysisResultRepository;

import java.io.ByteArrayOutputStream;

@Service
@RequiredArgsConstructor
public class PdfReportService {

    private final AnalysisResultRepository analysisResultRepository;

    public byte[] generateReport(Long analysisId)
            throws Exception {

        AnalysisResult result =
                analysisResultRepository.findById(analysisId)
                        .orElseThrow(() ->
                                new RuntimeException("Analysis not found"));

        Document document = new Document();

        ByteArrayOutputStream outputStream =
                new ByteArrayOutputStream();

        PdfWriter.getInstance(document, outputStream);

        document.open();

        document.add(new Paragraph("AI Resume Analysis Report"));
        document.add(new Paragraph(" "));
        document.add(new Paragraph(
                "Match Score: " + result.getMatchScore()
        ));

        document.add(new Paragraph(
                "Skills Found: " + result.getSkillsFound()
        ));

        document.add(new Paragraph(
                "Missing Skills: " + result.getMissingSkills()
        ));

        document.add(new Paragraph(
                "Interview Questions:"
        ));

        document.add(new Paragraph(
                result.getInterviewQuestions()
        ));

        document.close();

        byte[] pdfBytes = outputStream.toByteArray();

        System.out.println("PDF Size = ...");
        System.out.println("PDF Length = ...");
        return pdfBytes;
    }
}

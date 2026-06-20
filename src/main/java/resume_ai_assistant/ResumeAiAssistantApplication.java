package resume_ai_assistant;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ResumeAiAssistantApplication {

	public static void main(String[] args) {

		System.out.println("DB_URL = " + System.getenv("DB_URL"));

		SpringApplication.run(ResumeAiAssistantApplication.class, args);
	}
}


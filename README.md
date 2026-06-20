Resume AI Assistant

An AI-powered Resume Analysis Platform built with Java, Spring Boot, PostgreSQL, JWT Authentication, and Google Gemini AI. The application helps users analyze resumes against job descriptions, identify skill gaps, calculate match scores, and generate interview questions using AI.

Live Demo

API Documentation (Swagger UI):
https://resume-ai-assistent.onrender.com/swagger-ui/index.html

Features
User Registration & Authentication
JWT-based Authorization
Resume PDF Upload
PDF Text Extraction using Apache PDFBox
AI-Powered Resume Analysis using Google Gemini AI
Resume Match Score Calculation
Skills Identification & Gap Analysis
Interview Question Generation
Analysis History Tracking
PDF Report Generation
RESTful APIs with Swagger Documentation
Global Exception Handling
Dockerized Deployment
Technology Stack
Backend
Java 21
Spring Boot 3
Spring Security
Spring Data JPA
Hibernate
PostgreSQL
JWT Authentication
AI Integration
Google Gemini API
Documentation
Swagger / OpenAPI
DevOps & Deployment
Docker
Docker Compose
Render
API Endpoints
Authentication
Method	Endpoint
POST	/api/auth/register
POST	/api/auth/login
Resume Management
Method	Endpoint
POST	/api/resume/upload
AI Analysis
Method	Endpoint
POST	/api/analyze/analyze
GET	/api/analysis/history/{resumeId}
Reports
Method	Endpoint
GET	/api/analysis/report/{analysisId}
Application Workflow
User registers and logs in.
JWT token is generated upon successful authentication.
User uploads a resume in PDF format.
Resume content is extracted using Apache PDFBox.
Resume and Job Description are processed by Gemini AI.
AI generates:
Match Score
Skills Found
Missing Skills
Interview Questions
Analysis results are stored in PostgreSQL.
Users can access previous analyses and download reports.
Database Design

The application stores:

User Information
Uploaded Resumes
Analysis Results
Match Scores
Generated Interview Questions
Analysis History
### 🔹 Swagger Screenshots

![Swagger 1](swagger1.png)

![Swagger 2](swagger2.png)

![Swagger 3](swagger3.png)

![Swagger 4](swagger4.png)

![Swagger 5](swagger5.png)

![Swagger 6](swagger6.png)

Swagger API Documentation

Add your Swagger screenshots here:

Swagger Home
Authentication APIs
Resume Upload API
Analysis API
Report Generation API
Future Enhancements
Refresh Token Support
React Frontend Integration
Unit & Integration Testing
CI/CD Pipeline
Role-Based Access Control (RBAC)
Email Notifications
Resume Version Comparison
Author

Nidhi Rahangdale

Java Backend Developer

Skills

Java | Spring Boot | Hibernate | PostgreSQL | REST APIs | JWT | Docker | Git | Maven

If you found this project useful, consider giving it a ⭐ on GitHub.

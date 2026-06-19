# Resume AI Assistant

AI-powered Resume Analysis Application built using Spring Boot, PostgreSQL, JWT Authentication, and Google Gemini AI.

## Features

* User Registration & Login
* JWT Authentication & Authorization
* Resume PDF Upload
* PDF Text Extraction using Apache PDFBox
* AI-Powered Resume Analysis using Gemini AI
* Match Score Calculation
* Skills Found & Missing Skills Detection
* Interview Question Generation
* Analysis History Tracking
* PDF Report Generation
* Swagger API Documentation
* Global Exception Handling
* Docker Support

## Tech Stack

### Backend

* Java 21
* Spring Boot 3
* Spring Security
* Spring Data JPA
* PostgreSQL
* JWT

### AI Integration

* Google Gemini API

### Documentation

* Swagger OpenAPI

### Containerization

* Docker
* Docker Compose

## API Endpoints

### Authentication

* POST `/api/auth/register`
* POST `/api/auth/login`

### Resume

* POST `/api/resume/upload`

### AI Analysis

* POST `/api/analyze/analyze`
* GET `/api/analysis/history/{resumeId}`

### Reports

* GET `/api/analysis/report/{analysisId}`

## Project Workflow

1. User registers and logs in.
2. JWT token is generated.
3. User uploads resume PDF.
4. Text is extracted from PDF.
5. Resume and Job Description are sent to Gemini AI.
6. AI returns:

   * Match Score
   * Skills Found
   * Missing Skills
   * Interview Questions
7. Analysis is stored in PostgreSQL.
8. User can view history and download PDF reports.

## Database

PostgreSQL is used to store:

* Users
* Resumes
* Analysis Results
* 
## 📌 Swagger API Documentation

Below is the Swagger UI of the project:
![Swagger Screenshot]

![Swagger 1](swagger1.png)

![Swagger 2](swagger2.png)

![Swagger 3](swagger3.png)

![Swagger 4](swagger4.png)

![Swagger 5](swagger5.png)

![Swagger 6](swagger6.png)

## Future Enhancements

* Refresh Token Authentication
* React Frontend
* Unit Testing
* Cloud Deployment
* Role-Based Access Control

## Author

Nidhi Rahangdale
Java Backend Developer

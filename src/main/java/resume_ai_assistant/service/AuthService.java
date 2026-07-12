package resume_ai_assistant.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import resume_ai_assistant.dto.LoginRequest;
import resume_ai_assistant.dto.LoginResponse;
import resume_ai_assistant.dto.RegisterRequest;
import resume_ai_assistant.entity.Resume;
import resume_ai_assistant.entity.User;
import resume_ai_assistant.repository.ResumeRepository;
import resume_ai_assistant.repository.UserRepository;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final ResumeRepository resumeRepository;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService,
                       ResumeRepository resumeRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.resumeRepository = resumeRepository;
    }

    public String register(RegisterRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }
        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        userRepository.save(user);

        return "User registered successfully";


    }

    public LoginResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            throw new RuntimeException("Invalid password");
        }

        String token = jwtService.generateToken(user.getEmail());

        Long resumeId = resumeRepository.findLatestResumeIdByEmail(user.getEmail());


        return LoginResponse.builder()
                .token(token)
                .name(user.getName())
                .email(user.getEmail())
                .resumeId(resumeId)
                .build();
    }
}
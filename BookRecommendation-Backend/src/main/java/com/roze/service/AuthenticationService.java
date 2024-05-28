package com.roze.service;

import com.roze.dto.AuthenticationRequest;
import com.roze.dto.AuthenticationResponse;
import com.roze.dto.RegistrationRequest;
import com.roze.entity.Role;
import com.roze.entity.User;
import com.roze.repository.RoleRepository;
import com.roze.repository.UserRepository;
import com.roze.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final RoleRepository roleRepository;

    public AuthenticationResponse register(RegistrationRequest registerRequest) {
        Role userRole = roleRepository.findByName("USER")
                .orElseThrow(() -> new IllegalStateException("ROLE USER was not initiated"));
        User user = User.builder()
                .firstName(registerRequest.getFirstName())
                .lastName(registerRequest.getLastName())
                .email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .roles(List.of(userRole))
                .build();
        userRepository.save(user);
        String s = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(s)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest authenticateRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticateRequest.getEmail(),
                authenticateRequest.getPassword()));
        User user = userRepository.findByEmail(authenticateRequest.getEmail()).orElseThrow();
        String s = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(s)
                .build();
    }
}

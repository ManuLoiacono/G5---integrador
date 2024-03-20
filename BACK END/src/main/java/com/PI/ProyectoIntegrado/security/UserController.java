package com.PI.ProyectoIntegrado.security;

import com.PI.ProyectoIntegrado.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class UserController {
    private LoginService loginService;

    @Autowired
    public UserController(LoginService loginService) {
        this.loginService = loginService;
    }

    /*@PostMapping("api/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        Usuario usuario = loginService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
        if (usuario != null) {
            return loginService.generateToken(loginRequest.getEmail(), usuario.getNombreUsuario(), usuario.getApellidoUsuario(), usuario.getNumTelefono(), usuario.getUsername(), usuario.getUserRol().name());
        } else {
            throw new RuntimeException("Autenticación fallida");
        }
    }*/
    @PostMapping("api/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Usuario usuario = loginService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
        if (usuario != null) {
            String token = loginService.generateToken(loginRequest.getEmail(), usuario.getNombreUsuario(), usuario.getApellidoUsuario(), usuario.getNumTelefono(), usuario.getUsername(), usuario.getUserRol().name());
            return ResponseEntity.ok(Map.of("authenticated", true, "token", token)); // Autenticación exitosa con token
        } else {
            return ResponseEntity.ok(Map.of("authenticated", false, "token", null)); // Autenticación fallida
        }
    }
}
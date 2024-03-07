package com.PI.ProyectoIntegrado.security;

import com.PI.ProyectoIntegrado.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    private LoginService loginService;

    @Autowired
    public UserController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("api/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        Usuario usuario = loginService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
        if (usuario != null) {
            return loginService.generateToken(loginRequest.getEmail()); // Devuelve el token JWT si las credenciales son válidas
        } else {
            throw new RuntimeException("Autenticación fallida");
        }
    }
}
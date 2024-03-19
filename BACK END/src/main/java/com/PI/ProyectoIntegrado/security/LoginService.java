package com.PI.ProyectoIntegrado.security;

import com.PI.ProyectoIntegrado.model.Usuario;
import com.PI.ProyectoIntegrado.repository.IUsuarioRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.Optional;

@Service
public class LoginService {
    private IUsuarioRepository usuarioRepository;

    @Autowired
    public LoginService(IUsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }


    private static final Key SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public String generateToken(String email, String nombreUsuario, String apellidoUsuario, Integer numTelefono, String username, String userRol) {
        return Jwts.builder()
                .setSubject(email)
                .claim("username", username)
                .claim("nombreUsuario", nombreUsuario)
                .claim("apellidoUsuario", apellidoUsuario)
                .claim("numTelefono", numTelefono)
                .claim("email", email)
                .claim("userRol", userRol)

                .setExpiration(new Date(System.currentTimeMillis() + 864_000_000)) // Token válido por 10 días
                .signWith(SECRET_KEY)
                .compact();
    }

    public Usuario authenticate(String email, String password) {
        Optional<Usuario> optionalUsuario = usuarioRepository.findByEmail(email);
        if (optionalUsuario.isPresent()) {
            Usuario usuario = optionalUsuario.get();
            if (usuario.getPassword().equals(password)) {
                return usuario; // Credenciales válidas
            }
        }
        return null; // Credenciales inválidas
    }
}

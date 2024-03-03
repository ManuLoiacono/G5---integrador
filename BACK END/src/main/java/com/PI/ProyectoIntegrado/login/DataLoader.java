package com.PI.ProyectoIntegrado.login;

import com.PI.ProyectoIntegrado.model.Usuario;
import com.PI.ProyectoIntegrado.model.usuario.UserRol;
import com.PI.ProyectoIntegrado.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {


    private IUsuarioRepository usuarioRepository;

    @Autowired
    public DataLoader(IUsuarioRepository usuarioRepository){
        this.usuarioRepository = usuarioRepository;
    }


    @Override
    public void run(ApplicationArguments args) throws Exception {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String password = passwordEncoder.encode("1");
        String password2 = passwordEncoder.encode("password2");

        usuarioRepository.save(new Usuario("terra", "rent", 123445, "terrarent@gmail.com", password, UserRol.USER));
    }
}

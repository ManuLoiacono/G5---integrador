package com.PI.ProyectoIntegrado.security;


import com.PI.ProyectoIntegrado.model.Usuario;
import com.PI.ProyectoIntegrado.model.usuario.UserRol;
import com.PI.ProyectoIntegrado.repository.IUsuarioRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {


    private IUsuarioRepository userRepository;

    public DataLoader(IUsuarioRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String password = passwordEncoder.encode("1234");

        userRepository.save(new Usuario("Leo10", "Leo", "Messi", 1123456789, "LMessi@gmail.com", password, UserRol.SUPERADMIN));
    }
}

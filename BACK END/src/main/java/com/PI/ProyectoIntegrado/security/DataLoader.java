package com.PI.ProyectoIntegrado.security;


import com.PI.ProyectoIntegrado.model.Usuario;
import com.PI.ProyectoIntegrado.model.usuario.UserRol;
import com.PI.ProyectoIntegrado.repository.IUsuarioRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    private final IUsuarioRepository userRepository;

    public DataLoader(IUsuarioRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        if (!superAdminExists()) {
            createSuperAdmin();
        }
    }

    private boolean superAdminExists() {
        return userRepository.findByUserRol(UserRol.SUPERADMIN).isPresent();
    }

    private void createSuperAdmin() {
        Usuario superAdmin = new Usuario("Leo10", "Leo", "Messi", 1123456789, "LMessi@gmail.com", "1234", UserRol.SUPERADMIN);
        userRepository.save(superAdmin);
    }
}
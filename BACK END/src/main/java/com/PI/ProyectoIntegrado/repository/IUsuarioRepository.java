package com.PI.ProyectoIntegrado.repository;

import com.PI.ProyectoIntegrado.model.Usuario;
import com.PI.ProyectoIntegrado.model.usuario.UserRol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUsuarioRepository extends JpaRepository<Usuario, Integer> {

    Optional<Usuario> findByEmail(String email);
    Optional<Usuario> findByUserRol(UserRol userRol);


}

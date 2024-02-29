package com.PI.ProyectoIntegrado.repository;

import com.PI.ProyectoIntegrado.model.usuario.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUsuarioRepository extends JpaRepository<Usuario, Integer> {




}

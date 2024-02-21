package com.PI.ProyectoIntegrado.repository;

import com.PI.ProyectoIntegrado.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICategoriaRepository extends JpaRepository <Categoria, Integer> {
}

package com.PI.ProyectoIntegrado.repository;

import com.PI.ProyectoIntegrado.model.ImagenCategoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IImagenCategoriaRepository extends JpaRepository<ImagenCategoria, Integer> {
}

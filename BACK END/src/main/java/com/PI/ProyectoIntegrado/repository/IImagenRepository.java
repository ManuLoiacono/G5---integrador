package com.PI.ProyectoIntegrado.repository;
import com.PI.ProyectoIntegrado.dto.ImagenDTO;
import com.PI.ProyectoIntegrado.model.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IImagenRepository  extends JpaRepository<Imagen, Integer> {
}

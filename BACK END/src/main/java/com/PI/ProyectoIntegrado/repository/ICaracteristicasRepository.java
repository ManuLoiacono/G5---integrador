package com.PI.ProyectoIntegrado.repository;

import com.PI.ProyectoIntegrado.model.Caracteristicas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICaracteristicasRepository extends JpaRepository <Caracteristicas, Integer> {
}

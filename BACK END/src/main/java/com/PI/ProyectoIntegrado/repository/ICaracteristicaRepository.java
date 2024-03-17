package com.PI.ProyectoIntegrado.repository;

import com.PI.ProyectoIntegrado.model.Caracteristica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICaracteristicaRepository extends JpaRepository <Caracteristica, Integer> {
}

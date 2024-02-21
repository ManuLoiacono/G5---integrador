package com.PI.ProyectoIntegrado.repository;

import com.PI.ProyectoIntegrado.model.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IReservaRepository extends JpaRepository <Reserva, Integer> {
}

package com.PI.ProyectoIntegrado.repository;


import com.PI.ProyectoIntegrado.model.Politica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPoliticaRepository extends JpaRepository <Politica, Integer> {
}

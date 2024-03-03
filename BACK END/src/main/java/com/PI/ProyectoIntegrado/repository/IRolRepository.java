package com.PI.ProyectoIntegrado.repository;

import com.PI.ProyectoIntegrado.model.Rol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRolRepository extends JpaRepository<Rol, Integer> {

}

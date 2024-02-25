package com.PI.ProyectoIntegrado.repository;

import com.PI.ProyectoIntegrado.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductoRepository extends JpaRepository <Producto, Integer> {


}

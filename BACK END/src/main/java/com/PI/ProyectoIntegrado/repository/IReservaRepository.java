package com.PI.ProyectoIntegrado.repository;

import com.PI.ProyectoIntegrado.model.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IReservaRepository extends JpaRepository <Reserva, Integer> {

    @Query(value = "SELECT * FROM Reservas r WHERE r.idProducto = :id", nativeQuery = true)
    List<Reserva> buscarReservaPorProductoID(@Param("id")Integer id);

}

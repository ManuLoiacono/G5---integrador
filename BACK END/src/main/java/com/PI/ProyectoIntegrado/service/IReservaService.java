package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.dto.ReservaDTO;
import com.PI.ProyectoIntegrado.model.Reserva;

import java.util.List;
import java.util.Set;

public interface IReservaService {

    Reserva agregarReserva(ReservaDTO reservaDTO);
    void eliminarReserva(Integer idReserva);
    ReservaDTO listarUnaReserva(Integer idReserva);
    //Set<ReservaDTO> listarReservas();
    Set<Reserva> listarReservas();
    List<Reserva> buscarReservaPorProductoID (Integer idProducto);



}

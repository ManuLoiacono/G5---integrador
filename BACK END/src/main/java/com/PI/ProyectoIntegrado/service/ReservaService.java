package com.PI.ProyectoIntegrado.service;


import  com.PI.ProyectoIntegrado.model.Reserva;
import com.PI.ProyectoIntegrado.repository.IReservaRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.PI.ProyectoIntegrado.dto.ReservaDTO;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ReservaService implements IReservaService{


    @Autowired
    private IReservaRepository reservaRepository;

    @Autowired
    ObjectMapper mapper;


    @Override
    public Reserva agregarReserva(ReservaDTO reservaDTO) {

        Reserva reserva = mapper.convertValue(reservaDTO, Reserva.class);
        reservaRepository.save(reserva);
        return reserva;
    }

    @Override
    public void eliminarReserva(Integer idReserva) {

        reservaRepository.deleteById(idReserva);

    }

    @Override
    public ReservaDTO listarUnaReserva(Integer idReserva) {

        Optional<Reserva> reserva = reservaRepository.findById(idReserva);
        ReservaDTO reservaDTO = null;
        if(reserva.isPresent()){
            reservaDTO = mapper.convertValue(reserva, ReservaDTO.class);
        }
        return reservaDTO;


    }

   /* @Override
    public Set<ReservaDTO> listarReservas() {

        List<Reserva> reservas = reservaRepository.findAll();
        Set<ReservaDTO> reservasDTO = new HashSet<>();
        for(Reserva reserva: reservas){
            reservasDTO.add(mapper.convertValue(reserva, ReservaDTO.class));
        }

        return reservasDTO;
    }*/


    @Override
    public Set<Reserva> listarReservas() {
        List<Reserva> reservas = reservaRepository.findAll();
        return new HashSet<>(reservas);
    }

    public List<Reserva> buscarReservaPorProductoID(Integer idProducto) throws ResourceNotFoundException {
        List<Reserva> buscarReserva = reservaRepository.buscarReservaPorProductoID(idProducto);
        if (buscarReserva != null) {
            return reservaRepository.buscarReservaPorProductoID(idProducto);
        } else {
            throw new ResourceNotFoundException("Reserva con producto ID: " + idProducto + " No existe");
        }
    }
}

package com.PI.ProyectoIntegrado.controller;


import com.PI.ProyectoIntegrado.dto.ReservaDTO;
import com.PI.ProyectoIntegrado.model.Reserva;
import com.PI.ProyectoIntegrado.service.IReservaService;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/Reserva")
@CrossOrigin(origins = {"http://localhost:3000", "http://react-app-terra-rent.s3-website.us-east-2.amazonaws.com", "https://terrarent.ddns.net"})
public class ReservaController {

    @Autowired
    IReservaService reservaService;

    @PostMapping
    public Reserva crearReserva(@RequestBody ReservaDTO reservaDTO){
        Reserva reserva = reservaService.agregarReserva(reservaDTO);
        return reserva;
    }

    @GetMapping("/:{idReserva}")
    public ReservaDTO getReserva(@PathVariable Integer idReserva){

        return  reservaService.listarUnaReserva(idReserva);

    }

    @GetMapping
    public Collection<Reserva> getTodasReservas(){
        return reservaService.listarReservas();
    }

    @DeleteMapping("/:{idReserva}")
    public ResponseEntity<?> eliminarReserva(@PathVariable Integer idReserva){
        reservaService.eliminarReserva(idReserva);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/producto/:{idProducto}")
    public List<Reserva> obtenerReservaPorProductoID(@PathVariable Integer idProducto) throws ResourceNotFoundException {
        return reservaService.buscarReservaPorProductoID(idProducto);
    }


}

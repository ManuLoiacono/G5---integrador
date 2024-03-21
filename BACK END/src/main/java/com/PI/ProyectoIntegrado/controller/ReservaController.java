package com.PI.ProyectoIntegrado.controller;


import com.PI.ProyectoIntegrado.dto.ReservaDTO;
import com.PI.ProyectoIntegrado.service.IReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/Reserva")
@CrossOrigin(origins = "http://ec2-18-219-62-16.us-east-2.compute.amazonaws.com:3001")
public class ReservaController {

    @Autowired
    IReservaService reservaService;

    @PostMapping
    public ResponseEntity<?> crearReserva(@RequestBody ReservaDTO reservaDTO){

        reservaService.agregarReserva(reservaDTO);
        return ResponseEntity.ok(HttpStatus.OK);

    }

    @GetMapping("/:{idReserva}")
    public ReservaDTO getReserva(@PathVariable Integer idReserva){

        return  reservaService.listarUnaReserva(idReserva);

    }

    @GetMapping
    public Collection<ReservaDTO> getTodasReservas(){
        return reservaService.listarReservas();
    }

    @DeleteMapping("/:{idReserva}")
    public ResponseEntity<?> eliminarReserva(@PathVariable Integer idReserva){
        reservaService.eliminarReserva(idReserva);
        return ResponseEntity.ok(HttpStatus.OK);
    }



}

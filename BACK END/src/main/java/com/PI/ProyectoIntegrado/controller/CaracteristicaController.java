package com.PI.ProyectoIntegrado.controller;

import com.PI.ProyectoIntegrado.model.Caracteristica;
import com.PI.ProyectoIntegrado.service.ICaracteristicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/Caracteristica")
@CrossOrigin(origins = "http://ec2-18-219-62-16.us-east-2.compute.amazonaws.com:3001")
public class CaracteristicaController {

    @Autowired
    ICaracteristicaService caracteristicasService;

    @PostMapping
    public ResponseEntity<?> crearCaracteristica(@RequestBody Caracteristica caracteristica){

        caracteristicasService.agregarCaracteristica(caracteristica);
        return ResponseEntity.ok(HttpStatus.OK);

    }

    @GetMapping("/:{idCaracteristica}")
    public Caracteristica getCaracteristica(@PathVariable Integer idCaracteristica){

        return caracteristicasService.listarUnaCaracteristica(idCaracteristica);

    }

    @GetMapping
    public Collection<Caracteristica> getTodasCaracteristicas(){
        return caracteristicasService.listarCaracteristicas();
    }

    @DeleteMapping("/:{idCaracteristica}")
    public ResponseEntity<?> eliminarCaracteristica(@PathVariable Integer idCaracteristica){
        caracteristicasService.eliminarCaracteristica(idCaracteristica);
        return ResponseEntity.ok(HttpStatus.OK);
    }




}

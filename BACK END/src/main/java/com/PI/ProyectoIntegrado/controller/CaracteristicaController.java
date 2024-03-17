package com.PI.ProyectoIntegrado.controller;

import com.PI.ProyectoIntegrado.dto.CategoriaDTO;
import com.PI.ProyectoIntegrado.model.Caracteristicas;
import com.PI.ProyectoIntegrado.service.ICaracteristicasService;
import com.PI.ProyectoIntegrado.service.ICategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/Caracteristica")
@CrossOrigin(origins = "http://localhost:3000")
public class CaracteristicaController {

    @Autowired
    ICaracteristicasService caracteristicasService;

    @PostMapping
    public ResponseEntity<?> crearCaracteristica(@RequestBody Caracteristicas caracteristicas){

        caracteristicasService.agregarCaracteristica(caracteristicas);
        return ResponseEntity.ok(HttpStatus.OK);

    }

    @GetMapping("/:{idCaracteristica}")
    public Caracteristicas getCaracteristica(@PathVariable Integer idCaracteristica){

        return caracteristicasService.listarUnaCaracteristica(idCaracteristica);

    }

    @GetMapping
    public Collection<Caracteristicas> getTodasCaracteristicas(){
        return caracteristicasService.listarCaracteristicas();
    }

    @DeleteMapping("/:{idCaracteristica}")
    public ResponseEntity<?> eliminarCaracteristica(@PathVariable Integer idCaracteristica){
        caracteristicasService.eliminarCaracteristica(idCaracteristica);
        return ResponseEntity.ok(HttpStatus.OK);
    }




}

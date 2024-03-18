package com.PI.ProyectoIntegrado.controller;

import com.PI.ProyectoIntegrado.model.Politica;
import com.PI.ProyectoIntegrado.service.IPoliticaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/Politica")
@CrossOrigin(origins = "http://localhost:3000")
public class PoliticaController {

    @Autowired
    IPoliticaService politicaService;

    @PostMapping
    public ResponseEntity<?> crearPolitica(@RequestBody Politica politica){

        politicaService.agregarPolitica(politica);
        return ResponseEntity.ok(HttpStatus.OK);

    }

    @GetMapping("/:{idPolitica}")
    public Politica getPolitica(@PathVariable Integer idPolitica){

        return politicaService.listarUnaPolitica(idPolitica);

    }

    @GetMapping
    public Collection<Politica> getTodasPoliticas(){
        return politicaService.listarPoliticas();
    }

    @DeleteMapping("/:{idPolitica}")
    public ResponseEntity<?> eliminarPolitica(@PathVariable Integer idPolitica){
        politicaService.eliminarPolitica(idPolitica);
        return ResponseEntity.ok(HttpStatus.OK);
    }




}

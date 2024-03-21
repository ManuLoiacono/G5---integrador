package com.PI.ProyectoIntegrado.controller;

import com.PI.ProyectoIntegrado.dto.ImagenDTO;
import com.PI.ProyectoIntegrado.dto.ProductoDTO;
import com.PI.ProyectoIntegrado.model.Imagen;
import com.PI.ProyectoIntegrado.service.IImagenService;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;


import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/imagen")
@CrossOrigin(origins = "http://ec2-18-219-62-16.us-east-2.compute.amazonaws.com:3001")
public class ImagenController {

    @Autowired
    IImagenService imagenService;

    @Operation(summary = "Listar todas las imagenes")
    @GetMapping("/listarImagenes")
    public List<String> listaImagenes() throws IOException {
        return imagenService.listaImagenes();
    }


    @Operation(summary = "Crear nueva imagen de un producto")
    @PostMapping("/uploadImageToS3")
    public ResponseEntity<?> guardarImagen(@RequestBody Imagen imagen){

        imagenService.guardarImagen(imagen);
        return ResponseEntity.ok(HttpStatus.OK);

    }

    @Operation(summary = "Borrar imagen por id")
    @DeleteMapping("/:{id}")
    public ResponseEntity<String> deleteImagen(@PathVariable Integer id) throws ResourceNotFoundException {
        imagenService.deleteImagen(id);
        return ResponseEntity.ok("Imagen con ID: "+ id +" Borrada");
    }


}

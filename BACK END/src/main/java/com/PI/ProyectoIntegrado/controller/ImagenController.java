package com.PI.ProyectoIntegrado.controller;

import com.PI.ProyectoIntegrado.dto.ImagenDTO;
import com.PI.ProyectoIntegrado.model.Imagen;
import com.PI.ProyectoIntegrado.service.IImagenService;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;





import java.util.List;

@RestController
@RequestMapping("/imagen")
@CrossOrigin(origins = "http://localhost:3000")
public class ImagenController {

    @Autowired
    IImagenService imagenService;

    @Operation(summary = "Listar todas las imagenes")
    @GetMapping
    public List<Imagen> listaImagenes(){
        return imagenService.listaImagenes();
    }


    @Operation(summary = "Crear nueva imagen de un producto")
    @PostMapping
    public Imagen guardarImagen(@RequestBody ImagenDTO imagenDTO) throws ResourceNotFoundException {
        return imagenService.guardarImagen(imagenDTO);
    }

    @Operation(summary = "Borrar imagen por id")
    @DeleteMapping("/:{id}")
    public ResponseEntity<String> deleteImagen(@PathVariable Integer id) throws ResourceNotFoundException {
        imagenService.deleteImagen(id);
        return ResponseEntity.ok("Imagen con ID: "+ id +" Borrada");
    }


}

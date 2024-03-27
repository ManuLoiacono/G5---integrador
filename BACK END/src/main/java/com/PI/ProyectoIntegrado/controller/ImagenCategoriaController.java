package com.PI.ProyectoIntegrado.controller;



import com.PI.ProyectoIntegrado.model.ImagenCategoria;
import com.PI.ProyectoIntegrado.service.IImagenCategoriaService;
import io.swagger.v3.oas.annotations.Operation;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/imagenCategoria")
@CrossOrigin(origins = {"http://localhost:3000", "http://react-app-terra-rent.s3-website.us-east-2.amazonaws.com", "https://terrarent.ddns.net"})
public class ImagenCategoriaController {

    @Autowired
    IImagenCategoriaService imagenCategoriaService;

    @Operation(summary = "Listar todas las imagenes")
    @GetMapping("/listarImagenes")
    public List<String> listaImagenes() throws IOException {
        return imagenCategoriaService.listaImagenes();
    }

    @Operation(summary = "Crear nueva imagen de un producto")
    @PostMapping("/uploadCategoryImageToS3")
    public ResponseEntity<?> guardarImagen(@RequestBody ImagenCategoria imagen){

        imagenCategoriaService.guardarImagen(imagen);
        return ResponseEntity.ok(HttpStatus.OK);

    }

    @Operation(summary = "Borrar imagen por id")
    @DeleteMapping("/:{id}")
    public ResponseEntity<String> deleteImagen(@PathVariable Integer id) throws ResourceNotFoundException {
        imagenCategoriaService.deleteImagen(id);
        return ResponseEntity.ok("Imagen con ID: "+ id +" Borrada");
    }

}

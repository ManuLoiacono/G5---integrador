package com.PI.ProyectoIntegrado.controller;


import com.PI.ProyectoIntegrado.dto.CategoriaDTO;
import com.PI.ProyectoIntegrado.dto.ProductoDTO;
import com.PI.ProyectoIntegrado.service.ICategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/Categoria")
@CrossOrigin(origins = "http://ec2-18-219-62-16.us-east-2.compute.amazonaws.com:3001")
public class CategoriaController {

    @Autowired
    ICategoriaService categoriaService;

    @PostMapping
    public ResponseEntity<?> crearCategoria(@RequestBody CategoriaDTO categoriaDTO){

        categoriaService.agregarCategoria(categoriaDTO);
        return ResponseEntity.ok(HttpStatus.OK);

    }

    @GetMapping("/:{idCategoria}")
    public CategoriaDTO getCategoria(@PathVariable Integer idCategoria){

        return  categoriaService.listarUnaCategoria(idCategoria);

    }

    @GetMapping
    public Collection<CategoriaDTO> getTodasCategorias(){
        return categoriaService.listarCategorias();
    }

    @DeleteMapping("/:{idCategoria}")
    public ResponseEntity<?> eliminarCategoria(@PathVariable Integer idCategoria){
        categoriaService.eliminarCategoria(idCategoria);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}

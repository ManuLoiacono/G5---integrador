package com.PI.ProyectoIntegrado.controller;


import com.PI.ProyectoIntegrado.dto.CategoriaDTO;
import com.PI.ProyectoIntegrado.model.Categoria;
import com.PI.ProyectoIntegrado.service.ICategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/Categoria")
public class CategoriaController {

    @Autowired
    ICategoriaService categoriaService;

    @PostMapping
    public ResponseEntity<Categoria> crearCategoria(@RequestBody CategoriaDTO categoriaDTO){
        ResponseEntity response = null;
        response =  new ResponseEntity<>(categoriaService.agregarCategoria(categoriaDTO), HttpStatus.OK);
        return response;
    }

    @GetMapping("/{idCategoria}")
    public Categoria getCategoria(@PathVariable Integer idCategoria){
        return  categoriaService.listarUnaCategoria(idCategoria);

    }

    @GetMapping
    public Collection<CategoriaDTO> getTodasCategorias(){
        return categoriaService.listarCategorias();
    }

    @DeleteMapping("/{idCategoria}")
    public ResponseEntity<?> eliminarCategoria(@PathVariable Integer idCategoria){
        categoriaService.eliminarCategoria(idCategoria);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}

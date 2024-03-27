package com.PI.ProyectoIntegrado.controller;


import com.PI.ProyectoIntegrado.dto.CategoriaDTO;
import com.PI.ProyectoIntegrado.dto.ProductoDTO;
import com.PI.ProyectoIntegrado.model.Categoria;
import com.PI.ProyectoIntegrado.service.ICategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/Categoria")
@CrossOrigin(origins = {"http://localhost:3000", "http://react-app-terra-rent.s3-website.us-east-2.amazonaws.com", "https://terrarent.ddns.net"})
public class CategoriaController {

    @Autowired
    ICategoriaService categoriaService;

    @PostMapping
    public Categoria crearCategoria(@RequestBody CategoriaDTO categoriaDTO){

        System.out.println("Nueva categoria: " + categoriaDTO.getNombreCategoria());
        Categoria categoria = categoriaService.agregarCategoria(categoriaDTO);
        return categoria;

    }

    @GetMapping("/:{idCategoria}")
    public Categoria getCategoria(@PathVariable Integer idCategoria){

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

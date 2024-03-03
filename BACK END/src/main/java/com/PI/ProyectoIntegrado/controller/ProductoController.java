package com.PI.ProyectoIntegrado.controller;


import com.PI.ProyectoIntegrado.dto.ProductoDTO;
import com.PI.ProyectoIntegrado.model.Producto;
import com.PI.ProyectoIntegrado.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/Producto")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductoController {

    @Autowired
    IProductoService productoService;


    @PostMapping
    public ResponseEntity<Producto> crearProducto(@RequestBody ProductoDTO productoDTO){
        ResponseEntity response = null;
        response =  new ResponseEntity<>(productoService.agregarProducto(productoDTO), HttpStatus.OK);
        return response;

    }

    @GetMapping("/{idProducto}")
    public ResponseEntity<Producto> getProducto(@PathVariable Integer idProducto){
        return ResponseEntity.ok(productoService.listarUnProducto(idProducto).get());
    }

    @GetMapping
    public List<Producto> getTodosProductos(){
        return productoService.listarProductos();
    }

    @DeleteMapping("/{idProducto}")
    public ResponseEntity<?> eliminarProducto(@PathVariable Integer idProducto){
        productoService.eliminarProducto(idProducto);
        return ResponseEntity.ok(HttpStatus.OK);
    }



}

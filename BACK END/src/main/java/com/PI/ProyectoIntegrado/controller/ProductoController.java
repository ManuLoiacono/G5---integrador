package com.PI.ProyectoIntegrado.controller;


import com.PI.ProyectoIntegrado.dto.ProductoDTO;
import com.PI.ProyectoIntegrado.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/Producto")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductoController {

    @Autowired
    IProductoService productoService;


    @PostMapping
    public ResponseEntity<?> crearProducto(@RequestBody ProductoDTO productoDTO){

        productoService.agregarProducto(productoDTO);
        return ResponseEntity.ok(HttpStatus.OK);

    }

    @GetMapping("/:{idProducto}")
    public ProductoDTO getProducto(@PathVariable Integer idProducto){

        return  productoService.listarUnProducto(idProducto);

    }

    @GetMapping
    public Collection<ProductoDTO> getTodosProductos(){
        return productoService.listarProductos();
    }

    @DeleteMapping("/:{idProducto}")
    public ResponseEntity<?> eliminarProducto(@PathVariable Integer idProducto){
        productoService.eliminarProducto(idProducto);
        return ResponseEntity.ok(HttpStatus.OK);
    }



}

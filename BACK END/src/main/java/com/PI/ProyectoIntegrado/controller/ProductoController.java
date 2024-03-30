package com.PI.ProyectoIntegrado.controller;


import com.PI.ProyectoIntegrado.dto.ProductoDTO;
import com.PI.ProyectoIntegrado.model.Producto;
import com.PI.ProyectoIntegrado.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/Producto")
@CrossOrigin(origins = {"http://localhost:3000", "http://react-app-terra-rent.s3-website.us-east-2.amazonaws.com", "https://terrarent.ddns.net"})
public class ProductoController {

    @Autowired
    IProductoService productoService;


    @PostMapping
    public Producto crearProducto(@RequestBody ProductoDTO productoDTO){

        System.out.println("Nuevo producto: " + productoDTO.getNombreProd());
        Producto producto = productoService.agregarProducto(productoDTO);
        return producto;

    }

    @GetMapping("/:{idProducto}")
    public Producto getProducto(@PathVariable Integer idProducto){

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

    @PutMapping
    public ResponseEntity<?> modificarProducto(@RequestBody Producto producto){
        productoService.modificarProducto(producto);
        return ResponseEntity.ok(HttpStatus.OK);
    }


}

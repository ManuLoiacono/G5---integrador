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
@CrossOrigin(origins = {"http://localhost:3000", "http://react-app-terra-rent.s3-website.us-east-2.amazonaws.com"})
public class ProductoController {

    @Autowired
    IProductoService productoService;


    @PostMapping
    public Producto crearProducto(@RequestBody ProductoDTO productoDTO){
    //public ResponseEntity<?> crearProducto(@RequestHeader("Authorization") String token, @RequestBody ProductoDTO productoDTO){

        //try {
            System.out.println("Nuevo producto: " + productoDTO.getNombreProd());
            //tieneRolAdmin = AuthenticationService.getRolesFromToken(token);
            /*if(!tieneRolAdmin){
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("No tiene permisos para realizar esta accion.");
            }*/
            Producto producto = productoService.agregarProducto(productoDTO);
            return producto;

       /* } catch (DataIntegrityViolationException e){
            return //new ResponseEntity<>("ya existe un producto con ese nombre.", HttpStatus.BAD_REQUEST);
        } catch (Exception e){
            return //new ResponseEntity<>("Error al procesar la solicitud.", HttpStatus.INTERNAL_SERVER_ERROR);
        }*/

        //ANTES
        /*productoService.agregarProducto(productoDTO);
        return ResponseEntity.ok(HttpStatus.OK);*/
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



}

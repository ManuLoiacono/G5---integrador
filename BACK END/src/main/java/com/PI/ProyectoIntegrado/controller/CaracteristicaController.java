package com.PI.ProyectoIntegrado.controller;

import com.PI.ProyectoIntegrado.model.Caracteristica;
import com.PI.ProyectoIntegrado.model.Producto;
import com.PI.ProyectoIntegrado.repository.ICaracteristicaRepository;
import com.PI.ProyectoIntegrado.repository.IProductoRepository;
import com.PI.ProyectoIntegrado.service.ICaracteristicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/Caracteristica")
@CrossOrigin(origins = {"http://localhost:3000", "http://react-app-terra-rent.s3-website.us-east-2.amazonaws.com", "https://terrarent.ddns.net"})
public class CaracteristicaController {

    @Autowired
    IProductoRepository productoRepository;
    @Autowired
    ICaracteristicaRepository caracteristicaRepository;

    @Autowired
    ICaracteristicaService caracteristicasService;

    @PostMapping
    public ResponseEntity<?> crearCaracteristica(@RequestBody Caracteristica caracteristica){
        Set<Producto> productos = caracteristica.getProductos();
        if (productos != null) {
            for (Producto producto : productos) {
                producto.getCaracteristicas().add(caracteristica);
            }
        }
        caracteristicasService.agregarCaracteristica(caracteristica);
        return ResponseEntity.ok(HttpStatus.OK);
    }


    // Creo una caracteristica para un producto existente
    @PostMapping("/crearCaracteristicaParaProducto/:{idProducto}")
    public String createProjectForEmployee(@PathVariable Integer idProducto, @RequestBody Caracteristica caracteristica) {

        // Obtengo el Producto
        Producto producto = this.productoRepository.getById(idProducto);

        // nueva caracteristica
        Caracteristica caract = new Caracteristica(caracteristica.getDescripCaracteristica());

        // creo productos set
        Set<Producto> productos = new HashSet<>();
        productos.add(producto);

        // Asigno productos a caract
        caract.setProductos(productos);

        // guardo la caracteristica
        caracteristicasService.agregarCaracteristica(caract);

        return "Caracteristica saved!!!";
    }



    // Assidno una Caracteristica existente a un Producto existente
    @PostMapping("/asignoCaracteristicaToProducto/{idCarcateristica}/{idProducto}")
    public String assignProjectToEmployees(@PathVariable(name = "idCaracteristica") Integer idCaracteristica,
                                           @PathVariable(name = "idProducto") Integer idProducto) {


        // get producto
        Producto producto = this.productoRepository.getById(idProducto);

        // new carcateristica
        Caracteristica caract = this.caracteristicaRepository.getById(idCaracteristica);

        // create producto set
        Set<Producto> productos= new HashSet<>();
        productos.add(producto);

        // asigno producto set to caract
        caract.setProductos(productos);

        // save caract
        caracteristicasService.agregarCaracteristica(caract);

        return "Carcateristica saved!!!";
    }




    @GetMapping("/:{idCaracteristica}")
    public Caracteristica getCaracteristica(@PathVariable Integer idCaracteristica){

        return caracteristicasService.listarUnaCaracteristica(idCaracteristica);

    }

    @GetMapping
    public Collection<Caracteristica> getTodasCaracteristicas(){
        return caracteristicasService.listarCaracteristicas();
    }

    @DeleteMapping("/:{idCaracteristica}")
    public ResponseEntity<?> eliminarCaracteristica(@PathVariable Integer idCaracteristica){
        caracteristicasService.eliminarCaracteristica(idCaracteristica);
        return ResponseEntity.ok(HttpStatus.OK);
    }






}

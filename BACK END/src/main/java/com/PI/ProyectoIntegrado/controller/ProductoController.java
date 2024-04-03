package com.PI.ProyectoIntegrado.controller;


import com.PI.ProyectoIntegrado.dto.ProductoDTO;
import com.PI.ProyectoIntegrado.model.Caracteristica;
import com.PI.ProyectoIntegrado.model.Producto;
import com.PI.ProyectoIntegrado.repository.ICaracteristicaRepository;
import com.PI.ProyectoIntegrado.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/Producto")
@CrossOrigin(origins = {"http://localhost:3000", "http://react-app-terra-rent.s3-website.us-east-2.amazonaws.com", "https://terrarent.ddns.net"})
public class ProductoController {

    @Autowired
    IProductoService productoService;

    @Autowired
    ICaracteristicaRepository caracteristicaRepository;


    @PostMapping
    public Producto crearProducto(@RequestBody ProductoDTO productoDTO){

        System.out.println("Nuevo producto: " + productoDTO.getNombreProd());
        Producto producto = productoService.agregarProducto(productoDTO);
        return producto;

    }

    // Creo un producto para una caracteristica existente
    @PostMapping(value = "/crearProductoParaCaracteristica/{idCaracteristica}")
    public String createEmployeeForProject(@RequestBody ProductoDTO productoDTO,
                                           @PathVariable(name = "idCaracteristica") Integer idCaracteristica){

        // creo un producto nuevo
        Producto producto = productoService.agregarProducto(productoDTO);

        // obtengo la caracteristica
        Caracteristica caracteristica = this.caracteristicaRepository.getById(idCaracteristica);

        // creo un set de caracteristicas
        Set<Caracteristica> caracteristicas = new HashSet<>();
        caracteristicas.add(caracteristica);

        // asigno el set al producto
        productoDTO.setCaracteristicas(caracteristicas);

        // guardo el producto
        producto = productoService.agregarProducto(productoDTO);

        return "Producto saved!!!";
    }



//    // Asigno un producto existente a una caracteristica existente
//    @PostMapping(value = "/assignEmployeeToProject/{projId}")
//    public String assignEmployeeToProject(@PathVariable(name = "projId") Integer projId) {
//        System.out.println("\nFetch existing Employee details and assign
//                them to an existing Project." + "\n");
//
//                // get first Employee
//        int emplId = 1;
//        Employee employee1 = this.employeeRepository.getById(emplId);
//        System.out.println("\nEmployee details :: " + employee1.toString() + "\n");
//
//        // get first Employee
//        emplId = 8;
//        Employee employee2 = this.employeeRepository.getById(emplId);
//        System.out.println("\nEmployee details :: " + employee2.toString() + "\n");
//
//        // get a Project
//        Project project = this.projectRepository.getById(projId);
//        System.out.println("\nProject details :: " + project.toString() + "\n");
//
//        // create Employee set
//        Set&lt;Employee&gt; employees = new HashSetSet&lt;&gt;();
//        employees.add(employee1);
//        employees.add(employee2);
//
//        // assign Employee Set to Project
//        project.setEmployees(employees);
//
//        // save Project
//        project = projectRepository.save(project);
//
//        System.out.println("Employees assigned to the Project." + "\n");
//
//        return "Employee saved!!!";
//    }








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

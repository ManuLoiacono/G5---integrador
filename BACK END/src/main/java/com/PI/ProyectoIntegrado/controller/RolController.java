package com.PI.ProyectoIntegrado.controller;

import com.PI.ProyectoIntegrado.dto.RolDTO;
import com.PI.ProyectoIntegrado.model.Rol;
import com.PI.ProyectoIntegrado.service.RolService;
import io.swagger.v3.oas.annotations.Operation;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


    @RestController
    @RequestMapping("/roles")
    public class RolController {

        @Autowired
        RolService rolService;

        @Operation(summary = "Lista de todos los roles")
        @GetMapping("/lista")
        public List<Rol> listaRoles() {
            return rolService.listaRoles();
        }

        @Operation(summary = "Crear nuevo rol")
        @PostMapping("/nuevo")
        public Rol guardarRol(@RequestBody RolDTO rol) throws ResourceNotFoundException {
            return rolService.guardarRol(rol);
        }

        @Operation(summary = "Eliminar Rol por ID")
        @DeleteMapping("/delete/{id}")
        public ResponseEntity<String> deleteRol(@PathVariable Integer id) throws ResourceNotFoundException {
            rolService.deleteRol(id);
            return ResponseEntity.ok("Role con ID: " + id + " eliminado");
        }
}


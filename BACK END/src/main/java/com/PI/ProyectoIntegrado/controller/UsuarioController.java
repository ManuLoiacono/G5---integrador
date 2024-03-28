package com.PI.ProyectoIntegrado.controller;


import com.PI.ProyectoIntegrado.dto.ProductoDTO;
import com.PI.ProyectoIntegrado.dto.UsuarioDTO;
import com.PI.ProyectoIntegrado.service.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/Usuario")
@CrossOrigin(origins = {"http://localhost:3000", "http://react-app-terra-rent.s3-website.us-east-2.amazonaws.com, https://terrarent.ddns.net"})
public class UsuarioController {

    @Autowired
    IUsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<?> crearUsuario(@RequestBody UsuarioDTO usuarioDTO){
        try {
            usuarioService.agregarUsuario(usuarioDTO);
            return ResponseEntity.ok().build();
            } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }

    @GetMapping("/{idUsuario}")
    public UsuarioDTO getUsuario(@PathVariable Integer idUsuario){

        return  usuarioService.listarUnUsuario(idUsuario);

    }

    @GetMapping
    public Collection<UsuarioDTO> getTodosUsuarios(){
        return usuarioService.listarUsuarios();
    }

    @DeleteMapping("/{idUsuario}")
    public ResponseEntity<?> eliminarUsuario(@PathVariable Integer idUsuario){
        usuarioService.eliminarUsuario(idUsuario);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> modificarUsuario(@RequestBody UsuarioDTO usuarioDTO){
        usuarioService.modificarUsuario(usuarioDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }


}

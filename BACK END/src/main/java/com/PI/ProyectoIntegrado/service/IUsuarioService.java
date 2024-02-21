package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.dto.ReservaDTO;
import com.PI.ProyectoIntegrado.dto.UsuarioDTO;

import java.util.Set;

public interface IUsuarioService {

    void agregarUsuario(UsuarioDTO usuarioDTO);
    void eliminarUsuario(Integer idUsuario);
    UsuarioDTO listarUnUsuario(Integer idUsuario);

    Set<UsuarioDTO> listarUsuarios();


}

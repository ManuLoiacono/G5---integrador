package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.dto.RolDTO;
import com.PI.ProyectoIntegrado.model.Rol;

import java.util.List;
import java.util.Optional;

public interface IRolService {

    List<Rol> listaRoles();
    Optional<Rol> buscarPorId (Integer id);
    Rol guardarRol (RolDTO rolDTO);
    Rol actualizarRol(Rol rol);
    void deleteRol(Integer id);
}

package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.model.Caracteristicas;

import java.util.Set;

public interface ICaracteristicasService {

    public void agregarCaracteristica(Caracteristicas caracteristicas);
    public void eliminarCaracteristica(Integer idCaracteristica);
    public Caracteristicas listarUnaCaracteristica(Integer idCaracteristicas);
    public Set<Caracteristicas> listarCaracteristicas();
}

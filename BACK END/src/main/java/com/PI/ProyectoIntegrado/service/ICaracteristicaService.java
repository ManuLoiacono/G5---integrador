package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.dto.CaracteristicaDTO;
import com.PI.ProyectoIntegrado.model.Caracteristica;

import java.util.Set;

public interface ICaracteristicaService {

    public void agregarCaracteristica(Caracteristica caracteristica);
    public void eliminarCaracteristica(Integer idCaracteristica);
    public Caracteristica listarUnaCaracteristica(Integer idCaracteristicas);
    public Set<Caracteristica> listarCaracteristicas();
}

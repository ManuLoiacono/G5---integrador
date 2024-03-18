package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.model.Politica;

import java.util.Set;

public interface IPoliticaService {

    public void agregarPolitica(Politica politica);
    public void eliminarPolitica(Integer idPolitica);
    public Politica listarUnaPolitica(Integer idPolitica);
    public Set<Politica> listarPoliticas();
}

package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.dto.CategoriaDTO;

import java.util.Set;

public interface ICategoriaService {

    void agregarCategoria(CategoriaDTO categoriaDTO);
    void eliminarCategoria(Integer idCategoria);
    CategoriaDTO listarUnaCategoria(Integer idCategoria);

    Set<CategoriaDTO> listarCategorias();


}

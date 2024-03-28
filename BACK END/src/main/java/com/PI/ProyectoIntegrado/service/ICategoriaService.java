package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.dto.CategoriaDTO;
import com.PI.ProyectoIntegrado.model.Categoria;

import java.util.Set;

public interface ICategoriaService {

    Categoria agregarCategoria(CategoriaDTO categoriaDTO);
    void eliminarCategoria(Integer idCategoria);
    Categoria listarUnaCategoria(Integer idCategoria);

    Set<CategoriaDTO> listarCategorias();


}

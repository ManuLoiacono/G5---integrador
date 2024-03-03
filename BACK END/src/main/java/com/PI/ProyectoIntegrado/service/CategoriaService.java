package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.model.Producto;
import com.PI.ProyectoIntegrado.repository.ICategoriaRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.PI.ProyectoIntegrado.dto.CategoriaDTO;
import com.PI.ProyectoIntegrado.model.Categoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CategoriaService implements ICategoriaService{

    @Autowired
    ICategoriaRepository categoriaRepository;

    @Autowired
    ObjectMapper mapper;


    @Override
    public Categoria agregarCategoria(CategoriaDTO categoriaDTO) {
        Set<Producto> producto = new HashSet<>();
        Categoria categoria = new Categoria(categoriaDTO.getNombreCategoria() ,categoriaDTO.getUrlimg(),producto);
        return categoriaRepository.save(categoria);
    }

    @Override
    public void eliminarCategoria(Integer idCategoria) {

        categoriaRepository.deleteById(idCategoria);

    }

    @Override
    public Categoria listarUnaCategoria(Integer idCategoria) {
        Optional<Categoria> buscarCategoria = categoriaRepository.findById(idCategoria);
        return buscarCategoria.orElse(null);
    }

    @Override
    public Set<CategoriaDTO> listarCategorias() {

        List<Categoria> categorias = categoriaRepository.findAll();
        Set<CategoriaDTO> categoriasDTO = new HashSet<>();
        for(Categoria categoria: categorias){
            categoriasDTO.add(mapper.convertValue(categoria, CategoriaDTO.class));
        }

        return categoriasDTO;

    }
}

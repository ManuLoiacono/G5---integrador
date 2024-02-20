package service;

import dto.CategoriaDTO;
import model.Categoria;

import java.util.Set;

public interface ICategoriaService {

    void agregarCategoria(Categoria categoriaDTO);
    void eliminarCategoria(Integer idCategoria);
    CategoriaDTO listarUnaCategoria(Integer idCategoria);

    Set<CategoriaDTO> listarCategorias();


}

package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.model.Imagen;
import com.PI.ProyectoIntegrado.model.ImagenCategoria;
import org.apache.velocity.exception.ResourceNotFoundException;

import java.io.IOException;
import java.util.List;

public interface IImagenCategoriaService {
    void guardarImagen(ImagenCategoria imagen);
    //void actualizarImagen(Imagen imagen);
    void deleteImagen(Integer id) throws ResourceNotFoundException;

    List<String> listaImagenes() throws IOException;
}

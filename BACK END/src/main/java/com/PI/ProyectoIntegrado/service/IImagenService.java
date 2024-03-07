package com.PI.ProyectoIntegrado.service;
import com.PI.ProyectoIntegrado.model.Imagen;
import org.apache.velocity.exception.ResourceNotFoundException;

import java.io.IOException;
import java.util.List;



public interface IImagenService {

    void guardarImagen(Imagen imagen);
    //void actualizarImagen(Imagen imagen);
    void deleteImagen(Integer id) throws ResourceNotFoundException;

    List<String> listaImagenes() throws IOException;

}
package com.PI.ProyectoIntegrado.service;
import com.PI.ProyectoIntegrado.dto.ImagenDTO;
import com.PI.ProyectoIntegrado.model.Imagen;
import java.util.List;



public interface IImagenService {

    Imagen guardarImagen(ImagenDTO imagenDTO);
    Imagen actualizarImagen(Imagen imagen);
    void deleteImagen(Integer id);

    List<Imagen> listaImagenes();

}
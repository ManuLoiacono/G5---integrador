package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.dto.ImagenDTO;
import com.PI.ProyectoIntegrado.model.Imagen;
import com.PI.ProyectoIntegrado.model.Producto;
import com.PI.ProyectoIntegrado.repository.IImagenRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class ImagenService implements IImagenService{

    @Autowired
    IImagenRepository  imagenRepository;

    @Autowired
    ProductoService productoService;

    @Autowired
    ObjectMapper mapper;


    public List<Imagen> listaImagenes(){
        return imagenRepository.findAll();
    }


    @Override
    public void guardarImagen(ImagenDTO imagenDTO) {
        Imagen imagen = mapper.convertValue(imagenDTO, Imagen.class);
        imagenRepository.save(imagen);
    }

    /*public void actualizarImagen(Imagen imagen) throws ResourceNotFoundException {
        Optional<Imagen> searchedCategory = imagenRepository.findById(imagen.getId());
        if (searchedCategory.isPresent()){
            return imagenRepository.save(imagen);
        }
        else {
            throw new ResourceNotFoundException("Imagen con ID: "+ imagen.getId()+" no existe");
        }
    }*/

    public void deleteImagen(Integer id) throws ResourceNotFoundException{
        Optional<Imagen> searchedImage = imagenRepository.findById(id);
        if (searchedImage.isPresent()){
            imagenRepository.deleteById(id);
        }
        else {
            throw new ResourceNotFoundException("imagen con ID: "+ id +" no existe");
        }
    }


}

package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.dto.ReservaDTO;
import com.PI.ProyectoIntegrado.model.Caracteristicas;
import com.PI.ProyectoIntegrado.model.Producto;
import com.PI.ProyectoIntegrado.model.Reserva;
import com.PI.ProyectoIntegrado.repository.ICaracteristicasRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CaracteristicasService implements ICaracteristicasService {


    @Autowired
    private ICaracteristicasRepository caracteristicasRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void agregarCaracteristica(Caracteristicas caracteristicas) {

        caracteristicasRepository.save(caracteristicas);

    }

    @Override
    public void eliminarCaracteristica(Integer idCaracteristica) {

        caracteristicasRepository.deleteById(idCaracteristica);

    }

    @Override
    public Caracteristicas listarUnaCaracteristica(Integer idCaracteristicas) {

        Optional<Caracteristicas> caracteristicas = caracteristicasRepository.findById(idCaracteristicas);
        //ProductoDTO productoDTO = null;
        Caracteristicas caracteristicaDevolver = null;
        if(caracteristicas.isPresent()){
            caracteristicaDevolver = mapper.convertValue(caracteristicas, Caracteristicas.class);
        }
        return caracteristicaDevolver;


    }

    @Override
    public Set<Caracteristicas> listarCaracteristicas() {

        List<Caracteristicas> caracteristicas = caracteristicasRepository.findAll();
        Set<Caracteristicas> c = new HashSet<>();
        for(Caracteristicas caracteristica: caracteristicas){
            c.add(mapper.convertValue(caracteristica, Caracteristicas.class));
        }

        return c;
    }



}

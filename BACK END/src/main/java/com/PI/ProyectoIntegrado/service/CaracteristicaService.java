package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.dto.CaracteristicaDTO;
import com.PI.ProyectoIntegrado.model.Caracteristica;
import com.PI.ProyectoIntegrado.model.Producto;
import com.PI.ProyectoIntegrado.repository.ICaracteristicaRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CaracteristicaService implements ICaracteristicaService {


    @Autowired
    private ICaracteristicaRepository caracteristicasRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void agregarCaracteristica(Caracteristica caracteristica) {
        caracteristicasRepository.save(caracteristica);
    }

    @Override
    public void eliminarCaracteristica(Integer idCaracteristica) {

        caracteristicasRepository.deleteById(idCaracteristica);

    }

    @Override
    public Caracteristica listarUnaCaracteristica(Integer idCaracteristicas) {

        Optional<Caracteristica> caracteristicas = caracteristicasRepository.findById(idCaracteristicas);
        //ProductoDTO productoDTO = null;
        Caracteristica caracteristicaDevolver = null;
        if(caracteristicas.isPresent()){
            caracteristicaDevolver = mapper.convertValue(caracteristicas, Caracteristica.class);
        }
        return caracteristicaDevolver;


    }

    @Override
    public Set<Caracteristica> listarCaracteristicas() {

        List<Caracteristica> caracteristicas = caracteristicasRepository.findAll();
        Set<Caracteristica> c = new HashSet<>();
        for(Caracteristica caracteristica: caracteristicas){
            c.add(mapper.convertValue(caracteristica, Caracteristica.class));
        }

        return c;
    }



}

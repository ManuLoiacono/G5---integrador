package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.model.Politica;
import com.PI.ProyectoIntegrado.repository.IPoliticaRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class PoliticaService implements IPoliticaService {


    @Autowired
    private IPoliticaRepository politicaRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void agregarPolitica(Politica politica) {

        politicaRepository.save(politica);

    }

    @Override
    public void eliminarPolitica(Integer idPolitica) {

        politicaRepository.deleteById(idPolitica);

    }

    @Override
    public Politica listarUnaPolitica(Integer idPolitica) {

        Optional<Politica> politica = politicaRepository.findById(idPolitica);
        Politica politicaDevolver = null;
        if(politica.isPresent()){
            politicaDevolver = mapper.convertValue(politica, Politica.class);
        }
        return politicaDevolver;


    }

    @Override
    public Set<Politica> listarPoliticas() {

        List<Politica> politicas = politicaRepository.findAll();
        Set<Politica> p = new HashSet<>();
        for(Politica politica: politicas){
            p.add(mapper.convertValue(politica, Politica.class));
        }

        return p;
    }



}

package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.dto.RolDTO;
import com.PI.ProyectoIntegrado.model.Rol;
import com.PI.ProyectoIntegrado.repository.IRolRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RolService implements IRolService{
    @Autowired
    IRolRepository rolRepository;

    public List<Rol> listaRoles(){
        return rolRepository.findAll();
    }

    public Optional<Rol> buscarPorId(Integer id) throws ResourceNotFoundException {
        Optional< Rol > searchedRole = rolRepository.findById(id);
        if (searchedRole.isPresent()){
            return rolRepository.findById(id);
        }
        else {
            throw new ResourceNotFoundException("Role con ID: "+ id +" No existe");
        }

    }

    public Rol guardarRol(RolDTO rolDTO){
        Rol rol = new Rol(rolDTO.getNombre());
        return rolRepository.save(rol);
    }

    public Rol actualizarRol(Rol rol) throws ResourceNotFoundException {
        Optional<Rol> buscarRol = rolRepository.findById(rol.getId());
        if (buscarRol.isPresent()){
            return rolRepository.save(rol);
        }
        else {
            throw new ResourceNotFoundException("Role con ID: "+ rol.getId()+" no existe");
        }
    }

    public void deleteRol(Integer id) throws ResourceNotFoundException{
        Optional<Rol> buscarRol = rolRepository.findById(id);
        if (buscarRol.isPresent()){
            rolRepository.deleteById(id);
        }
        else {
            throw new ResourceNotFoundException("Role con ID: "+ id +" no existe");
        }
    }


}

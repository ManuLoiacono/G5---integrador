package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.dto.UsuarioDTO;

import com.PI.ProyectoIntegrado.model.Usuario;
import com.PI.ProyectoIntegrado.repository.IUsuarioRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;


@Service
public class UsuarioService implements IUsuarioService {

    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Autowired
    ObjectMapper mapper;


    @Override
    public void agregarUsuario(UsuarioDTO usuarioDTO) {
        Usuario usuario = mapper.convertValue(usuarioDTO, Usuario.class);
        usuarioRepository.save(usuario);
    }

    @Override
    public void eliminarUsuario(Integer idUsuario) {
        usuarioRepository.deleteById(idUsuario);
    }

    @Override
    public UsuarioDTO listarUnUsuario(Integer idUsuario) {
        Optional<Usuario> usuario = usuarioRepository.findById(idUsuario);
        UsuarioDTO usuarioDTO = null;
        if(usuario.isPresent()){
            usuarioDTO = mapper.convertValue(usuario, UsuarioDTO.class);
        }
        return usuarioDTO;
    }

    @Override
    public Set<UsuarioDTO> listarUsuarios() {
        List<Usuario> usuarios = usuarioRepository.findAll();
        Set<UsuarioDTO> usuariosDTO = new HashSet<>();
        for(Usuario usuario: usuarios){
            usuariosDTO.add(mapper.convertValue(usuario, UsuarioDTO.class));
        }

        return usuariosDTO;
    }
}

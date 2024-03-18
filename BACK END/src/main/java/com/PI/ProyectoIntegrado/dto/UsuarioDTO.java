package com.PI.ProyectoIntegrado.dto;

import com.PI.ProyectoIntegrado.model.usuario.UserRol;

public class UsuarioDTO {

    private Integer idUsuario;

    private String username;
    private String nombreUsuario;
    private String apellidoUsuario;
    private Integer numTelefono;
    private String email;
    private String password;
    private UserRol userRol;

    public UsuarioDTO() {
    }

    public UsuarioDTO(Integer idUsuario, String username, String nombreUsuario, String apellidoUsuario, Integer numTelefono, String email, String password, UserRol userRol) {
        this.idUsuario = idUsuario;
        this.username = username;
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.numTelefono = numTelefono;
        this.email = email;
        this.password = password;
        this.userRol = userRol;
    }

    public UsuarioDTO(String username, String nombreUsuario, String apellidoUsuario, Integer numTelefono, String email, String password, UserRol userRol) {
        this.username = username;
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.numTelefono = numTelefono;
        this.email = email;
        this.password = password;
        this.userRol = userRol;
    }

    public Integer getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Integer idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getApellidoUsuario() {
        return apellidoUsuario;
    }

    public void setApellidoUsuario(String apellidoUsuario) {
        this.apellidoUsuario = apellidoUsuario;
    }

    public Integer getNumTelefono() {
        return numTelefono;
    }

    public void setNumTelefono(Integer numTelefono) {
        this.numTelefono = numTelefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public UserRol getUserRol() {
        return userRol;
    }

    public void setUserRol(UserRol userRol) {
        this.userRol = userRol;
    }
}

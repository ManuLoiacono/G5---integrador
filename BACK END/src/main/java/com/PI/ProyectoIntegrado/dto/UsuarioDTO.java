package com.PI.ProyectoIntegrado.dto;

public class UsuarioDTO {

    private Integer idUsuario;
    private String nombreUsuario;
    private String apellidoUsuario;
    private Long numTelefono;
    private String email;
    private String password;


    public UsuarioDTO() {
    }

    public UsuarioDTO(String nombreUsuario, String apellidoUsuario, Long numTelefono, String email, String password) {
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.numTelefono = numTelefono;
        this.email = email;
        this.password = password;
    }

    public UsuarioDTO(Integer idUsuario, String nombreUsuario, String apellidoUsuario, Long numTelefono, String email, String password) {
        this.idUsuario = idUsuario;
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.numTelefono = numTelefono;
        this.email = email;
        this.password = password;
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

    public Long getNumTelefono() {
        return numTelefono;
    }

    public void setNumTelefono(Long numTelefono) {
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
}

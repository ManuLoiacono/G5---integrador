package com.PI.ProyectoIntegrado.model;

import com.PI.ProyectoIntegrado.model.usuario.UserRol;
import com.PI.ProyectoIntegrado.model.Reserva;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.Set;


@Entity
@Table(name="Usuarios")
public class Usuario {


    @Id
    @SequenceGenerator(name = "user_sequence", sequenceName = "user_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_sequence")
    private Integer idUsuario;

    @Column
    private String username;

    @Column
    private String nombreUsuario;

    @Column
    private String apellidoUsuario;

    @Column
    private Integer numTelefono;

    @Column
    private String email;

    @Column
    private String password;


    @Column
    @Enumerated(EnumType.STRING)
    private UserRol userRol;

    @OneToMany(mappedBy = "usuario")
    private Set<Reserva> reservas;


    public Usuario() {
    }

    public Usuario(Integer idUsuario, String username, String nombreUsuario, String apellidoUsuario, Integer numTelefono, String email, String password, UserRol userRol, Set<Reserva> reservas) {
        this.idUsuario = idUsuario;
        this.username = username;
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.numTelefono = numTelefono;
        this.email = email;
        this.password = password;
        this.userRol = userRol;
        this.reservas = reservas;
    }

    public Usuario(String username, String nombreUsuario, String apellidoUsuario, Integer numTelefono, String email, String password, UserRol userRol, Set<Reserva> reservas) {
        this.username = username;
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.numTelefono = numTelefono;
        this.email = email;
        this.password = password;
        this.userRol = userRol;
        this.reservas = reservas;
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

    public Set<Reserva> getReservas() {
        return reservas;
    }

    public void setReservas(Set<Reserva> reservas) {
        this.reservas = reservas;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserRol getUserRol() {
        return userRol;
    }

    public void setUserRol(UserRol userRol) {
        this.userRol = userRol;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
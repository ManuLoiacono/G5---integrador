package com.PI.ProyectoIntegrado.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;
import java.util.Set;


@Entity
@Table(name="Usuarios")
public class Usuario {

    @NotNull
    @Id
    @SequenceGenerator(name = "user_sequence", sequenceName = "user_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_sequence")
    private Integer idUsuario;
    @NotNull
    @Column
    private String nombreUsuario;
    @NotNull
    @Column
    private String apellidoUsuario;
    @NotNull
    @Column
    private Long numTelefono;
    @NotNull
    @Column
    private String email;
    @NotNull
    @Column
    private String password;
    @NotNull
    @ManyToOne
    @JoinColumn(name="id_rol", referencedColumnName = "id")
    private Rol id_rol;
    @OneToMany(mappedBy = "usuario")
     private Set<Reserva> reservas;


    public Usuario() {
    }

    public Usuario(Integer idUsuario, String nombreUsuario, String apellidoUsuario, Long numTelefono, String email, String password, Rol id_rol, Set<Reserva> reservas) {
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.numTelefono = numTelefono;
        this.email = email;
        this.password = password;
        this.id_rol = id_rol;
        this.reservas = reservas;
    }

    public Usuario(String nombreUsuario, String apellidoUsuario, Long numTelefono, String email, String password, Rol id_rol, Set<Reserva> reservas) {
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.numTelefono = numTelefono;
        this.email = email;
        this.password = password;
        this.id_rol = id_rol;
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

    public Rol getId_rol() {
        return id_rol;
    }

    public void setId_rol(Rol id_rol) {
        this.id_rol = id_rol;
    }

    public Set<Reserva> getReservas() {
        return reservas;
    }

    public void setReservas(Set<Reserva> reservas) {
        this.reservas = reservas;
    }
}
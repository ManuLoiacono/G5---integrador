package com.PI.ProyectoIntegrado.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="Rol")
public class Rol {

    @NotNull
    @Id
    @SequenceGenerator(name = "rol_sequence", sequenceName = "rol_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "rol_sequence")
    private Integer id;
    @NotNull
    @Column
    private String nombre;
    @JsonIgnore
    @OneToMany(mappedBy = "id_rol")
    private Set<Usuario> usuario = new HashSet<>();

    public Rol() {
    }

    public Rol(Integer id, String nombre, Set<Usuario> usuario) {
        this.id = id;
        this.nombre = nombre;
        this.usuario = usuario;
    }

    public Rol(String nombre, Set<Usuario> usuario) {
        this.nombre = nombre;
        this.usuario = usuario;
    }

    public Rol(String nombre) {
        this.nombre = nombre;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Set<Usuario> getUsuario() {
        return usuario;
    }

    public void setUsuario(Set<Usuario> usuario) {
        this.usuario = usuario;
    }
}

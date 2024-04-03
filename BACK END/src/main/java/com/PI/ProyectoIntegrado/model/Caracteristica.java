package com.PI.ProyectoIntegrado.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import org.hibernate.annotations.NotFound;
import software.amazon.awssdk.annotations.NotNull;

import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name="Caracteristicas")
public class Caracteristica {

    @Id
    @SequenceGenerator(name = "caracteristica_sequence", sequenceName = "caracteristica_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "caracteristica_sequence")
    private Integer idCaracteristica;

    @Column
    private String descripCaracteristica;


    @ManyToMany(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH })
    @JoinTable(
            name = "producto_caracteristica",
            joinColumns = @JoinColumn(name = "idCaracteristca"),
            inverseJoinColumns = @JoinColumn(name = "idProducto"))
    private Set<Producto> productos;


    public Caracteristica() {
    }

    public Caracteristica(String descripCaracteristica) {
        this.descripCaracteristica = descripCaracteristica;
    }

    public Caracteristica(String descripCaracteristica, Set<Producto> productos) {
        this.descripCaracteristica = descripCaracteristica;
        this.productos = productos;
    }

    public Caracteristica(Integer idCaracteristica, String descripCaracteristica, Set<Producto> productos) {
        this.idCaracteristica = idCaracteristica;
        this.descripCaracteristica = descripCaracteristica;
        this.productos = productos;
    }

    public Integer getIdCaracteristica() {
        return idCaracteristica;
    }

    public void setIdCaracteristica(Integer idCaracteristica) {
        this.idCaracteristica = idCaracteristica;
    }

    public String getDescripCaracteristica() {
        return descripCaracteristica;
    }

    public void setDescripCaracteristica(String descripCaracteristica) {
        this.descripCaracteristica = descripCaracteristica;
    }

    public Set<Producto> getProductos() {
        return productos;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }


}

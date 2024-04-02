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


    @ManyToMany(mappedBy = "caracteristicas")
    private Set<Producto> productos = new HashSet<>();


    @NotNull
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;


    public Caracteristica() {
    }

    public Caracteristica(String descripCaracteristica, Set<Producto> productos, Categoria categoria) {
        this.descripCaracteristica = descripCaracteristica;
        this.productos = productos;
        this.categoria = categoria;
    }

    public Caracteristica(Integer idCaracteristica, String descripCaracteristica, Set<Producto> productos, Categoria categoria) {
        this.idCaracteristica = idCaracteristica;
        this.descripCaracteristica = descripCaracteristica;
        this.productos = productos;
        this.categoria = categoria;
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

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}

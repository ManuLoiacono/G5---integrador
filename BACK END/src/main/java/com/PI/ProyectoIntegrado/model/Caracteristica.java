package com.PI.ProyectoIntegrado.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;


@Entity
@Table(name="Caracteristicas")
public class Caracteristica {

    @Id
    @SequenceGenerator(name = "caracteristica_sequence", sequenceName = "caracteristica_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "caracteristica_sequence")
    private Integer idCaracteristica;

    @Column
    private String descripCaracteristica;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "idProducto", referencedColumnName = "idProducto")
    @JsonProperty("producto")
    private Producto producto;

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;


    public Caracteristica() {
    }

    public Caracteristica(String descripCaracteristica, Producto producto, Categoria categoria) {
        this.descripCaracteristica = descripCaracteristica;
        this.producto = producto;
        this.categoria = categoria;
    }

    public Caracteristica(Integer idCaracteristica, String descripCaracteristica, Producto producto, Categoria categoria) {
        this.idCaracteristica = idCaracteristica;
        this.descripCaracteristica = descripCaracteristica;
        this.producto = producto;
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

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}

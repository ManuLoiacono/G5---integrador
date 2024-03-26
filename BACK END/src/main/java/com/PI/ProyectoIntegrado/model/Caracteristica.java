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
    private String nombreCaracteristicas;

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

    public Caracteristica(String nombreCaracteristicas, Producto producto, Categoria categoria) {
        this.nombreCaracteristicas = nombreCaracteristicas;
        this.producto = producto;
        this.categoria = categoria;
    }

    public Caracteristica(Integer idCaracteristica, String nombreCaracteristicas, Producto producto, Categoria categoria) {
        this.idCaracteristica = idCaracteristica;
        this.nombreCaracteristicas = nombreCaracteristicas;
        this.producto = producto;
        this.categoria = categoria;
    }

    public Integer getIdCaracteristica() {
        return idCaracteristica;
    }

    public void setIdCaracteristica(Integer idCaracteristica) {
        this.idCaracteristica = idCaracteristica;
    }

    public String getNombreCaracteristicas() {
        return nombreCaracteristicas;
    }

    public void setNombreCaracteristicas(String nombreCaracteristicas) {
        this.nombreCaracteristicas = nombreCaracteristicas;
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

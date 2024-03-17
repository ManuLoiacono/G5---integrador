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
    //@JsonBackReference
    @JoinColumn(name = "idProducto", referencedColumnName = "idProducto")
    @JsonProperty("producto")
    private Producto producto;

    public Caracteristica(String nombreCaracteristicas, Producto producto) {
        this.nombreCaracteristicas = nombreCaracteristicas;
        this.producto = producto;
    }

    public Caracteristica(Integer idCaracteristica, String nombreCaracteristicas, Producto producto) {
        this.idCaracteristica = idCaracteristica;
        this.nombreCaracteristicas = nombreCaracteristicas;
        this.producto = producto;
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
}

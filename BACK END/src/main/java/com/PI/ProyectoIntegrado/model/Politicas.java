package com.PI.ProyectoIntegrado.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;
import software.amazon.awssdk.services.s3.endpoints.internal.Value;

@Entity
@Table(name="Politicas")
public class Politicas {

    @Id
    @SequenceGenerator(name = "politica_sequence", sequenceName = "politica_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "politica_sequence")
    private Integer idPolitica;

    @Column
    private String nombrePolitica;

    @Column
    private String descripcionPolitica;

    @NotNull
    @ManyToOne
    //@JsonBackReference
    @JoinColumn(name = "idProducto", referencedColumnName = "idProducto")
    @JsonProperty("producto")
    private Producto producto;


    public Politicas(String nombrePolitica, String descripcionPolitica, Producto producto) {
        this.nombrePolitica = nombrePolitica;
        this.descripcionPolitica = descripcionPolitica;
        this.producto = producto;
    }

    public Politicas(Integer idPolitica, String nombrePolitica, String descripcionPolitica, Producto producto) {
        this.idPolitica = idPolitica;
        this.nombrePolitica = nombrePolitica;
        this.descripcionPolitica = descripcionPolitica;
        this.producto = producto;
    }


    public Integer getIdPolitica() {
        return idPolitica;
    }

    public void setIdPolitica(Integer idPolitica) {
        this.idPolitica = idPolitica;
    }

    public String getNombrePolitica() {
        return nombrePolitica;
    }

    public void setNombrePolitica(String nombrePolitica) {
        this.nombrePolitica = nombrePolitica;
    }

    public String getDescripcionPolitica() {
        return descripcionPolitica;
    }

    public void setDescripcionPolitica(String descripcionPolitica) {
        this.descripcionPolitica = descripcionPolitica;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }
}

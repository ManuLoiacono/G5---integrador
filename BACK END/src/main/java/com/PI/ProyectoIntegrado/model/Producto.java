package com.PI.ProyectoIntegrado.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name="Productos")
public class Producto {


    @Id
    @SequenceGenerator(name = "product_sequence", sequenceName = "product_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_sequence")
    private Integer idProducto;

    @Column
    private String nombreProd;

    @Column
    private Float precioProd;


    @Column
    private String descripcionProd;


    @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL)
    @JsonManagedReference
    private Set<Imagen> imagenes = new HashSet<>();



    @OneToMany(mappedBy = "producto")
    private Set<Reserva> reservas;

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;








    public Producto() {
    }

    public Producto(Integer idProducto, String nombreProd, String descripcionProd, Float precioProd, Categoria categoria, Set<Reserva> reservas) {
        this.idProducto = idProducto;
        this.nombreProd = nombreProd;
        this.descripcionProd = descripcionProd;
        this.precioProd = precioProd;
        this.categoria = categoria;
        this.reservas = reservas;
    }

    public Integer getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(Integer idProducto) {
        this.idProducto = idProducto;
    }

    public String getNombreProd() {
        return nombreProd;
    }

    public void setNombreProd(String nombreProd) {
        this.nombreProd = nombreProd;
    }

    public Float getPrecioProd() {
        return precioProd;
    }

    public void setPrecioProd(Float precioProd) {
        this.precioProd = precioProd;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Set<Reserva> getReservas() {
        return reservas;
    }

    public void setReservas(Set<Reserva> reservas) {
        this.reservas = reservas;
    }

    public String getDescripcionProd() {
        return descripcionProd;
    }

    public void setDescripcionProd(String descripcionProd) {
        this.descripcionProd = descripcionProd;
    }

    public Set<Imagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(Set<Imagen> imagenes) {
        this.imagenes = imagenes;
    }
}

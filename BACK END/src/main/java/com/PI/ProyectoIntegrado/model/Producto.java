package com.PI.ProyectoIntegrado.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.Set;


@Entity
@Table(name="Productos")
public class Producto {

    @Id
    @GeneratedValue
    private Integer idProducto;
    private String nombreProd;
    private String descripcionProd;
    private Float precioProd;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    @OneToMany(mappedBy = "producto")
    @JsonIgnore
    private Set<Reserva> reservas;







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
}

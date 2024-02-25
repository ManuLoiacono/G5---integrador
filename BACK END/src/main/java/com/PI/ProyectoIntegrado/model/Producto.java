package com.PI.ProyectoIntegrado.model;

import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name="Productos")
public class Producto {

    @NotNull
    @Id
    @SequenceGenerator(name = "product_sequence", sequenceName = "product_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_sequence")
    private Integer idProducto;
    @NotNull
    @Column
    private String nombreProd;
    @NotNull
    @Column
    private Float precioProd;
    @NotNull
    @OneToMany(mappedBy = "idProducto")
    private Set<Imagen> imagenes = new HashSet<>();
    @OneToMany(mappedBy = "producto_id")
    private Set<Reserva> reservas;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria_id;

    public Producto() {
    }

    public Producto(Integer idProducto, String nombreProd, Float precioProd, Set<Imagen> imagenes, Categoria categoria_id, Set<Reserva> reservas) {
        this.idProducto = idProducto;
        this.nombreProd = nombreProd;
        this.precioProd = precioProd;
        this.imagenes = imagenes;
        this.categoria_id = categoria_id;
        this.reservas = reservas;
    }

    public Producto(String nombreProd, Float precioProd, Set<Imagen> imagenes, Categoria categoria_id, Set<Reserva> reservas) {
        this.nombreProd = nombreProd;
        this.precioProd = precioProd;
        this.imagenes = imagenes;
        this.categoria_id = categoria_id;
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
        return categoria_id;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria_id = categoria_id;
    }

    public Set<Reserva> getReservas() {
        return reservas;
    }

    public void setReservas(Set<Reserva> reservas) {
        this.reservas = reservas;
    }

    public Set<Imagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(Set<Imagen> imagenes) {
        this.imagenes = imagenes;
    }
}

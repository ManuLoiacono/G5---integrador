package com.PI.ProyectoIntegrado.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="Reservas")
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer idReserva;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "producto_id")
    private Producto producto;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @Column
    private Date FechaInicio;

    @Column
    private Date FechaFin;
    private Float PrecioTotal;






    public Reserva() {
    }

    public Reserva(Integer idReserva, Producto producto, Usuario usuario, Date fechaInicio, Date fechaFin, Float precioTotal) {
        this.idReserva = idReserva;
        this.producto = producto;
        this.usuario = usuario;
        FechaInicio = fechaInicio;
        FechaFin = fechaFin;
        PrecioTotal = precioTotal;
    }

    public Integer getIdReserva() {
        return idReserva;
    }

    public void setIdReserva(Integer idReserva) {
        this.idReserva = idReserva;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Date getFechaInicio() {
        return FechaInicio;
    }

    public void setFechaInicio(Date fechaInicio) {
        FechaInicio = fechaInicio;
    }

    public Date getFechaFin() {
        return FechaFin;
    }

    public void setFechaFin(Date fechaFin) {
        FechaFin = fechaFin;
    }

    public Float getPrecioTotal() {
        return PrecioTotal;
    }

    public void setPrecioTotal(Float precioTotal) {
        PrecioTotal = precioTotal;
    }
}

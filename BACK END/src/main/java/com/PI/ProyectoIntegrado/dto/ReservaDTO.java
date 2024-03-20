package com.PI.ProyectoIntegrado.dto;

import com.PI.ProyectoIntegrado.model.Producto;
import com.PI.ProyectoIntegrado.model.Usuario;

import java.util.Date;

public class ReservaDTO {

    private Integer idReserva;
    private Producto producto;
    private Usuario usuario;
    private Date FechaInicio;
    private Date FechaFin;
    private Float PrecioTotal;

    public ReservaDTO() {
    }

    public ReservaDTO(Producto producto, Usuario usuario, Date fechaInicio, Date fechaFin, Float precioTotal) {
        this.producto = producto;
        this.usuario = usuario;
        FechaInicio = fechaInicio;
        FechaFin = fechaFin;
        PrecioTotal = precioTotal;
    }

    public ReservaDTO(Integer idReserva, Producto producto, Usuario usuario, Date fechaInicio, Date fechaFin, Float precioTotal) {
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

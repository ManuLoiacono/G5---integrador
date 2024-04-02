package com.PI.ProyectoIntegrado.dto;

import com.PI.ProyectoIntegrado.model.Producto;
import com.PI.ProyectoIntegrado.model.Usuario;

import java.util.Date;

public class ReservaDTO {

    private Integer idReserva;
    private Producto producto;
    private Usuario usuario;
    private Date fechaInicio;
    private Date fechaFin;
    private Float precioTotal;

    public ReservaDTO() {
    }

    public ReservaDTO(Producto producto, Usuario usuario, Date fechaInicio, Date fechaFin, Float precioTotal) {
        this.producto = producto;
        this.usuario = usuario;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.precioTotal = precioTotal;
    }

    public ReservaDTO(Integer idReserva, Producto producto, Usuario usuario, Date fechaInicio, Date fechaFin, Float precioTotal) {
        this.idReserva = idReserva;
        this.producto = producto;
        this.usuario = usuario;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.precioTotal = precioTotal;
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
        return fechaInicio;
    }

    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public Date getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(Date fechaFin) {
        this.fechaFin = fechaFin;
    }

    public Float getPrecioTotal() {
        return precioTotal;
    }

    public void setPrecioTotal(Float precioTotal) {
        this.precioTotal = precioTotal;
    }
}

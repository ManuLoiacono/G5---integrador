package com.PI.ProyectoIntegrado.dto;

import com.PI.ProyectoIntegrado.model.Producto;
import com.PI.ProyectoIntegrado.model.Usuario;
import java.util.Date;

public class ReservaDTO {

    private Integer producto;
    private Integer usuario;
    private Date FechaInicio;
    private Date FechaFin;
    private Float PrecioTotal;

    public ReservaDTO() {
    }

    public ReservaDTO(Integer producto, Integer usuario, Date fechaInicio, Date fechaFin, Float precioTotal) {
        this.producto = producto;
        this.usuario = usuario;
        FechaInicio = fechaInicio;
        FechaFin = fechaFin;
        PrecioTotal = precioTotal;
    }

    public Integer getProducto() {
        return producto;
    }

    public void setProducto(Integer producto) {
        this.producto = producto;
    }

    public Integer getUsuario() {
        return usuario;
    }

    public void setUsuario(Integer usuario) {
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

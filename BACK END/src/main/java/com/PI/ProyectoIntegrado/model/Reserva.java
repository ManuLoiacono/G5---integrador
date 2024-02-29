package com.PI.ProyectoIntegrado.model;

import com.PI.ProyectoIntegrado.model.usuario.Usuario;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.Date;

@Entity
@Table(name="Reservas")
public class Reserva {

    @NotNull
    @Id
    @SequenceGenerator(name = "booking_sequence", sequenceName = "booking_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "booking_sequence")
    private Integer idReserva;

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JsonIgnore
    @JoinColumn(name = "idProducto", referencedColumnName = "idProducto")
    private Producto producto;

    @NotNull
    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @NotNull
    @Column
    private Date FechaInicio;

    @NotNull
    @Column
    private Date FechaFin;

    @NotNull
    @Column
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

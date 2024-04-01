package com.PI.ProyectoIntegrado.dto;

import com.PI.ProyectoIntegrado.model.Categoria;
import com.PI.ProyectoIntegrado.model.Imagen;

import java.util.HashSet;
import java.util.Set;

public class ProductoDTO {

    private Integer idProducto;
    private String nombreProd;
    private String descripcionProd;
    private Float precioProd;
    private Categoria categoria;
    private Set<Imagen> imagenes = new HashSet<>();


    public ProductoDTO() {
    }

    public ProductoDTO(String nombreProd, String descripcionProd, Float precioProd, Categoria categoria, Set<Imagen> imagenes) {
        this.nombreProd = nombreProd;
        this.descripcionProd = descripcionProd;
        this.precioProd = precioProd;
        this.categoria = categoria;
        this.imagenes = imagenes;
    }

    public ProductoDTO(Integer idProducto, String nombreProd, String descripcionProd, Float precioProd, Categoria categoria, Set<Imagen> imagenes) {
        this.idProducto = idProducto;
        this.nombreProd = nombreProd;
        this.descripcionProd = descripcionProd;
        this.precioProd = precioProd;
        this.categoria = categoria;
        this.imagenes = imagenes;
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

    public String getDescripcionProd() {
        return descripcionProd;
    }

    public void setDescripcionProd(String descripcionProd) {
        this.descripcionProd = descripcionProd;
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

    public Set<Imagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(Set<Imagen> imagenes) {
        this.imagenes = imagenes;
    }
}

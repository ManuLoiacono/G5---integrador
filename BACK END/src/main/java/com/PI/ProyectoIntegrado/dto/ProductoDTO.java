package com.PI.ProyectoIntegrado.dto;

import com.PI.ProyectoIntegrado.model.Categoria;

public class ProductoDTO {

    private Integer idProducto;
    private String nombreProd;
    private String descripcionProd;
    private Float precioProd;
    private Categoria categoria;

    public ProductoDTO() {
    }

    public ProductoDTO(Integer idProducto, String nombreProd, String descripcionProd, Float precioProd, Categoria categoria) {
        this.idProducto = idProducto;
        this.nombreProd = nombreProd;
        this.descripcionProd = descripcionProd;
        this.precioProd = precioProd;
        this.categoria = categoria;
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

    public String getDescripcionProd() {
        return descripcionProd;
    }

    public void setDescripcionProd(String descripcionProd) {
        this.descripcionProd = descripcionProd;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}

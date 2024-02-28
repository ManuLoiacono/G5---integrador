package com.PI.ProyectoIntegrado.dto;

import com.PI.ProyectoIntegrado.model.Categoria;

public class ProductoDTO {

    private Integer idProducto;
    private String nombreProd;
    private String descripcionProd;
    private Float precioProd;
    private CategoriaDTO categoria;

    public ProductoDTO() {
    }

    public ProductoDTO(String nombreProd, String descripcionProd, Float precioProd, CategoriaDTO categoria) {
        this.nombreProd = nombreProd;
        this.descripcionProd = descripcionProd;
        this.precioProd = precioProd;
        this.categoria = categoria;
    }

    public ProductoDTO(Integer idProducto, String nombreProd, String descripcionProd, Float precioProd, CategoriaDTO categoria) {
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

    public CategoriaDTO getCategoria() {
        return categoria;
    }

    public void setCategoria(CategoriaDTO categoria) {
        this.categoria = categoria;
    }
}

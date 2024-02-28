package com.PI.ProyectoIntegrado.dto;

import com.PI.ProyectoIntegrado.model.Categoria;

public class ProductoDTO {

    private String nombreProd;
    private String descripcionProd;
    private Float precioProd;
    private Integer id_categoria;

    public ProductoDTO() {
    }

    public ProductoDTO(String nombreProd, String descripcionProd, Float precioProd, Integer id_categoria) {
        this.nombreProd = nombreProd;
        this.descripcionProd = descripcionProd;
        this.precioProd = precioProd;
        this.id_categoria = id_categoria;
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

    public Integer getId_categoria() {
        return id_categoria;
    }

    public void setId_categoria(Integer id_categoria) {
        this.id_categoria = id_categoria;
    }
}

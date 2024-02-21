package com.PI.ProyectoIntegrado.dto;

public class ProductoDTO {

    private Integer idProducto;
    private String nombreProd;
    private Float precioProd;

    public ProductoDTO() {
    }

    public ProductoDTO(Integer idProducto, String nombreProd, Float precioProd) {
        this.idProducto = idProducto;
        this.nombreProd = nombreProd;
        this.precioProd = precioProd;
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
}

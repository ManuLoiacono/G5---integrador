package com.PI.ProyectoIntegrado.dto;

import com.PI.ProyectoIntegrado.model.Producto;

public class ImagenDTO {

    private String titulo;
    private String urlimg;
    private Integer idProducto;

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getUrlimg() {
        return urlimg;
    }

    public void setUrlimg(String urlimg) {
        this.urlimg = urlimg;
    }

    public Integer getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(Integer idProducto) {
        this.idProducto = idProducto;
    }
}

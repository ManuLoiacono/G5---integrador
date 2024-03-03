package com.PI.ProyectoIntegrado.dto;

public class CategoriaDTO {

    private String nombreCategoria;
    private String urlimg;

    public CategoriaDTO() {
    }


    public String getNombreCategoria() {
        return nombreCategoria;
    }

    public void setNombreCategoria(String nombreCategoria) {
        this.nombreCategoria = nombreCategoria;
    }

    public String getUrlimg() {
        return urlimg;
    }

    public void setUrlimg(String urlimg) {
        this.urlimg = urlimg;
    }
}

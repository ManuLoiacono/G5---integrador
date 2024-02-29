package com.PI.ProyectoIntegrado.dto;

public class CategoriaDTO {

    private Integer idCategoria;
    private String nombreCategoria;
    private String urlimg;

    public CategoriaDTO() {
    }

    public CategoriaDTO(String nombreCategoria, String urlimg) {
        this.nombreCategoria = nombreCategoria;
        this.urlimg = urlimg;
    }

    public CategoriaDTO(Integer idCategoria, String nombreCategoria, String urlimg) {
        this.idCategoria = idCategoria;
        this.nombreCategoria = nombreCategoria;
        this.urlimg = urlimg;
    }

    public Integer getIdCategoria() {
        return idCategoria;
    }

    public void setIdCategoria(Integer idCategoria) {
        this.idCategoria = idCategoria;
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

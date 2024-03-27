package com.PI.ProyectoIntegrado.dto;

public class CategoriaDTO {

    private Integer idCategoria;
    private String nombreCategoria;

    public CategoriaDTO() {
    }

    public CategoriaDTO(String nombreCategoria) {
        this.nombreCategoria = nombreCategoria;
    }

    public CategoriaDTO(Integer idCategoria, String nombreCategoria) {
        this.idCategoria = idCategoria;
        this.nombreCategoria = nombreCategoria;
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

}

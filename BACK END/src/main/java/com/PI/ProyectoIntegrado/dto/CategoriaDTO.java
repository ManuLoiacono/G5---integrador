package com.PI.ProyectoIntegrado.dto;

import com.PI.ProyectoIntegrado.model.Caracteristica;
import com.PI.ProyectoIntegrado.model.ImagenCategoria;

import java.util.HashSet;
import java.util.Set;

public class CategoriaDTO {

    private Integer idCategoria;
    private String nombreCategoria;
    private String descripcionCategoria;
    private Set<ImagenCategoria> imagenCategoria = new HashSet<>();

    public CategoriaDTO() {
    }

    public CategoriaDTO(String nombreCategoria, String descripcionCategoria, Set<ImagenCategoria> imagenCategoria) {
        this.nombreCategoria = nombreCategoria;
        this.descripcionCategoria = descripcionCategoria;
        this.imagenCategoria = imagenCategoria;
    }

    public CategoriaDTO(Integer idCategoria, String nombreCategoria, String descripcionCategoria, Set<ImagenCategoria> imagenCategoria) {
        this.idCategoria = idCategoria;
        this.nombreCategoria = nombreCategoria;
        this.descripcionCategoria = descripcionCategoria;
        this.imagenCategoria = imagenCategoria;
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

    public String getDescripcionCategoria() {
        return descripcionCategoria;
    }

    public void setDescripcionCategoria(String descripcionCategoria) {
        this.descripcionCategoria = descripcionCategoria;
    }

    public Set<ImagenCategoria> getImagenCategoria() {
        return imagenCategoria;
    }

    public void setImagenCategoria(Set<ImagenCategoria> imagenCategoria) {
        this.imagenCategoria = imagenCategoria;
    }

}

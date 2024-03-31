package com.PI.ProyectoIntegrado.dto;

import com.PI.ProyectoIntegrado.model.Caracteristica;
import com.PI.ProyectoIntegrado.model.ImagenCategoria;

import java.util.HashSet;
import java.util.Set;

public class CategoriaDTO {

    private Integer idCategoria;

    private String nombreCategoria;
    private String descripcionCaracteristica;
    private Set<ImagenCategoria> imagenCategoria = new HashSet<>();

    private Set<Caracteristica> caracteristicas;

    public CategoriaDTO() {
    }

    public CategoriaDTO(String nombreCategoria, String descripcionCaracteristica, Set<ImagenCategoria> imagenCategoria, Set<Caracteristica> caracteristicas) {
        this.nombreCategoria = nombreCategoria;
        this.descripcionCaracteristica = descripcionCaracteristica;
        this.imagenCategoria = imagenCategoria;
        this.caracteristicas = caracteristicas;
    }

    public CategoriaDTO(Integer idCategoria, String nombreCategoria, String descripcionCaracteristica, Set<ImagenCategoria> imagenCategoria, Set<Caracteristica> caracteristicas) {
        this.idCategoria = idCategoria;
        this.nombreCategoria = nombreCategoria;
        this.descripcionCaracteristica = descripcionCaracteristica;
        this.imagenCategoria = imagenCategoria;
        this.caracteristicas = caracteristicas;
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

    public Set<ImagenCategoria> getImagenCategoria() {
        return imagenCategoria;
    }

    public String getDescripcionCaracteristica() {
        return descripcionCaracteristica;
    }

    public void setDescripcionCaracteristica(String descripcionCaracteristica) {
        this.descripcionCaracteristica = descripcionCaracteristica;
    }

    public void setImagenCategoria(Set<ImagenCategoria> imagenCategoria) {
        this.imagenCategoria = imagenCategoria;
    }

    public Set<Caracteristica> getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(Set<Caracteristica> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }
}

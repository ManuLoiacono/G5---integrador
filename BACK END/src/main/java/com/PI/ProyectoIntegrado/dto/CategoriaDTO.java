package com.PI.ProyectoIntegrado.dto;

import com.PI.ProyectoIntegrado.model.Caracteristica;
import com.PI.ProyectoIntegrado.model.ImagenCategoria;

import java.util.Set;

public class CategoriaDTO {

    private Integer idCategoria;

    private String nombreCategoria;

    private ImagenCategoria imagenCategoria;

    private Set<Caracteristica> caracteristicas;

    public CategoriaDTO() {
    }

    public CategoriaDTO(String nombreCategoria, ImagenCategoria imagenCategoria, Set<Caracteristica> caracteristicas) {
        this.nombreCategoria = nombreCategoria;
        this.imagenCategoria = imagenCategoria;
        this.caracteristicas = caracteristicas;
    }

    public CategoriaDTO(Integer idCategoria, String nombreCategoria, ImagenCategoria imagenCategoria, Set<Caracteristica> caracteristicas) {
        this.idCategoria = idCategoria;
        this.nombreCategoria = nombreCategoria;
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

    public ImagenCategoria getImagenCategoria() {
        return imagenCategoria;
    }

    public void setImagenCategoria(ImagenCategoria imagenCategoria) {
        this.imagenCategoria = imagenCategoria;
    }

    public Set<Caracteristica> getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(Set<Caracteristica> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }
}

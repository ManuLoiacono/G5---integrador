package com.PI.ProyectoIntegrado.dto;

import com.PI.ProyectoIntegrado.model.Producto;

public class ImagenDTO {

    private Integer idImagen;
    private String titulo;
    private String urlimg;
    private Integer idProducto;

    public ImagenDTO() {
    }

    public ImagenDTO(String titulo, String urlimg, Integer idProducto) {
        this.titulo = titulo;
        this.urlimg = urlimg;
        this.idProducto = idProducto;
    }

    public ImagenDTO(Integer idImagen, String titulo, String urlimg, Integer idProducto) {
        this.idImagen = idImagen;
        this.titulo = titulo;
        this.urlimg = urlimg;
        this.idProducto = idProducto;
    }

    public Integer getIdImagen() {
        return idImagen;
    }

    public void setIdImagen(Integer idImagen) {
        this.idImagen = idImagen;
    }

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

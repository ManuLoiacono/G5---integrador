package com.PI.ProyectoIntegrado.dto;

import com.PI.ProyectoIntegrado.model.Producto;

public class ImagenDTO {

    private Integer idImagen;
    //private String titulo;
    private String urlimg;
    private Integer idProducto;

    public ImagenDTO() {
    }

    public ImagenDTO(String urlimg, Integer idProducto){
        this.urlimg = urlimg;
        this.idProducto = idProducto;
    }

    public ImagenDTO(Integer idImagen, String urlimg, Integer idProducto) {
        this.idImagen = idImagen;
        this.urlimg = urlimg;
        this.idProducto = idProducto;
    }

    public Integer getIdImagen() {
        return idImagen;
    }

    public void setIdImagen(Integer idImagen) {
        this.idImagen = idImagen;
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

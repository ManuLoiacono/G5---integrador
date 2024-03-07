package com.PI.ProyectoIntegrado.dto;

import com.PI.ProyectoIntegrado.model.Producto;

import java.util.List;

public class ImagenDTO {

    private Integer idImagen;
    private String titulo;

    private String urlimg;

    private List<String> imgPath;
    private ProductoDTO productoDTO;

    public ImagenDTO() {
    }

    public ImagenDTO(String titulo, String urlimg, List<String> imgPath, ProductoDTO producto) {
        this.titulo = titulo;
        this.urlimg = urlimg;
        this.imgPath = imgPath;
        this.productoDTO = producto;
    }

    public ImagenDTO(Integer idImagen, String titulo, String urlimg, List<String> imgPath, ProductoDTO producto) {
        this.idImagen = idImagen;
        this.titulo = titulo;
        this.urlimg = urlimg;
        this.imgPath = imgPath;
        this.productoDTO = producto;
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

    public List<String> getImgPath() {
        return imgPath;
    }

    public void setImgPath(List<String> imgPath) {
        this.imgPath = imgPath;
    }

    public ProductoDTO getProductoDTO() {
        return productoDTO;
    }

    public void setProductoDTO(ProductoDTO productoDTO) {
        this.productoDTO = productoDTO;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
}

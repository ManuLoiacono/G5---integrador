package com.PI.ProyectoIntegrado.model;


import com.PI.ProyectoIntegrado.dto.ProductoDTO;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

@Entity
@Table(name = "imagenes")
public class Imagen {

    @NotNull
    @Id
    @SequenceGenerator(name = "image_sequence", sequenceName = "image_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "image_sequence")
    private Integer idImagen;
    @NotNull
    @Column
    private String titulo;
    @NotNull
    @Column
    private String urlimg;

    private List<String> imgPath;
    @NotNull
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "idProducto", referencedColumnName = "idProducto")
    @JsonProperty("producto")
    private Producto producto;


    public Imagen() {
    }

    public Imagen(Integer idImagen, String titulo, String urlimg, List<String> imgPath, Producto producto) {
        this.idImagen = idImagen;
        this.titulo = titulo;
        this.urlimg = urlimg;
        this.imgPath = imgPath;
        this.producto = producto;
    }

    public Imagen(String titulo, String urlimg, List<String> imgPath, Producto producto) {
        this.titulo = titulo;
        this.urlimg = urlimg;
        this.imgPath = imgPath;
        this.producto = producto;
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

    public List<String> getImgPath() {
        return imgPath;
    }

    public void setImgPath(List<String> imgPath) {
        this.imgPath = imgPath;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }
}
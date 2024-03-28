package com.PI.ProyectoIntegrado.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.List;


@Entity
@Table(name = "imagenesCategoria")
public class ImagenCategoria {

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
    @OneToOne
    @JsonBackReference
    @JoinColumn(name = "idCategoria", referencedColumnName = "idCategoria")
    @JsonProperty("categoria")
    private Categoria categoria;

    public ImagenCategoria() {
    }

    public ImagenCategoria(String titulo, String urlimg, List<String> imgPath, Categoria categoria) {
        this.titulo = titulo;
        this.urlimg = urlimg;
        this.imgPath = imgPath;
        this.categoria = categoria;
    }

    public ImagenCategoria(Integer idImagen, String titulo, String urlimg, List<String> imgPath, Categoria categoria) {
        this.idImagen = idImagen;
        this.titulo = titulo;
        this.urlimg = urlimg;
        this.imgPath = imgPath;
        this.categoria = categoria;
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

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}

package com.PI.ProyectoIntegrado.model;
import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "imagenes")
public class Imagen {

    @NotNull
    @Id
    @SequenceGenerator(name = "image_sequence", sequenceName = "image_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "image_sequence")
    private Integer id;
    @NotNull
    @Column
    private String titulo;
    @NotNull
    @Column
    private String urlimg;
    @NotNull
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "idProducto", referencedColumnName = "idProducto")
    private Producto idProducto;


    public Imagen() {
    }

    public Imagen(Integer id, String titulo, String urlimg, Producto idProducto) {
        this.id = id;
        this.titulo = titulo;
        this.urlimg = urlimg;
        this.idProducto = idProducto;
    }

    public Imagen(String titulo, String urlimg, Producto idProducto) {
        this.titulo = titulo;
        this.urlimg = urlimg;
        this.idProducto = idProducto;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public Producto getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(Producto idProducto) {
        this.idProducto = idProducto;
    }
}

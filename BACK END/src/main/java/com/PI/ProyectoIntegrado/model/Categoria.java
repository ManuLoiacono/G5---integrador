package com.PI.ProyectoIntegrado.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="Categorias")
public class Categoria {


    @Id
    @SequenceGenerator(name = "category_sequence", sequenceName = "category_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "category_sequence")
    private Integer idCategoria;

    @Column
    private String nombreCategoria;


    @Column
    private String urlimg;

    @JsonIgnore
    @OneToMany(mappedBy = "categoria")
    private Set<Producto> productos;






    public Categoria() {
    }

    public Categoria(Integer idCategoria, String nombreCategoria, String urlimg, Set<Producto> productos) {
        this.idCategoria = idCategoria;
        this.nombreCategoria = nombreCategoria;
        this.urlimg = urlimg;
        this.productos = productos;
    }

    public Categoria(String nombreCategoria, String urlimg, Set<Producto> productos) {
        this.nombreCategoria = nombreCategoria;
        this.urlimg = urlimg;
        this.productos = productos;
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

    public String getUrlimg() {
        return urlimg;
    }

    public void setUrlimg(String urlimg) {
        this.urlimg = urlimg;
    }

    public Set<Producto> getProductos() {
        return productos;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }

}

package com.PI.ProyectoIntegrado.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

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

    @OneToOne
    @JsonManagedReference
    private ImagenCategoria imagenCategoria;

    @JsonIgnore
    @OneToMany(mappedBy = "categoria")
    private Set<Producto> productos;

    @JsonIgnore
    @OneToMany(mappedBy = "categoria")
    private Set<Caracteristica> caracteristicas;



    public Categoria() {
    }

    public Categoria(String nombreCategoria, ImagenCategoria imagenCategoria, Set<Producto> productos, Set<Caracteristica> caracteristicas) {
        this.nombreCategoria = nombreCategoria;
        this.imagenCategoria = imagenCategoria;
        this.productos = productos;
        this.caracteristicas = caracteristicas;
    }

    public Categoria(Integer idCategoria, String nombreCategoria, ImagenCategoria imagenCategoria, Set<Producto> productos, Set<Caracteristica> caracteristicas) {
        this.idCategoria = idCategoria;
        this.nombreCategoria = nombreCategoria;
        this.imagenCategoria = imagenCategoria;
        this.productos = productos;
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

    public Set<Producto> getProductos() {
        return productos;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }

    public Set<Caracteristica> getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(Set<Caracteristica> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }
}

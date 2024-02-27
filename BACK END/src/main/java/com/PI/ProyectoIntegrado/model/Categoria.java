package com.PI.ProyectoIntegrado.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name="Categorias")
public class Categoria {

    @Id
    @GeneratedValue
    private Integer idCategoria;
    private String nombreCategoria;

    @OneToMany(mappedBy = "categoria")
    @JsonIgnore
    private Set<Producto> productos;






    public Categoria() {
    }

    public Categoria(Integer idCategoria, String nombreCategoria) {
        this.idCategoria = idCategoria;
        this.nombreCategoria = nombreCategoria;
    }

    public Categoria(Integer idCategoria, String nombreCategoria, Set<Producto> productos) {
        this.idCategoria = idCategoria;
        nombreCategoria = nombreCategoria;
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

    public Set<Producto> getProductos() {
        return productos;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }
}

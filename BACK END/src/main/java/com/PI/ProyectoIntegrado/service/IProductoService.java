package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.dto.ProductoDTO;
import com.PI.ProyectoIntegrado.model.Producto;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface IProductoService {

    Producto agregarProducto(ProductoDTO productoDTO);
    void eliminarProducto(Integer idProducto);
    Optional<Producto> listarUnProducto(Integer idProducto);

    List<Producto> listarProductos();

}

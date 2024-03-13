package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.dto.ProductoDTO;
import com.PI.ProyectoIntegrado.model.Producto;

import java.util.Set;

public interface IProductoService {

    Producto agregarProducto(ProductoDTO productoDTO);
    void eliminarProducto(Integer idProducto);
    Producto listarUnProducto(Integer idProducto);

    Set<ProductoDTO> listarProductos();

}

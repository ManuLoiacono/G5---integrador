package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.repository.IProductoRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.PI.ProyectoIntegrado.dto.ProductoDTO;
import com.PI.ProyectoIntegrado.model.Producto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ProductoService implements IProductoService{

    @Autowired
    private IProductoRepository productoRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void agregarProducto(ProductoDTO productoDTO) {

        Producto producto = mapper.convertValue(productoDTO, Producto.class);
        productoRepository.save(producto);

    }

    @Override
    public void eliminarProducto(Integer idProducto) {

        productoRepository.deleteById(idProducto);

    }

    @Override
    public ProductoDTO listarUnProducto(Integer idProducto) {

        Optional<Producto> producto = productoRepository.findById(idProducto);
        ProductoDTO productoDTO = null;
        if(producto.isPresent()){
            productoDTO = mapper.convertValue(producto, ProductoDTO.class);
        }
        return productoDTO;

    }

    @Override
    public Set<ProductoDTO> listarProductos() {

        List<Producto> productos = productoRepository.findAll();
        Set<ProductoDTO> productosDTO = new HashSet<>();
        for(Producto producto: productos){
            productosDTO.add(mapper.convertValue(producto, ProductoDTO.class));
        }

        return productosDTO;

    }
}

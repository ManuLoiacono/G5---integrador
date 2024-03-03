package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.model.Categoria;
import com.PI.ProyectoIntegrado.model.Imagen;
import com.PI.ProyectoIntegrado.model.Reserva;
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
    IProductoRepository productoRepository;

    @Autowired
    ICategoriaService categoriaService;

    @Autowired
    ObjectMapper mapper;


    @Override
    public Producto agregarProducto(ProductoDTO productoDTO) {

            Set<Imagen> imagen = new HashSet<Imagen>();
            Set<Reserva> reserva = new HashSet<Reserva>();
            Producto producto = new Producto(productoDTO.getNombreProd(), productoDTO.getPrecioProd(), imagen, mapper.convertValue(categoriaService.listarUnaCategoria(productoDTO.getId_categoria()), Categoria.class), reserva);
            return productoRepository.save(producto);

    }

    @Override
    public void eliminarProducto(Integer idProducto) {

        productoRepository.deleteById(idProducto);

    }

    @Override
    public Optional<Producto> listarUnProducto(Integer idProducto) {

        Optional<Producto> buscarProducto = productoRepository.findById(idProducto);

        if(buscarProducto.isPresent()){
            return productoRepository.findById(idProducto);
        }
        return null;

    }

    @Override
    public List<Producto> listarProductos() {

        List<Producto> productos = productoRepository.findAll();
            return productoRepository.findAll();

    }
}

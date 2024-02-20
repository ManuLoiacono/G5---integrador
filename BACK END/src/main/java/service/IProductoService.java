package service;

import dto.ProductoDTO;

import java.util.Set;

public interface IProductoService {

    void agregarProducto(ProductoDTO productoDTO);
    void eliminarProducto(Integer idProducto);
    ProductoDTO listarUnProducto(Integer idProducto);

    Set<ProductoDTO> listarProductos();

}

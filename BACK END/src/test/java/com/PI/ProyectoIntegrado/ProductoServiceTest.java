package com.PI.ProyectoIntegrado;

import com.PI.ProyectoIntegrado.dto.ProductoDTO;
import com.PI.ProyectoIntegrado.service.IProductoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class ProductoServiceTest {

	@Autowired(required = false)
	private IProductoService productoService;

	@Test
	void testAgregarProducto() {

		ProductoDTO productoDTO = new ProductoDTO();
		productoDTO.setNombreProd("carpa");
		productoDTO.setPrecioProd(Float.valueOf("199.99"));

		productoService.agregarProducto(productoDTO);

		ProductoDTO productoCarpa = productoService.listarUnProducto(1);
		//Set<ProductoDTO> productoCarpa = productoService.listarProductos();

		assertTrue(productoCarpa != null);

	}

}

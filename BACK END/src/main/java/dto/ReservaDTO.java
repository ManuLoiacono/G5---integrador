package dto;

import model.Producto;
import model.Usuario;
import org.springframework.data.relational.core.sql.In;

public class ReservaDTO {

    private Integer idReserva;
    private Producto producto;
    private Usuario usuario;

    public ReservaDTO(Integer idReserva, Producto producto, Usuario usuario) {
        this.idReserva = idReserva;
        this.producto = producto;
        this.usuario = usuario;
    }

    public Integer getIdReserva() {
        return idReserva;
    }

    public void setIdReserva(Integer idReserva) {
        this.idReserva = idReserva;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}

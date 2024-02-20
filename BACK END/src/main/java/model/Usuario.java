package model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.Set;


@Entity
@Table(name="Usuarios")
public class Usuario {

    @Id
    @GeneratedValue
    private Integer idUsuario;
    private String nombreUsuario;
    private String apellidoUsuario;
    private Long numTelefono;
    private String email;

    @OneToMany(mappedBy = "usuario")
    @JsonIgnore
    private Set<Reserva> reservas;








    public Usuario() {
    }

    public Usuario(Integer idUsuario, String nombreUsuario, String apellidoUsuario, Long numTelefono, String email, Set<Reserva> reservas) {
        this.idUsuario = idUsuario;
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.numTelefono = numTelefono;
        this.email = email;
        this.reservas = reservas;
    }

    public Integer getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Integer idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getApellidoUsuario() {
        return apellidoUsuario;
    }

    public void setApellidoUsuario(String apellidoUsuario) {
        this.apellidoUsuario = apellidoUsuario;
    }

    public Long getNumTelefono() {
        return numTelefono;
    }

    public void setNumTelefono(Long numTelefono) {
        this.numTelefono = numTelefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<Reserva> getReservas() {
        return reservas;
    }

    public void setReservas(Set<Reserva> reservas) {
        this.reservas = reservas;
    }
}
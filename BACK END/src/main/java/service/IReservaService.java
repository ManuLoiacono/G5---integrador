package service;

import dto.ReservaDTO;

import java.util.Set;

public interface IReservaService {

    void agregarReserva(ReservaDTO reservaDTO);
    void eliminarReserva(Integer idReserva);
    ReservaDTO listarUnaReserva(Integer idReserva);

    Set<ReservaDTO> listarReservas();



}

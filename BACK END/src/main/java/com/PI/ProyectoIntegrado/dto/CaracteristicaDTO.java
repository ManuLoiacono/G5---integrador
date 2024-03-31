package com.PI.ProyectoIntegrado.dto;

public class CaracteristicaDTO {

    private Integer idCaracteristica;
    private String descripCaracteristica;

    public CaracteristicaDTO() {
    }

    public CaracteristicaDTO(String descripCaracteristica) {
        this.descripCaracteristica = descripCaracteristica;
    }

    public CaracteristicaDTO(Integer idCaracteristica, String descripCaracteristica) {
        this.idCaracteristica = idCaracteristica;
        this.descripCaracteristica = descripCaracteristica;
    }

    public Integer getIdCaracteristica() {
        return idCaracteristica;
    }

    public void setIdCaracteristica(Integer idCaracteristica) {
        this.idCaracteristica = idCaracteristica;
    }

    public String getDescripCaracteristica() {
        return descripCaracteristica;
    }

    public void setDescripCaracteristica(String descripCaracteristica) {
        this.descripCaracteristica = descripCaracteristica;
    }
}

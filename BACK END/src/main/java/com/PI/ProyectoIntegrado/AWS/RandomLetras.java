package com.PI.ProyectoIntegrado.AWS;

import java.security.SecureRandom;

public class RandomLetras {

    private static final String LETRAS_PERMITIDAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    private static final SecureRandom random = new SecureRandom();

    public static String randomString(int longitud) {
        StringBuilder sb = new StringBuilder(longitud);
        for (int i = 0; i < longitud; i++) {
            int indice = random.nextInt(LETRAS_PERMITIDAS.length());
            sb.append(LETRAS_PERMITIDAS.charAt(indice));
        }
        return sb.toString();
    }
}

package com.PI.ProyectoIntegrado;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
public class ProyectoIntegradoApplication {

	public static void main(String[] args) {

		SpringApplication.run(ProyectoIntegradoApplication.class, args);
	}

}

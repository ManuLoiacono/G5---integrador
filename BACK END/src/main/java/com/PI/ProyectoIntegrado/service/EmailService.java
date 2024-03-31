package com.PI.ProyectoIntegrado.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.stereotype.Service;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;


@Service
public class EmailService {

   /* @Autowired
    private JavaMailSender emailSender;

    public EmailService(JavaMailSender emailSender) {
        this.emailSender = emailSender;
    }

    public void sendSimpleMessage(String to, String subject, String text) {
            try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(to);
            message.setSubject(subject);
            message.setText(text);
            System.out.println("Antes del envío del correo electrónico");
            emailSender.send(message);
            System.out.println("Correo electrónico enviado correctamente");
        } catch (MailException ex) {

            System.err.println("Error al enviar el correo electrónico: " + ex.getMessage());
            ex.printStackTrace();

        }
    }*/
}

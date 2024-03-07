package com.PI.ProyectoIntegrado.controller;


import com.PI.ProyectoIntegrado.service.IS3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


@RestController
@RequestMapping("/S3")
@CrossOrigin(origins = "http://localhost:3000")
public class S3Controller {

    @Autowired
    private IS3Service s3Service;


    @GetMapping("/download/{fileName}")
    public String downloadFile(@PathVariable("fileName") String fileName) throws IOException {
        return s3Service.downloadFile(fileName);
    }

    @GetMapping("/list")
    public List<String> getAllObjects() throws IOException {
        return s3Service.listFiles();
    }

    @PostMapping("/upload")
    public String uploadFile(@RequestParam("file")MultipartFile file) throws IOException {
        return s3Service.uploadFile(file);
    }

    @PutMapping("/update/{oldFileName}")
    public String updateFile(@RequestParam("file") MultipartFile file, @PathVariable("oldFileName") String oldFileName) throws IOException{
        return s3Service.updateFile(file, oldFileName);
    }


    @DeleteMapping("/delete/{fileName}")
    public String deleteFile(@PathVariable("fileName") String fileName) throws IOException {
        return s3Service.deleteFile(fileName);
    }



}

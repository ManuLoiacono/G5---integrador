package com.PI.ProyectoIntegrado.service.impl;

import com.PI.ProyectoIntegrado.service.IS3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.ResponseInputStream;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.*;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class S3ServiceImpl implements IS3Service {

    //@Value("${upload.s3.localPath}")
    //private String localPath;


    private final S3Client s3Client;

    @Autowired
    public S3ServiceImpl(S3Client s3Client){

        this.s3Client = s3Client;

    }

    @Override
    public String uploadFile(MultipartFile file)throws IOException{
        try{
            String fileName = file.getOriginalFilename();
            PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                    .bucket("imagenesterrarent")
                    .key(fileName)
                    .build();

            s3Client.putObject(putObjectRequest, RequestBody.fromBytes(file.getBytes()));


            return "Archivo subido correctamente";
        }catch (IOException e){
            throw new IOException(e.getMessage());
        }
    }

    @Override
    public String downloadFile(String fileName) throws IOException {

        String localPath = "/Users/" + System.getProperty("user.name") + "/Downloads/";

        if(!doesObjectExists(fileName)){
            return "El archivo introducido no existe";
        }

        GetObjectRequest request = GetObjectRequest.builder()
                .bucket("imagenesterrarent")
                .key(fileName)
                .build();

        ResponseInputStream<GetObjectResponse> result = s3Client.getObject(request);
        try(FileOutputStream fos = new FileOutputStream(localPath + fileName)){
            byte[] read_buf = new byte[1024];
            int read_len = 0;

            while ((read_len = result.read(read_buf)) > 0){
                fos.write(read_buf, 0, read_len);
            }

        }catch (IOException e){
            throw new IOException(e.getMessage());
        }
        return "Archivo descargado";
    }


    @Override
    public List<String> listFiles() throws IOException {
        try {
            ListObjectsRequest listObjectsRequest = ListObjectsRequest.builder()
                    .bucket("imagenesterrarent")
                    .build();

            List<S3Object> objects = s3Client.listObjects(listObjectsRequest).contents();
            List<String> fileNames = new ArrayList<>();

            for(S3Object object: objects){
                fileNames.add(object.key());
            }
            return fileNames;

        }catch (S3Exception e){
            throw new IOException(e.getMessage());
        }
    }

    @Override
    public String updateFile(MultipartFile file, String oldFileName) throws IOException{
        if(!doesObjectExists(oldFileName)){
            return "El archivo introducido no existe";
        }
        try {
            String newFileName = file.getOriginalFilename();
            deleteFile(oldFileName);

            PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                    .bucket("imagenesterrarent")
                    .key(newFileName)
                    .build();
            s3Client.putObject(putObjectRequest, RequestBody.fromBytes(file.getBytes()));
            return "Arvhico actualizado con exito en S3";
        }catch (S3Exception e){
            throw new IOException(e.getMessage());
        }
    }


    @Override
    public String deleteFile(String fileName) throws IOException {
        if(!doesObjectExists(fileName)){
            return "El Arvhico introducido no existe";
        }
        try {
            DeleteObjectRequest deleteObjectRequest = DeleteObjectRequest.builder()
                    .bucket("imagenesterrarent")
                    .key(fileName)
                    .build();

            s3Client.deleteObject(deleteObjectRequest);
            return "Archivo borrado correctamente";

        }catch (S3Exception e){
            throw new IOException(e.getMessage());
        }
    }



    private boolean doesObjectExists(String objectKey){
        try {
            HeadObjectRequest headObjectRequest = HeadObjectRequest.builder()
                    .bucket("imagenesterrarent")
                    .key(objectKey)
                    .build();
            s3Client.headObject(headObjectRequest);

        }catch (S3Exception e){
            if(e.statusCode() == 404){
                return false;
            }
        }
        return true;
    }



}

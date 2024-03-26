package com.PI.ProyectoIntegrado.service;

import com.PI.ProyectoIntegrado.AWS.RandomLetras;
import com.PI.ProyectoIntegrado.model.Categoria;
import com.PI.ProyectoIntegrado.model.ImagenCategoria;
import com.PI.ProyectoIntegrado.repository.IImagenCategoriaRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.*;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.*;

@Service
public class ImagenCategoriaService implements IImagenCategoriaService{

    private final S3Client s3Client;

    @Autowired
    public ImagenCategoriaService(S3Client s3Client){

        this.s3Client = s3Client;

    }

    @Autowired
    IImagenCategoriaRepository imagenCategoriaRepository;

    @Autowired
    CategoriaService categoriaService;

    @Autowired
    ObjectMapper mapper;

    public List<String> listaImagenes() throws IOException {
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
    public void guardarImagen(ImagenCategoria imagen) {

        Integer categoriaId = imagen.getCategoria().getIdCategoria();
        Categoria cat = categoriaService.listarUnaCategoria(categoriaId);

        List<String> base64Images = imagen.getImgPath() != null ? imagen.getImgPath() : Collections.emptyList();
        String altText = imagen.getTitulo() != null ? imagen.getTitulo() : "img";
        String path = RandomLetras.randomString(4);
        System.out.println("Path: " + path);

        for(int i = 0; i < base64Images.size(); i++){
            String base64 = base64Images.get(i);
            String keyName = path + "/" + altText + i + ".png";

            byte[] decodedBytes = Base64.getDecoder().decode(base64);

            File file = new File("imagen" + i + ".png");
            try (OutputStream outputStream = new FileOutputStream(file)){
                outputStream.write(decodedBytes);
            }catch (IOException e) {
                e.printStackTrace();
            }

            ImagenCategoria imagenNueva = new ImagenCategoria();
            imagenNueva.setTitulo(altText);
            imagenNueva.setUrlimg("https://imagenesterrarent.s3.us-east-2.amazonaws.com/" + keyName);
            imagenNueva.setCategoria(cat);
            imagenCategoriaRepository.save(imagenNueva);

            if(!doesObjectExists(imagen)){
                System.out.println("El archivo introducido no existe");
            }

            // Construye la solicitud para cargar un objeto
            PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                    .bucket("imagenesterrarent")
                    .key(keyName)
                    .build();

            // Realiza la carga del objeto
            s3Client.putObject(putObjectRequest, RequestBody.fromFile(file));

            System.out.println("Imagen cargada exitosamente a S3.");

        }


    }

    @Override
    public void deleteImagen(Integer id) throws ResourceNotFoundException {
        Optional<ImagenCategoria> searchedImage = imagenCategoriaRepository.findById(id);
        if (searchedImage.isPresent()){
            imagenCategoriaRepository.deleteById(id);
        }
        else {
            throw new ResourceNotFoundException("imagen con ID: "+ id +" no existe");
        }
    }

    private boolean doesObjectExists(ImagenCategoria objectKey){
        try {
            HeadObjectRequest headObjectRequest = HeadObjectRequest.builder()
                    .bucket("imagenesterrarent")
                    .key(objectKey.getTitulo())
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

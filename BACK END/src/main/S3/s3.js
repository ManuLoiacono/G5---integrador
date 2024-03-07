import dotenv from 'dotenv'
import aws from 'aws-sdk'
import AWS from 'aws-sdk';
import crypto from 'crypto'
import { promisify } from "util"
import { useState } from "react";
//const randomBytes = promisify(crypto.randomBytes)

//dotenv.config()

const uploadFile = async () => {

  const REGION = "us-east-2"
  const bucketName = "imagenesterrarent"

  AWS.config.update({
    accessKeyId: "",
    secretAccessKey: "",
  });

  const s3 = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });


  const params = {
    Bucket: S3_BUCKET,
    Key: file.name,
    Body: file,
  };


  var upload = s3 
        .putObject(params)
        .on("httpUploadProgress", (evt) => {
          console.log(
            "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
          );
        })
        .promise();

      await upload.then((err, data) => {
        console.log(err);
        alert("File uploaded successfully.");
      });
  };



/*export async function generateUploadURL() {
  try {
    const rawBytes = await randomBytes(16)
    const imageName = rawBytes.toString('hex')

    const params = ({
      Bucket: bucketName,
      Key: imageName,
      Expires: 60
    })
    
    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
  } catch (error) {
    console.error('Error generando URL firmada:', error)
    throw error; // Re-lanza el error para que pueda ser manejado en el código que llama a esta función
  }
}*/
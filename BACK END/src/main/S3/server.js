import express from 'express'
import { generateUploadURL } from './s3.js'

const app = express()

app.use(express.static('front'))

app.get('/s3Url', async (req, res) => {
  try {
    const url = await generateUploadURL();
    res.send({ url });
  } catch (error) {
    console.error('Error generando URL firmada:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3001, () => console.log("listening on port 3001"))
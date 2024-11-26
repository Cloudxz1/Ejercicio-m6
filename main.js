import express from 'express';
import peliculaRouter from './src/routes/pelicula.routes.js';
import { errorHandler } from './src/middleware/errorHandler.js';


const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.use('/api/v1', peliculaRouter)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log('El servidor esta arriba 🌠') 
})
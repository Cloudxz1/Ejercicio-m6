import express from 'express';


const app = express();
const PORT = 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: true}));



app.use('/api/v1', usuarioRouter)
app.use('/api/v1', peliculaRouter)


app.listen(PORT, () => {
    console.log('El servidor esta arriba 👌') 
})
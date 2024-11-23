import { Router } from "express";
import { 
    crearNuevaPelicula, 
    obtenerTodasLasPeliculas,
    obtenerPeliculaPorId,
    actualizarPelicula,
    eliminarPermanentePelicula
} from "../controllers/pelicula.controller.js";

const router = Router();

router.post('/pelicula', crearNuevaPelicula);
router.get('/pelicula', obtenerTodasLasPeliculas);
router.get('/pelicula/:id', obtenerPeliculaPorId);
router.put('/pelicula/:id', actualizarPelicula);
router.delete('/pelicula/:id', eliminarPermanentePelicula);


export default router;
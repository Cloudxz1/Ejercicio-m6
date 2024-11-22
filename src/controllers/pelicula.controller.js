import { Pelicula } from './pelicula.model.js';



export const crearNuevaPelicula = async(req, res) => {
    try {
        const data = req.body;
        const pelicula = await Pelicula.crear(data)

        res.status(201).json({
            message: 'Pelicula creada con exito',
            status: 201,
            data: pelicula

        })
    } catch (error) {
        res.status(500).json({
            message:'Error al crear la pelicula',
            status:500,
            error
        })
    }
}

export const obtenerTodasLasPeliculas = async(req, res) => {
    try {
        const data = await Pelicula.encontrarTodos();
        if(!data) throw new Error('No existe los datos')

            res.status(200).json({
                message: 'Peliculas encontradas con éxito',
                status: 200,
                data
            })
    } catch (error) {
        res.status(500).json ({
            message: 'Error al obtener las peliculas',
            status: 500,
            error
        })
    }
}

export const obtenerPeliculaPorId = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}
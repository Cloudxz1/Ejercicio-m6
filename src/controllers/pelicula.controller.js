import { Pelicula } from './model/pelicula.model.js';


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
        const { id } = req.params;
        const pelicula = await Pelicula.encontrarPorId(id);

        if(!data) throw new Error('La data se encuentra vacía');

        res.status(200).json({
            message: 'Pelicula encontrada con éxito',
            status: 200,
            data: pelicula
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener la pelicula',
            status: 500,
            error
        })
    }
}

export const actualizarPelicula = async(req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const actualizarPelicula = await Pelicula.actualizar(id, data);

        res.status(201).json ({
            message: 'Pelicula actualizada con éxito',
            status: 201,
            oldData: actualizarPelicula,
            newData: data
        })
    } catch (error) {
        res.status(500).json ({
            message: 'Error al actualizar la pelicula',
            status: 500,
            error
        })
    }
}

export const eliminarPermanentePelicula = async (req, res) => {
    try {
        const { id } = req.params;

        const peliculaBorrar = await Pelicula.eliminar(id);

        res.status(200).json({
            message: 'Pelicula eliminada',
            status: 200,
            data: peliculaBorrar
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar la pelicula',
            status: 500,
            error
        })
    }
}
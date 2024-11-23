import { v4 as uuidv4 } from 'uuid';
import { 
    createDataFile, 
    getAllData,
    getDataById,
    permaDeleteData,
    updateData
} from '../utils/fileUtils.js';

export class Pelicula {

    #id
    #nombre
    #anio
    #director
    #duracion
    #active
    
    //FALTA LAS VALIDACIONES
    constructor(nombre,anio,director,duracion){
        this.#id = uuid();
        this.#nombre = nombre;
        this.#anio = anio;
        this.#director = director;
        this.#duracion = duracion;
        this.#active = true;
    }
    
    // Getters
    get id(){ return this.#id }
    get nombre() { return this.#nombre }
    get anio() { return this.#anio }
    get director() { return this.#director }
    get duracion() { return this.#duracion }
    get active() { return this.#active }

    // Setters con el transcurso del ejercicio se modificará 
    setId(id) { this.#id = id }
    setNombre(nombre) { this.#nombre = nombre}
    setAnio(anio) { this.#anio = anio }
    setDirector(director) { this.#director = director}
    setDuracion(duracion) { this.#duracion = duracion }
    setActive() { this.#active = !this.#active }

    getAllProperties(){
        return {
            id: this.#id,
            nombre: this.#nombre,
            anio: this.#anio,
            director: this.#director,
            duracion: this.#duracion,
            active: this.#active
        }
    }

    static async crear(data) {
        try {
            const { nombre, anio, director, duracion } = data;
            const pelicula = new Pelicula(nombre, anio, director, duracion);
            const productObject = pelicula.getAllProperties()

            await createDataFile(productObject, 'pelicula.json');

            return productObject

        } catch (error) {
            throw new Error(`Error al crear la película: ${error}`);
        }
    }

    static async encontrarTodos() {
        try {
            const pelicula = await getAllData('pelicula.json');
            return pelicula

        } catch (error) {
            throw new Error('Error al obtener los datos');
        }
    }

    static async encontrarPorId(id) {
        try {
            const pelicula = await getDataById(id, 'pelicula.json');
            return pelicula

        } catch (error) {
            throw new Error('Error al obtener los datos de la pelicula ');
        }
    }

    static async actualizar(id, data) {
        try {
            const actualizarPelicula = await updateData(id, data, 'pelicula.json');
            return actualizarPelicula

        } catch (error) {
            console.error(`Fallo al actualizar la pelicula, ${error}`);
        }
    }

    static async eliminar(id) { 
        try {
            const peliculaBorrar = await permaDeleteData(id, 'pelicula.json');
            return peliculaBorrar
        } catch (error) {
            throw new Error(`Error al eliminar la película, ${error}`);
        }
    }
} 







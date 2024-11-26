import { v4 as uuidv4 } from 'uuid';
import { 
    createDataFile, 
    getAllData,
    getDataById,
    permaDeleteData,
    updateData
} from '../utils/fileUtils.js';

import { Validate } from '../utils/Validaciones.js';

export class Pelicula {

    #id
    #name
    #year
    #director
    #duration
    #active
    
    //FALTA LAS VALIDACIONES
    constructor(name,year,director,duration){
        this.#id = uuidv4();
        this.#name = Validate.Name(name, 'Nombre');
        this.#year = Validate.Year(year, 'Anio');
        this.#director = Validate.Name(director, 'Director');
        this.#duration = Validate.Duration(duration, 'Duracion');
        this.#active = true;
    }
    
    // Getters
    get id(){ return this.#id }
    get name() { return this.#name }
    get year() { return this.#year }
    get director() { return this.#director }
    get duration() { return this.#duration }
    get active() { return this.#active }

    // Setters con el transcurso del ejercicio se modificará 
    setId(newId) { this.#id = newId }

    setname(newName) { 
        try {
            Validate.ValidateName(newName, 'name');
            this.#name = newName
        } catch (error) {
            throw new ValidationError('Error al modificar el campo nombre', error)
        }
    }

    setAnio(newYear) { 
        try {
            Validate.ValidateYear(newYear, 'year');
            this.#year = newYear
        } catch (error) {
            throw new ValidationError('Error al modificar el campo anio', error)
        }
        
    }

    setDirector(newDirector) { 
        try {
            Validate.ValidateName(newDirector, 'director');
            this.#director = director
        } catch (error) {
            throw new ValidationError('Error al modificar el campo director', error)
        }
    }

    setDuracion(newDuration) { 
        try {
            Validate.ValidateDuration(newDuration, 'duration');
            this.#duration = newDuration
        } catch (error) {
            throw new ValidationError('Error al modificar el campo duracion', error)
        }
    }

    desactive() {
        console.log(this.#active)
        this.#active = false
    }
    
    active() {
        this.#active = true
    }

    getAllProperties(){
        return {
            id: this.#id,
            name: this.#name,
            year: this.#year,
            director: this.#director,
            duration: this.#duration,
            active: this.#active
        }
    }

    static formatearInstancea(objeto) {
        try {
            const { id, name, year, director, duration } = objeto;
            const nuevaInstancia = new Usuario(name, year, director, duration);
            nuevaInstancia.setId(id)
    
            return nuevaInstancia
        } catch (error) {
            throw new InternalServerError('Problemas al formatear la instancia de Usuario', error)
        }
    }

    static async crear(data) {
        try {
            const { name, year, director, duration } = data;
            const pelicula = new Pelicula(name, year, director, duration);
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







import { v4 as uuidv4 } from 'uuid';

export class Pelicula {

    #id
    #nombre
    #anio
    #director
    #duracion
    #active
    
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
    get active() { return this.#active }

    // Setters con el transcurso del ejercicio se modificará 
    setId(id) { this.#id = id }
    setNombre(nombre) { this.#nombre = nombre}
    setAnio(anio) { this.#anio = anio }
    setDirector(director) { this.#director = director }
    setActive() { this.#active = !this.#active }

    getAllProperties(){
        return {
            id: this.#id,
            nombre: this.#nombre,
            anio: this.#anio,
            director: this.#director,
            active: this.#active
        }
    }
} 






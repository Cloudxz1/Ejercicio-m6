import { TypesError } from "../error/TypesError.js"

export class Validate {

    static ValidateName(name, fieldName){
        const nameRegex= /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/
        if(!nameRegex.test(name)) 
            throw new TypesError(`${fieldName} debe contener solo letras o más de un caracter`,`Error al validar el regex ${nameRegex}`)

        return name;
    }

    static year(value, fieldName) {
        if (typeof value !== "number" || value < 0)
            throw new ValidationError(`${fieldName} debe ser un número mayor que 0`, 'Verifica que sea un dato numerico y mayor que 0');
        return value;
    }
}

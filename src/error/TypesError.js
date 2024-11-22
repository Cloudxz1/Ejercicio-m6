import AppError from "./AppError";

export class TypesError extends AppError {

    constructor(message, details){
        super(message || 'Error de Validación',400,details);
    }
}

export class NotFoundError extends AppError{
    constructor(message,details,entity){
        super(message || `${entity} No encontrado`,404,details)
    }
}

export class YeisonErrorXD extends AppError {
    constructor(message,details){
        super(message || 'Error en el JSON D:', 500, details)
    }
}


export class InternalServerError extends AppError{
    constructor(message,details){
        super(message || 'Error interno del servidor',500,details)
    }
}
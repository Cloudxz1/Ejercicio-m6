import { NotFoundError, YeisonErrorXD } from "../error/TypesError.js";
import { createFile, readFile } from "../services/fileServices.js";


export const createDataFile = async (data, dataPath) => {
    try {
        const datafile = await readFile (dataPath);
        let dataJson = null

        !datafile || datafile.length === 0 ? (dataJson = [data]) : dataJson = [ ...datafile, data ]
    
    } catch (error) {
        throw new YeisonErrorXD('Error al crear el archivo con la data',error);
    }
}

export const getAllData = async(dataPath) =>{
    try{
        const data = await readFile(dataPath);
        return data;    
    }catch(error){
        throw new NotFoundError('Error al crear el archivo con la data',error);
    }   
}

export const getDataById = async(id,dataPath) => {
    try{
        const data = await readFile(dataPath);
        const dataFound = data.find(dataFound => dataFound.id === id);

        return dataFound;
    }catch(error){
        throw new NotFoundError('No pudimos encontrar el id del dato', error)
    }
}



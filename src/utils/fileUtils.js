import { NotFoundError, YeisonErrorXD } from "../error/TypesError.js";
import { createFile, readFile } from "../services/fileServices.js";


export const createDataFile = async (data, dataPath) => {
    try {
        const datafile = await readFile (dataPath);
        let dataJson = null

        !datafile || datafile.length === 0 ? (dataJson = [data]) : dataJson = [ ...datafile, data ]
    
        await createFile(dataJson, dataPath)  
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

export const updateData = async (id, newData, pathData) => {
    try {
        const data = await readFile(pathData);
        const indexData = data.findIndex(dataFound => dataFound.id === id);

        if(indexData === -1) throw new Error('No pudimos encontrar el dato que buscas')
            const oldData = { ...data [indexData]}
        data [indexData] = { id, ...newData, active: true }

        await createFile(data, pathData);
        return oldData;

    } catch (error) {
        throw new YeisonErrorXD('Error al actualizar el dato', error);
    }
}

export const permaDeleteData = async (id, pathData) => {
    try {
        const data = await readFile(pathData);

        const indexData = data.findIndex(dataFound => dataFound.id === id);

        if(indexData === -1) throw new Error('No pudimos encontrar la data');

        const dataDelete = data [indexData];
        data.splice(indexData, 1);

        await createFile(data, pathData)
        return dataDelete

    } catch (error) {
        throw new YeisonErrorXD('Error al eliminar la data', error);
    }
}

export const softDeleteData = async (id, pathData) => {
    try {
        const data = await readFile(pathData);

        const indexData = data.findIndex(dataFound => dataFound.id === id);
        if(indexData === -1) throw new Error('No pudimos encontrar la data');
        
        const newInstance = Model.formatearIntances(data[indexData]);

        newInstance.desactive();
        data[indexData] = newInstance.getAllProperties();

        await createFile(data, pathData);
        
    } catch (error) {
        throw new YeisonErrorXD('No pudimos actualizar la data', error);
    }
}

export const getAllActiveData = async(pathData) => {
    try {
        const data = await readFile(pathData);

        const activeData = data.filter(dataFound => dataFound.active);

        const dataToRender = activeData.map(({active, ...resto}) => resto)

        return dataToRender

    } catch (error) {
        throw new NotFoundError('No pudimos encontrar la data', error);
    }
}


export const getActiveDataById = async(idSearch, pathData) => {
    try {
        const data = await readFile(pathData);
        const dataFound = data.find(
            (dataFound) => idSearch === dataFound.id && dataFound.active
        );

        if(!dataFound) throw new Error('No pudimos encontrar el dato');

        const { active, id, ...resto } = dataFound;
        return resto;
    } catch (error) {
        throw new NotFoundError('No pudimos encontrar la data', error);
    }
}
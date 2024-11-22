import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { YeisonErrorXD } from '../error/TypesError.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const createFile = async (data) => {
    try {
        const datafilePath = path.join(__dirname, `../data/${pathData}`)

        await fs.mkdir(path.dirname(datafilePath), {recursive: true})

        await fs.writeFile(datafilePath, JSON.stringify(data, null, 4), 'utf-8')
    } catch (error) {
        throw new YeisonErrorXD('Error al crear el archivo', error);
        
    }
} 

export const readFile = async (pathData) => {
    try {
        const datafilePath = path.join(__dirname, `../data/${pathData}`)

        const data = await fs.readFile(datafilePath, 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        console.error(`No podemos leer el archivo: ${error}`)
        throw new YeisonErrorXD('Error al leer el archivo', error);
    }
}
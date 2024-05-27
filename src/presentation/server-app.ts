import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

//una interfas es una regla que le quiero poner a un objeto
interface RunOptions {
    base: number;
    limit: number;
    show?: boolean;
    fileDestination: string;
    fileName: string;
}

export class ServerApp {

   static run({ base, limit, show, fileDestination, fileName }:RunOptions) {
        
    console.log('Servidor corriendo ...');

    const table = new CreateTable().execute({ base, limit });
    const wasCreated = new SaveFile()
        .execute({ 
            fileContent: table,
            destination: fileDestination,
            fileName: fileName, 
        });

    if( show ) console.log(table);

    ( wasCreated ) 
        ? console.log('Archivo Creado')
        : console.error('Archivo no creado');
        
    }
}
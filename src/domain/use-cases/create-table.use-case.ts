//reglas para nuestro obleto
export interface CreateTableUseCase {

    execute: ( options: CreateTableOption ) => string;

}

export interface CreateTableOption {
    base: number;
    limit: number;
}

export class CreateTable implements CreateTableUseCase {

    constructor(
       //podemos recibir dependencias
        
        
    ){}

    execute({ base, limit }: CreateTableOption ){

        let outputMessage = '';

        for (let i=1; i<=limit; i++) {
            outputMessage += `${base} x ${i} = ${base * i}\n`;
        }
        
        return outputMessage;

    }

}
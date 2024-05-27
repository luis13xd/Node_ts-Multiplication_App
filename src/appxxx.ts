
import fs from 'fs'
import { yarg } from './config/plugins/args.plugin';

//desestructuramos lo que vamos a usar en yarg creado en args.plugind y le inmdicamos  la letra con que la identifi en el cmd
const { b:base, l:limit, s:show } = yarg;

let outputMessage = '';
// const base = 5;
const headerMessage = `
============================
        Tabla del ${base}
============================
`;

for (let i=1; i<=limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if ( show ) {
    console.log(outputMessage);
}
console.log('creada')

fs.writeFileSync(`outputs/tabla-5.txt`, outputMessage);


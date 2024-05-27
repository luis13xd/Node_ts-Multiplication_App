import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';


export const yarg = yargs(hideBin(process.argv))
///cuando ejecuto el npm run dev -b haria lo siguiente
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'multiplication table base'

    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'multiplication table limit'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        demandOption: false,
        describe: 'show multiplication table'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        describe: 'file name'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'file destination'
    })

    //agregamos validaciones para que x eje si ponemos npm run dev .b -10 no dejhe pomner numer negativos
    .check((argv, options) => {

        if (argv.b < 1) throw 'error: base debe ser mayor a 0';

        return true;
    })

    .parseSync()
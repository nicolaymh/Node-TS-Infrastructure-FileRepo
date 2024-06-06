
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const checkBase = (argv: {  b: number; }) => {

        if ( argv.b < 1 ) throw 'The base must be greater than 0';

        return true;
}

export const getYargsInstance = (args: string[]) => {

    return yargs(hideBin(args))

    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'
    })
    .option('l', {
        alias: 'list',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .option ('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show the multiplication table'
    }).option('n', {
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        describe: 'File name'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File destination'
    })
    .check(checkBase)
    .fail((msg) => {
        if ( msg ) throw new Error( msg );
    })
    .parseSync()

};



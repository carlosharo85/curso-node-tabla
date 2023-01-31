//const { argv } = require('process');
const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


/*const [ , , arg3 = 'base=5'] = process.argv;
const [ , base ] = arg3.split('=');*/


//const base = 8;


//console.log(argv);


crearArchivoTabla(argv.base, argv.l, argv.h)
    .then( archivo => console.log(`Archivo: ${archivo} creado!`) )
    .catch( error => console.error(error));
const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async ( base = 5, listar = false, hasta = 10 ) => {
    let salida = '';
    let log = '';


    for (let x = 1; x <= hasta; x++) {
        salida += `${base} x ${x} = ${base * x}\n`;
        log += `${base} ${'x'.green} ${x} ${'='.green} ${base * x}\n`;
    }


    console.clear();
    if (listar) {
        console.log('================='.green);
        console.log('   Tabla del: '.green, colors.blue(base));
        console.log('================='.green);
        console.log(log);
    }


    try {
        fs.writeFileSync(`logs/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    crearArchivoTabla
};
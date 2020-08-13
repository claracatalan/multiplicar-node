// Require
// const fs = require('fs'); // Packages nativos de Node
// const fs = require('express'); // Packages creados por otros desarrolladores, no nativos de Node
// const fs = require('./'); // Packages propios cargados desde un archivo

// let base = 2;
// let nomFile = `Tabla-${base}.txt`;
// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += `${base} * ${i} = ${base * i}\n`;
// }

// fs.writeFile(`tablas/${nomFile}`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo ${nomFile} ha sido creado`);
// });

// const { crearArchivo } = require('./multiplicar/multiplicar'); // Packages propios cargados desde un archivo

// let base = '1';

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(err => console.log(err));

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(err => console.log(err));


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // Packages propios cargados desde un archivo
const argv = require('./config/yargs').argv;
var colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            // .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(err => console.log(err));
        break;

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(`Tabla listada:\n ${tabla}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Commando no reconocido');
}
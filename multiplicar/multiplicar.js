// requires
const fs = require('fs'); // Packages nativos de Node


crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }
        let archivo = `Tabla-${base}.txt`;
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/${archivo}`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(archivo)
        });
    });
}

listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`Valor base:${base} no es válido`);
            return;
        }
        if (!Number(limite)) {
            reject(`Valor limite:${limite} no es válido`);
            return;
        } else {

        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        resolve(data);
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Bruce',
    edad: 30,
    clave: 'Batman'
};

// const { nombre, edad, clave } = persona;
// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({nombre, clave, edad, rango = 'Capitan'}) => {
    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 15.54654,
            lng: -99.65465
        }
    }

}

// eslint-disable-next-line react-hooks/rules-of-hooks
const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
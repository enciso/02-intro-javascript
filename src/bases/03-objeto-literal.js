
const persona = {
    nombre: 'Bruce',
    apellido: 'Wayne',
    edad: 45,
    direccion: {
        ciudad: 'Gotham',
        zip: 12456,
        lat: 15.12356,
        lng: 99.54651
    }
};

// console.table( {persona} );

const persona2 = { ...persona };
persona2.nombre = 'Richard';

console.log( persona );
console.log(persona2);
import { getHeroeById } from './bases/08-imp-exp'

// const promesa = new Promise( (resolve, reject) => {
//
//     setTimeout( () => {
//         // Tarea
//         // 1. importar el getHeroeById
//         const heroe = getHeroeById(3);
//
//         resolve(heroe);
//
//         reject('No se pudo encontrar');
//     }, 2000);
//
// });
//
// promesa.then( (heroe) => {
//     console.log('heroe', heroe);
// })
// .catch( err => console.warn(err) );

const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const p1 = getHeroeById(id);
            (p1) ?
                resolve(p1) :
                reject('Heroe no encontrado');
        }, 2000);
    });
}

getHeroeByIdAsync(1)
    .then( console.log )
    .catch( console.warn );
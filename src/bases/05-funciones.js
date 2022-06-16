
const saludar = function(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar('Bruce'));

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

console.log(saludar2('Paty'));

const saludar3 = (nombre) => `Hola ${nombre}`;

console.log(saludar3('Alejandro'));


const getUser = () => ({
        uid: 'ABCD123',
        username: 'Sirious_Mouth'
    });

console.log(getUser());

// Tarea
// 1. Transformar a funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Alejandro');
console.log(usuarioActivo);
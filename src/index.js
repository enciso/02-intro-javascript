
const personajes = [ 'Naruto', 'Hinata', 'Zaske' ];
const [ , , p1 ] = personajes;
console.log(p1);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();

console.log(letras, numeros);

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const useState = (valor) => {
    return [ valor, () => { console.log('Hola Mundo') } ];
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const [ nombre, setNombre ] = useState('Batman');

console.log( nombre );
setNombre();
/*una función que reciba un objeto y un string…
El string va a ser el nombre de una propiedad, y
esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes
la función debe retornar true o false*/


var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};

function validar(objeto,propiedad){
    resultado = objeto.hasOwnProperty(propiedad);
    return resultado;
}

var propiedad = 'age';
console.log(validar(student,propiedad));
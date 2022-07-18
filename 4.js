 /** Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 
 * Imprima también el objeto antes o después de eliminar la propiedad. 
 * Objeto para usar:
 * var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
*/

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

// Imprime propiedad rollno
console.log(student.rollno);

// Emilina propiedad rollno
delete student.rollno;

// Imprime propiedad rollno, debe imprimir indefinida
console.log(student.rollno);

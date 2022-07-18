/**
 * Del siguiente objeto:
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
 * 
    1. Muestra en pantalla el valor de la propiedad name mediante .
    2. Muestra en pantalla el valor de la propiedad age mediante []
    3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
 */


    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };

    // Muestra en pantalla el valor de la propiedad name mediante .
   console.log(student.name);

   // Muestra en pantalla el valor de la propiedad age mediante []
   console.log(student['age']);

   // Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
   student.name = "Steve Jobs";
   console.log(student.name);


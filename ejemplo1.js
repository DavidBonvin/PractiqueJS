console.group("ciclos");
const tipoDeSuscription = "basic";

switch (tipoDeSuscription) {
    case "free" :
    console.log("Solo puedes tomar los cursos gratuitos");
    break;
    case "basic" :
    console.log("Puedes tomar casi todos los cursos de platzi durante un mes");
    break;
    case "Expert" : 
    console.log ("Puedes tomar casi todos los cursos de platzi durante un anno");
    break;
    case "ExpertPlis":
    console.log("Tu y alguien mas puede tomar Todos los cursos de platzi durante un anno");
    break; 

}

let nombre = 'David';
let apellido = 'Cordoba Osnas Bonvin';
let nombreDeUsuarioPlatzi = 'DavidCode'
let edad = 28;
let email = "ledave.musique@gmail.com"
let mayorEdad = true;
let dineroAhorrado = 200;
let deudas = 20 + 9 + 14 + 30; 

let fulName = `${nombre} ${apellido}`;
let dineroReal = dineroAhorrado - deudas; 

const miFuncion = (prenom, nom, nicknom) => {
    let fullName = `${prenom} ${nom}`;
    return `I am : ${fullName}, because i like ${nicknom}`;  
}
console.log(miFuncion(`David`,'Cordoba', 'Dave')); 

if (tipoDeSuscription === 'free') {
    console.log("solo puedes tomar los cursos gratuitos");
} else if (tipoDeSuscription === "basic"){
    console.log("puedes tomar casi todos los cursos de platzi durante un mes");
} else if (tipoDeSuscription === "Expert"){
    console.log('puedes tomar todos los cursos de platzi durante un anno');
} else if ( tipoDeSuscription ==="ExpertPlus"){
    console.log('puedes tomar los cursos con alguien mas durante un anno');
}

for( let i = 0; i < 5; i++) {
    console.log("El valoeir de i es: " + i);
};

for ( let i = 10; i >= 2; i--) {
    console.log("El valor de i es : " + i);
}
console.groupEnd();

 // una fincion que pueda recibir cualquier array como parametro e imprima 
 // su primer elemento 
console.group("arrays, funciones, objetos")
 const unaFuntion = (array) => {
     console.log (array[0]); 
 }; 
 let array = [23, 12, 25, 25 ,52]; 
 unaFuntion(array);

// una funtion que pueda recibir cualquier array como parametro e imprima todos 
//sus elementos por separado no todo el array completo 

let frutas = ['Pera', 'Manzana', 'sandia', 'melon'];
const frutasFuncion = (array) => {
    array.forEach((elem) => {
        console.log(elem);
     
    });
};
frutasFuncion(frutas); 

//Una function que reciba cualquier objeto como parametro e imprima todos  sus 
//elementos uno por uno

let persona = {
    prenom: 'Siham',
    profesion: 'Développeuse',
    age: 32
}
const aficherPerson = (objeto) => {
    Object.values(objeto).forEach((elem)=> {
        console.log(elem);
    });
};
aficherPerson(persona);
console.groupEnd(); 



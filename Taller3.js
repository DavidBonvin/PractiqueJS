

function calcularMediaAritmetica(lista){
// let sumaList = 0;

// for (let i = 0; i< list.length; i++){
//     sumaList = sumaList + list[i];
// }

const sumaLista = lista.reduce(
function(valorAcomulado = 0, newElement) {
return valorAcomulado + newElement; 
}
);

const promedioList = sumaLista / lista.length;  
return promedioList
}
console.log("Entres element le number de element");
let nbr 
const lista1 = [nbr];

lista1.sort(function(a,b){
    return a - b;
});

const mitadLista1 = parseInt(lista1.length /2);

function espar(numerito){
    if (numerito% 2 === 0) {
        
        return true;
    } else {
        return false; 
    }
} 

let mediana; 

if (espar(lista1.length)) {
 const elemento1 = lista1[mitadLista1];
 const elemento2 = lista1[mitadLista1-1];
 const MediaAritmetica1y2 = calcularMediaAritmetica([elemento1, elemento2]) ;
 mediana = MediaAritmetica1y2
}else {
    mediana = lista1[mitadLista1]
}

// moda
let list2 = [1,1,2,3,5,4,8,0,1,4,5,6,6,6,5,4,4,];

const list2Count = {};

list2.map(
    function(elemento) {
        if(list2Count[elemento]){
            list2Count[elemento] = list2Count[elemento] +1;
        } else {
            list2Count[elemento] = 1;
        }
         
    }
);
const listNewArray = Object.entries(list2Count).sort(
    function (valorAcomulado, nuevoValor) {
        return valorAcomulado[1] - nuevoValor[1];
    }
); //para transformar un objeto en una lista

const moda = listNewArray[listNewArray.length - 1];
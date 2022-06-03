let colombia1 = [  {
    name : "Juana",
    salary : 1000, 
},
{
    name : "Paula",
    salary : 3000, 
},
{
    name : "Andrea",
    salary : 1200, 
},
{
    name : "Sofia",
    salary : 5000, 
},
{
    name : "Andres",
    salary : 50000, 
},
{
    name : "uribe",
    salary : 500000, 
}, 
{
    name : "Rodolfo",
    salary : 5000000, 
}

    ];
const salarioCol = colombia1.map(
    function (personita){
        return personita.salary
    });
    console.log(salarioCol) ; 
//organizamos nuestro nuevo array
const salariosColSorted = salarioCol.sort(
    function(salaryA, SalarioB){
        return salaryA - SalarioB; 
    }
);
console.log(salariosColSorted); 


//calcular la mediana
function calcularMediaAritmetica(lista){
     const initialValue = 0;
    const sumaLista = lista.reduce(
   (valorAcomulado, newElement) => valorAcomulado + newElement, initialValue
    
    );
    console.log(sumaLista); 
    
    const promedioList = sumaLista / lista.length;  
    return promedioList
    };

    console.log(calcularMediaAritmetica(salariosColSorted)); 



function espar(numerito){
   return (numerito% 2 === 0);
   
}; 
console.log(espar(salariosColSorted))
// con los salarios 

function medianaSalarys(lista) {
    const mitad = parseInt(lista.length / 2);
    if (espar(lista.length)) {
const personitaMitad1 = lista[mitad - 1];
const personitaMitad2= lista[mitad]; 
const medianaGeneralSalary = calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
return medianaGeneralSalary;
    }else {
        const personitaMitad = lista[mitad]; 
        return personitaMitad;
    }
}; 


const medianaGeneralCol = medianaSalarys(salariosColSorted); 
console.log(salariosColSorted)

// mediana del top 10%
const splaceStart = (salariosColSorted.length * 90) / 100;
console.log(splaceStart); 
const splaceCount = (salariosColSorted.length - splaceStart);

const salariosColTop10 = salariosColSorted.splice(
    splaceStart,
    splaceCount,
    );
console.log(salariosColTop10);     

const medianaTop10Col = medianaSalarys(salariosColTop10); 
console.log(medianaTop10Col)

console.log({
    medianaGeneralCol,
     medianaTop10Col,
    }); 





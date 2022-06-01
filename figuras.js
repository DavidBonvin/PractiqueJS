// codigo del cuadrado 
console.group("cuadrado");
const ladoCuadrado = 5 ;
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm")
const PerimetroCuadrado = ladoCuadrado * 4; 
console.log("El perimetro  del cuadrado miden: " + PerimetroCuadrado + "cm");
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('el area de mi cuadrado es: ' + areaCuadrado + "cm^2");
console.groupEnd();
// codigo del triangulo 
console.group("triangulo")
const ladotriangulo1 = 6 ;
const ladotriangulo2 = 6;
const baseTriangulo = 4;
  

console.log("los lados del triangulo miden: " 
+ ladotriangulo1 
+ "cm, " 
+ ladotriangulo2 
+ "cm, "
+ baseTriangulo 
+ "cm");

const alturaTriangulo = 5.5;
console.log('la altura del triangulo es de:'+ alturaTriangulo + "cm"); 
const perimetroTriangulo = ladotriangulo1 + ladotriangulo2 + baseTriangulo;
console.log('el perimetro del triangulo es : ' + perimetroTriangulo + 'cm'); 
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log('el aerea del triangulo es de : ' + areaTriangulo + 'cm');

console.groupEnd();
console.group('circulo'); 
 
const radioCirculo = 4 ; 
console.log('el radio del circulo es: ' + radioCirculo + 'cm');
const diametroCirculo = radioCirculo * 2 ; 
console.log('el diametro del circulo es: ' + diametroCirculo + 'cm');
const PI = Math.PI;
console.log('PI es: ' + PI );
const perimetroCirculo = diametroCirculo * PI;
const AreaCirculo = (radioCirculo * radioCirculo) * PI
console.log('el area del circulo es: ' + AreaCirculo +'cm^2');

// funciones 
console.group('Funciones')

function funPerimetroCuadrado(lado) {
    return lado * 4;
}
function funAreaCuadrado(lado) {
    return lado * lado; 
}
function funPerimetroTriangulo (value1, value2, base){
  
    const result = parseFloat(value1)+parseFloat(value2)+parseFloat (base);

  
    return result; 
    
}
function funAreaTriangulo(base, altura) {
    return (base * altura) / 2; 
}
function funDiametroCirculo(radio){
    return radio * 2;
}
function funPerimetroCirculo(radio) {
    const diametro =  funDiametroCirculo(radio);
    return diametro * PI;
}
function funAreaCirculo(radio) {
    return (radio * radio) * PI;
}
function funAlturaTrianguloIsoceles (lado1, lado2 , base){
    if (lado1 === lado2 && lado1 != base) {
        const altura =  Math.sqrt((lado1 * lado1) - ((base * base / 4))) 
        return(altura)
}
     else {
        alert('no son buenos los datos, ensaye de nuevo')
    }
}
   
// Aqui interactuamos con html
 
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; 
    
    const perimetro = funPerimetroCuadrado (value); 
    document.getElementById("respuestaCuadrado").innerHTML = perimetro 
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; 
    
    const area = funAreaCuadrado (value); 
    document.getElementById("respuestaCuadrado").innerHTML = parseInt(area); 
    
}
function calcularperimetroTriangulo() {
    const input = document.getElementById("InputTriangulo1");
    const value1 = input.value; 
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;
    const input3 = document.getElementById("InputTriangulo3");
    const base = input3.value;
    
    const perimetro = funPerimetroTriangulo(value1,value2,base);
    document.getElementById("respuestaTriangulo").innerHTML = perimetro
}
function calcularAreaTriangulo() {
    const input4 = document.getElementById("InputTriangulo4");
    const value4 = input4.value
    const input3 = document.getElementById("InputTriangulo5");
    const base = input3.value;

    const area = funAreaTriangulo (value4, base);
    document.getElementById("respuestaTriangulo").innerHTML = area
}

function calcularAreaDiametroPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const radio = input.value 
    const diametro = funDiametroCirculo(radio);
    const perimetro = funPerimetroCirculo(radio);
    const area = funAreaCirculo(radio);
    document.getElementById('respuestaCirculo1').innerHTML = diametro
    document.getElementById('respuestaCirculo2').innerHTML = perimetro
    document.getElementById('respuestaCirculo3').innerHTML = area
  

}
// Descuentos
 
function calcularPorcentajes(precio,descuento){
    const valor = 100 * ( parseInt(precio) - parseInt(descuento))
    const precioFinal = parseInt(valor) / 100 
    console.log(precioFinal);
    return precioFinal

}
function buttonPrecioDescuento() {
    const input = document.getElementById("precio1");
    const precio1 = input.value
    const input2 = document.getElementById("descuento1");
    const descuento1 = input2.value
    const resultado = calcularPorcentajes(precio1, descuento1); 
    document.getElementById("precioConDescuento").innerHTML = "El precio final con el descuento es: $" + resultado; 

}
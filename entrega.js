 
 
 //Objeto  cliente
const Cliente = {
    nombre: prompt("¿Cual es tu nombre?"),
    edad: prompt("¿Que edad tienes?"),
    domicilio: prompt("¿Cuál es tu dirección?"),
  }


// Monto del crédito
 function monto1(){
    let monto1 = parseInt(prompt("Ingresar monto que deseas pagar en cuotas."));
    alert("El monto total a pagar es de " + monto1 +" dolares" )
    return monto1
}

//Cantidad de cuotas
    function cuotas1(){
        let cuotas1 = parseInt(prompt(" Elije la cantidad de cuotas  mensuales."));
       return cuotas1   
    }
       
let monto = monto1()
let cuotas = cuotas1()


//Funcion para dividir monto en cuotas
function dividir(dato1, dato2){
   let resultado = dato1 / dato2;
   return resultado
}

let montocuota = dividir(monto, cuotas);


//Mostrar resultado
alert(Cliente.nombre + " de" + Cliente.edad + " años de edad, con domicilio en " + Cliente.domicilio + " Pagará " + monto + " en " + cuotas + " cuotas mensuales de " + montocuota + " dolares cada una.")

const Aval = {
  nombre: prompt("¿Cual es el nombre del aval?"),
  edad: prompt("¿Que edad tiene el aval?"),
}

const Riesgo = [ ];
Riesgo.push(Aval.edad);
console.log(Riesgo);

if (Riesgo[0] <= 25) {
  console.log("Riesgo alto")
}
  else {
    console.log ("cliente sin riesgo")
  }
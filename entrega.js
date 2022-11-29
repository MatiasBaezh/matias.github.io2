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

//chequear que variable cuotas sea mayor a 0
if (cuotas <=1 ) {
    alert("ingrese un numero mayor a cero.")
  } else {
    alert("El monto total se pagará en " + cuotas + " cuotas mensuales.") 
  }


//Funcion para dividir monto en cuotas
function dividir(dato1, dato2){
   let resultado = dato1 / dato2;
   return resultado
}

let montocuota = dividir(monto, cuotas)

//Mostrar resultado
alert("Pagarás " + cuotas + " cuotas mensuales de " + montocuota + " dolares cada una.")
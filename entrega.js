
// Crear un objeto mediante un evento y almacena los datos ingresados en el formulario
const form = document.querySelector('#Formulario');

form.addEventListener('submit', (event) => {
  // Evita recargar la página
  event.preventDefault();

  // Crear un objeto FormData a partir del formulario
  const formData = new FormData(form);

  // Crea un objeto vacío para almacenar los datos del formulario
  const datos = {};

  // Itera para guardar los datos del formulario en el objeto que esta vacío
  for (const [key, value] of formData.entries()) {
    datos[key] = value;
  }

  // Funcion que divide el monto por la cantidad de cuotas
  function dividir(datos) {
    
    return datos.monto / datos.cuotas;
  }
  
  //Resultado de la division se guarda en una variable
  const resultado = dividir(datos);

  // Caputuro el parrafo en html donde quiero mostrar el resultado de la funció
  const elementoResultado = document.querySelector('#resultado');

  // Muestro el resultado de la división modificando el contenido del elemento HTML
  elementoResultado.innerHTML = resultado;
});


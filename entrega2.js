// Obtener el formulario
const form = document.getElementById('miFormulario');

// Crear un objeto FormData a partir del formulario
const formData = new FormData(form);

// Crear un objeto vacío para almacenar los datos del formulario
const datos = {};

// Iterar sobre los datos del formulario y agregarlos al objeto
for (const [key, value] of formData.entries()) {
  datos[key] = value;
}

// Ahora puedes acceder a las propiedades del objeto como cualquier otro objeto en JavaScript
console.log(datos.nombre); // Muestra el valor del campo "nombre" del formulario
console.log(datos.edad); // Muestra el valor del campo "edad" del formulario

function dividir(objeto) {
    return objeto.propiedad1 / objeto.propiedad2;
  }
  
  console.log(dividir(datos)); // Muestra el resultado de dividir la propiedad1 por la propiedad2 del objeto
  
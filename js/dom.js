const $root = document.getElementById("root"),
  $clase = document.querySelector(".clase0");

$root.innerHTML = `<h1>Elemento root</h1> `;
$clase.innerHTML = `<h2>Clase</h2>`;

const empresa = {
  nombre: "GGL",
  ubicacion: "Providencia",
};

const Datos = {
  numero: "0276",
  giro: "Construcción",
};

const concatenacion = { ...empresa, ...Datos };

console.log(concatenacion);



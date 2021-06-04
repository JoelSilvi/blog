const d = document,
  $root = d.getElementById("root");

const cosas = {
  nombre: "pala",
  valor: 500,
  utilidad: "muchas",
};

const varios = {
  animal: "caballo",
  peso: 700,
  tamanio: "grande",
};

const juntos = { ...cosas, ...varios };

// $root.innerHTML = Object.values(juntos);

const objeto = {};

console.log(objeto);

// const obj1 = {
//     a: "a",
//     b:"b",
//     c:"c"
// }

// const obj2 = {
//     d: "d",
//     e: "e",
//     f: "f"
// }

// const newObject = {...obj1,...obj2}

const coche = {
  marca: "tesla",
  // model: "S"
};

let model = coche.model ? coche.model : "X";

const newAyuda = { ...coche };

// console.log(newAyuda)

// let model;
// if (coche.model){
//     model = coche.model;
// }else{
//     coche.model = "Sin modelo"
// }

function suma(a, b) {
  a = a == null ? 0 : a;
  // a = a ?? 0
  b = b == null ? 0 : b;
}

suma();
suma(4, 4);

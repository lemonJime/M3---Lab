import "./style.css";


// Géneros
const pop_rock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hard_rock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

// Estilos
const nombreGrupo = "background: green; font-weight: bold;font-size: 14px;";

// Interfaz
interface Grupo {
  nombre : string;
  anyo : number;
  activo : boolean;
  genero : string;
}

// Grupos
const Beatles: Grupo = {
  nombre: "The Beatles",
  anyo : 1960,
  activo: true,
  genero : "Pop Rock",
};

const Queen: Grupo = {
  nombre: "Queen",
  anyo : 1970,
  activo: false,
  genero : "Rock",
};

const ACDC: Grupo = {
  nombre: "AC DC",
  anyo : 1973,
  activo: true,
  genero : "Hard Rock",
};

const Beethoven: Grupo = {
  nombre: "Ludwig van Beethoven",
  anyo : 1770,
  activo: false,
  genero : "Clásica",
};

const Rolling: Grupo = {
  nombre: "The Rolling Stones",
  anyo : 1962,
  activo: true,
  genero : "Rock",
};

// Impresiones por consola
console.log(`· %c${Beatles.nombre}%c / ${Beatles.anyo} / ${Beatles.activo} / ${pop_rock}`, nombreGrupo);

console.log(`· %c${Queen.nombre}%c / ${Queen.anyo} / ${Queen.activo} / ${rock}`, nombreGrupo);

console.log(`· %c${ACDC.nombre}%c / ${ACDC.anyo} / ${ACDC.activo} / ${hard_rock}`, nombreGrupo);

console.log(`· %c${Beethoven.nombre}%c / ${Beethoven.anyo} / ${Beethoven.activo} / ${clasica}`, nombreGrupo);

console.log(`· %c${Rolling.nombre}%c / ${Rolling.anyo} / ${Rolling.activo} / ${rock}`, nombreGrupo);
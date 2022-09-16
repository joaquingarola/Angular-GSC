// [no editar] (pretender que esto proviene de una version externa de labiblioteca `foo.d.ts`)
interface Ciudad {
  nombre: string;
};

// [/no editar]
const montreal = {
  coords: {
    latitud: 42.332,
    longitud: -73.324,
  },
  nombre: 'Montreal',
};

const tampa = {
  coords: {
    latitud: 27.9478,
    longitud: -82.4584,
  },
  nombre: 'Tampa',
};

interface Coords{
  latitud: number;
  longitud: number;
}

interface ICiudad extends Ciudad {
  coords: Coords;
}

function informacionCiudad(ciudad: ICiudad) {
  const coords =
    `(${ciudad.coords.latitud.toFixed(3)}, ${ciudad.coords.longitud.toFixed(3)})`;
  return `${ciudad.nombre.toUpperCase()} se encuentra en ${coords}.`;
};

console.log('[Ejercicio 2.3]',
  `${informacionCiudad(montreal)} \n\n ${informacionCiudad(tampa)}`);
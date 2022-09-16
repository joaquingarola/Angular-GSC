interface IPersona {
  nombre: string;
  edad: number;
};

class Persona implements IPersona {
  constructor(public nombre: string, public edad: number) { }
}

const juan = new Persona('Juan', 31);
console.log('[Ejercicio 2.2]', `${juan.nombre} tiene ${juan.edad} anios.`);
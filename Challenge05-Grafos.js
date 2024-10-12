class Ciudad {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Persona {
    constructor(nombre, edad, ciudad) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }
}

class Grafo {
    constructor() {
        this.personas = [];
        this.ciudades = new Map();
    }

    agregarPersona(persona) {
        this.personas.push(persona);
        if (!this.ciudades.has(persona.ciudad.nombre)) {
            this.ciudades.set(persona.ciudad.nombre, []);
        }
        this.ciudades.get(persona.ciudad.nombre).push(persona);
    }

    imprimirPersonasEnCiudad(nombreCiudad) {
        if (this.ciudades.has(nombreCiudad)) {
            console.log(`Personas en ${nombreCiudad}:`);
            this.ciudades.get(nombreCiudad).forEach(persona => {
                console.log(`${persona.nombre}, Edad: ${persona.edad}`);
            });
        } else {
            console.log(`No hay personas en ${nombreCiudad}`);
        }
    }
}

// Ejemplo de uso
const cali = new Ciudad("Cali");
const jam = new Ciudad("Jamundí");

const david = new Persona("David", 20, cali);
const jonathan = new Persona("Jonathan", 25, cali);
const oscar = new Persona("Oscar", 21, jam);

const grafo = new Grafo();
grafo.agregarPersona(david);
grafo.agregarPersona(jonathan);
grafo.agregarPersona(oscar);

grafo.imprimirPersonasEnCiudad("Cali");
grafo.imprimirPersonasEnCiudad("Jamundí");

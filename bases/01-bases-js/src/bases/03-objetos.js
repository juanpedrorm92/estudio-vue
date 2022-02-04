

const persona = {
    nombre : 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 3424234,
        lat: 23.32423,
        lng: 34.4234
    }

};

//esto rompe la referencia en espacio en memoria, y crea un nuevo objeto modificable
const persona2 = { ...persona };

persona2.nombre = 'peter';



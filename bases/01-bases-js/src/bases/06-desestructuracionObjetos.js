//desestructaracion de objetos 

const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
    power: 'Lucas'
};

//lo que hace aqui es crear varias constantes y van ser extraidas del objeto de person
const {name, codeName, age, power = 'no tiene poder'} = person ;

/* console.log( name ); */
/* console.log( age ); */
/* console.log( codeName ); */
/* console.log( power ); */


/* const createHero = ({name, age, codeName, power="sin poder"}) => {

    // cuando la llave es igual a la variable se puede obviar y pasr directo la variable por ej name:name
    return {
        id: 1231234,
        name,
        age,
        codeName,
        power
    }
}
 */

const createHero = ({name, age, codeName, power="sin poder"}) => ({
        id: 1231234,
        name,
        age,
        codeName,
        power
})


console.log( createHero(person));

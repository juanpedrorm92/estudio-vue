import { getHeroById} from './bases/08-imp_exp';


//las promesas son asincronas permiten ejecutar un codigo en diferente momento en el tiempo

//console.log('Inicio');

//new Promise( (resolve, reject) => {

  //  console.log('cuerpo de la promesa');
    /* resolve('Promesa resuelta'); */
    //reject('Promesa resuelta');


//})

/* .then(msg => console.log(msg))
.catch(err => console.log(err)) */
//podemos llamar directamente la funcion y el valor que retorne se asigna automaticamente
//.then(console.log)
//.catch(console.log)
//el msg es el mensaje que se esta resolviendo dentro de la promesa
//el then es cuando se ejecuta correctamente la promesa
//console.log('Fin');


const getHeroByIdAsync = (id) => {
    
    return new Promise ((resolve, reject) => {

        setTimeout( ()=> {

            //se va a llamar a esta funcion
            const hero = getHeroById( id );
            
            if (hero) {

                //luego de un segundo se ejecuta el resolve
                resolve(hero);
            }else{
                reject('El heroe no existe');
            }
        },1000);
    });
}

getHeroByIdAsync()
    .then( h => {
        console.log(`El heroe es: ${h.name}`)
    })
    .catch(console.log);

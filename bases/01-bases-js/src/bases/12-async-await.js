
//el await me permite obtener el valor de la resolucion de la promesa y trabajarla como una funcion sincrona

const miPromesa = () => {
   return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('Tenemos un valor en la promesa');
            // reject('hola tenememos un error');
        },1000);
   });
    
}

//usar async es la forma resumida de utilizar new Promise
const medirTiempoAysnc = async() => {

    try {
        console.log('Inicio');

        const respuesta = await miPromesa();
    
        return 'fin de medir tiempo async' + respuesta;
        // console.log('Fin');
    } catch (error) {
         return 'Error catch'
        //throw 'Error en medirTiempoAsync';
    }


}

 medirTiempoAysnc()
 .then( valor => console.log(valor)) //el valor es el retorno de la funcion async
 .catch(err => console.log(err))
 




import giphyApi from "./bases/11-axios";


const getImage = async() => {

    try {

        // el await va con parentecis, priemero se ejecuta esa promesa y le indcamos que nos traiga data y asi desestructuramos la data
         const {data} = (await giphyApi.get('/random')).data;
         const {url}  = data.images.original;

         
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        
    } catch (error) {
        console.log('Error en la peticion', error);
        throw error;
    }

}


getImage();

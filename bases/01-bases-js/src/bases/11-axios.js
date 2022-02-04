import  axios from  'axios';


const apikey = 'HvQHExI4nGydIs148cNyVePGALTsUhek';

//https://api.giphy.com/v1/gifs/random?api_key=

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params:{
        api_key:apikey
    }
});

export default giphyApi;


// giphyApi.get('/random')
// .then( resp => {

//     const {data} = resp.data;
//     const {url}  = data.images.original;

//   /*   const {images} = resp.data.data;

//     const {url} = images.original;
//  */
//     const img = document.createElement('img');
//     img.src = url;

//     document.body.append(img);
// });

//
const apikey = 'HvQHExI4nGydIs148cNyVePGALTsUhek';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`)
//json es una  promesa
.then(resp => resp.json())
.then( ({data}) => {
    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
});
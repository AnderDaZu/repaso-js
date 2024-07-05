
const apiKey = 'XhX74fXNYYViBS6vllwQBNQ7t19UAeoN';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then( resp => resp.json() )
    .then( (body) => console.log(body) )
    // .then( ({data}) => {
    //     const {url} = data.images.original;
    //     console.log(url);
    //     const img = document.createElement('img');
    //     img.src = url;
    //     document.body.append(img);
    // })
    .catch( error => console.log(error) );
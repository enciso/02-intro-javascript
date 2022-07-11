
// const getImagenPromesa = () => new Promise( resolve => ('') );
// getImagenPromesa().then(console.log);

const getImage = async () => {
    try {
        const apiKey = 'h6XhUjZG4Lcp89RxWAis8figtEpF0UTa';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (e) {
        console.warn(e);
    }
}

getImage();
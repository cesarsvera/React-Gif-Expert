

export const getGif = async(newCategory)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=l5P5xiN2vsL6gHhk4bjfqv3D1iVrBMvM&q=${newCategory}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const respuesta = data.map(({images, id, title})=>{
        return {
            image: images.downsized_medium.url,
            id: id,
            title: title
        }
    })
    // console.log(respuesta);
    return respuesta
    

}
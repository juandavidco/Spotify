let URI="https://api.spotify.com/v1/artists//top-tracks?market=US"

let buscar=document.getElementById("buscar")
buscar.addEventListener("click",function(evento){
    evento.preventDefault()
    let artista=document.getElementById("artista").value 
    console.log(artista)
    URI=`https://api.spotify.com/v1/artists/${artista}/top-tracks?market=US`
    const TOKEN="Bearer BQCte9hbked-Zp4tyNv0gg2y88uIFNP9dbJeWdt-O_3f0zMYmdHblGwJDg96kZ8RtCx23heaN9wu8CSFN3QYEytTXqpahkBKbsRa4gIYEUBz5nG7GC1Ez2oX5wxiRTgDjgCBjfzEYa3ZIoqlUGzVARHlQBStko5qbtL7KazdChObdpdG5JpT4Y_zbJeaQAC42Dg"
    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN},
    }
    fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json() //GARANTIZO FORMATO JSON
})
.then(function(respuesta){
    console.log(respuesta) //HAGO LO QUE QUIERA CON RESPUESTA
    console.log(respuesta.tracks) //ACCEDO A UN ATRIBUTO DE LA RESPUESTA

    //RECORRER UN ARREGLO
    let fila=document.getElementById("fila")
    respuesta.tracks.forEach(function(cancion){
        /*console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)
        console.log(cancion.popularity)
        console.log(cancion.album.name)
        console.log(cancion.album.release_date)*/
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let imagen=document.createElement("img")
        imagen.classList.add("h-100","w-100","img-fluid")
        imagen.src=cancion.album.images[0].url

        let nombre=document.createElement("h3")
        nombre.classList.add("text-center","text-dark")
        nombre.textContent=cancion.name

        let album=

        //PADRES E HIJOS
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)





    })

})
.catch(function(respuestaError){
    console.log(respuestaError)
})
})

//RECETA PARA CONSUMIR APIS CON JS PURO

//1.SI YO QUIERO CONSUMIR UN API
//DEBO SABER PARA DONDE IR Y A QUE SERVICIO...
//DEBO CONFIGURAR LA URI

//2.CONFIGURO DATOS ESPECIALES O DE CONTROL EN EL SERVIDOR


//3.CONFIGURO LA PETICION
//NOTA: SOLO GET Y PUT CONFIGURAN BODY
//PARA JS LA PETICION ES UN OBJETO


//4.ARRANQUE PUES MIJO
//CONSUMA EL API

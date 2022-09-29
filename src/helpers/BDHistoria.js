let artistas=[
    {foto:'https://firebasestorage.googleapis.com/v0/b/spotify-39cf4.appspot.com/o/cantante1.jpg?alt=media&token=c5535d64-3966-438b-8b76-05614826e96b',
    historia:"Michael Joseph Jackson (Gary, Indiana, 29 de agosto de 1958-Los Ángeles, 25 de junio de 2009),​ fue un cantante, compositor, productor y bailarín estadounidense.Apodado como el Rey del Pop, sus contribuciones y reconocimiento en la historia de la música y el baile durante más de cuatro décadas, así como su publicitada vida personal, lo convirtieron en una figura internacional en la cultura popular. Su música incluye una amplia acepción de géneros como el pop, rhythm and blues (soul y funk), rock, disco y dance, y es reconocido como el «artista musical más exitoso de todos los tiempos» por los Guinness World Records"},
    {foto:'https://firebasestorage.googleapis.com/v0/b/spotify-39cf4.appspot.com/o/cantante2.jpg?alt=media&token=072b926f-e313-4bdd-834e-3562c1075067',
    historia:"Amala Ratna Zandile Dlamini (Los Ángeles, Estados Unidos; 21 de octubre de 1995), más conocida por su nombre artístico Doja Cat, es una rapera, cantante, compositora y productora discográfica estadounidense.Firmó un contrato discográfico con RCA Records en 2014 y posteriormente lanzó su primer extended play, titulado Purrr!, que contiene temas como «So High» y «No Police».En 2018, saltó a la fama con su sencillo «Mooo!», el cual se convirtió en un tema viral."},
    {foto:'https://firebasestorage.googleapis.com/v0/b/spotify-39cf4.appspot.com/o/cantante3.png?alt=media&token=c51e71a6-282f-4174-9081-3015aac203a4',
    historia:"Gorillaz es una banda virtual inglesa creada en 1998 por Damon Albarn y Jamie Hewlett. La banda está compuesta por cuatro miembros ficticios: 2-D, Noodle, Murdoc Niccals y Russel Hobbs. La mayoría de sus canciones junto con todo su universo ficticio, se presentan a través de vídeos musicales animados, de animación tradicional y animación por computadora, entrevistas y pequeños cortos animados. En la realidad, Albarn es el único miembro permanente de la banda. El productor y ejecutivo Remi Kabaka Jr. empezaría a colaborar con el grupo en 2016 después de proveer por varios años la voz de Russel Hobbs y sería nombrado miembro oficial junto a Albarn y Hewlett en 2019 en el documental de Gorillaz, Gorillaz: Reject False Icons"},
    {foto:'https://firebasestorage.googleapis.com/v0/b/spotify-39cf4.appspot.com/o/cantante4.jpg?alt=media&token=685a9c65-1ebc-49c3-90bf-c47cd86ceb47',
    historia:"Melanie Adele Martinez (Astoria, Nueva York; 28 de abril de 1995) es una cantante, compositora, actriz, directora y productora estadounidense. Fue participante del concurso de talentos televisivo The Voice,[1] y tras llegar a los últimos seis concursantes de la tercera temporada del programa y ser eliminada, se embarcó en una gira acústica nacional donde interpretó versiones que realizó durante el concurso y algunas canciones originales. Melanie ha sacado tres discos, el primero titulado Cry Baby y el segundo K-12. En septiembre de 2020 publicó el EP After School."},
    {foto:'https://firebasestorage.googleapis.com/v0/b/spotify-39cf4.appspot.com/o/cantante5.png?alt=media&token=e52d1494-54af-4bce-a896-cf3de4ab0034',
    historia:"Laura Pergolizzi (Long Island, 18 de marzo de 1981), conocida artísticamente como LP, es una cantautora y compositora estadounidense. Entre sus trabajos, destaca el sencillo «Lost on You».Ha lanzado cinco álbumes y tres EP. Ha escrito canciones para artistas como Cher, Rihanna, Backstreet Boys, Leona Lewis, Mylène Farmer y Christina Aguilera."},
    {foto:'https://firebasestorage.googleapis.com/v0/b/spotify-39cf4.appspot.com/o/cantante6.jpg?alt=media&token=cb92ba2f-78e4-45b5-ae76-e39cbb28467e',
    historia:"Marie Ulven Ringheim, conocida como Girl in Red, es una cantante, productora musical y compositora noruega.es una joven de 22 años que comenzó grabando música en su habitación. Nacer en una ciudad pequeña como Horten, al sur de Oslo, sin ningún tipo de escena musical que apoyara o impulsara su arte, fue uno de los motivos que la llevó a grabar música por su cuenta. Así nació Girl in Red, un proyecto en solitario alejado de la presión de la industria musical y con la libertad de grabar en el momento que ella quiera."},
    {foto:'https://firebasestorage.googleapis.com/v0/b/spotify-39cf4.appspot.com/o/cantante7.jpg?alt=media&token=7bda907f-5c95-4910-a7e0-469498017b03',
    historia:"Black Sabbath fue una banda británica de heavy metal y hard rock formada en 1968 en Birmingham por Tony Iommi (guitarra), Ozzy Osbourne (voz), Geezer Butler (bajo) y Bill Ward (batería). Influenciados por la música de Blue Cheer, Cream o Vanilla Fudge,la agrupación incorporó desde sus inicios letras sobre ocultismo y terror con guitarras afinadas de modo más grave y consiguió varios discos de oro y platino en la década de 1970. Son los pioneros del heavy metal junto a otros grupos contemporáneos como Deep Purple,Budgie,Pentagram,Sir Lord Baltimore y Led Zeppelin. Al ser una de las primeras y más influyentes bandas de heavy metal de todos los tiempos,Black Sabbath ayudó a desarrollar el género con publicaciones tales como Paranoid, álbum que logró cuatro certificaciones de platino de la RIAA.Han vendido más de 75 millones de discos en todo el mundo, incluidos 15 millones de copias solo en los Estados Unidos"},
    {foto:'https://firebasestorage.googleapis.com/v0/b/spotify-39cf4.appspot.com/o/cantante8.jpg?alt=media&token=24409722-f09b-47a6-b800-efd9fe073aca',
    historia:"Eric Whitney (Lake Worth, Florida; 15 de abril de 1991), conocido como Ghostemane o Eric Ghoste, es un músico, rapero, cantante y compositor estadounidense, crecido en Florida. Whitney se mudó a Los Ángeles, California, para comenzar su carrera como rapero y finalmente encontrar el éxito en el género musical underground."},
    {foto:'https://firebasestorage.googleapis.com/v0/b/spotify-39cf4.appspot.com/o/cantante9.jpg?alt=media&token=db2eddc2-7fdb-47f6-8932-b4c6daf6a72e',
    historia:"Adele Laurie Blue Adkins (Londres, 5 de mayo de 1988), conocida simplemente como Adele, es una cantautora y multinstrumentista británica.Es una de las artistas musicales con mayores ventas del mundo, con más de 120 millones de ventas entre discos y sencillos.Desde pequeña mostró interés por la música y en 2006 se egresó de la BRIT School, año en el que firmó un contrato con XL Recordings, tras ser descubierta por unos demos que un amigo publicó en la red social MySpace.En 2008, lanzó su álbum de estudio debut, 19, el cual se situó en la posición 1 de la lista de álbumes británica y ha sido certificado ocho veces platino en Reino Unido y triple platino en Estados Unidos.En los Premios Brit de 2008 recibió el galardón elección de los críticos y también ganó la encuesta Sound of 2008 realizada por la BBC.Un año después, en la 51.ª entrega de los Premios Grammy ganó los galardones mejor artista nuevo y mejor interpretación vocal pop femenina por «Chasing Pavements»."},
    {foto:'https://firebasestorage.googleapis.com/v0/b/spotify-39cf4.appspot.com/o/cantante10.jpeg?alt=media&token=3a1cb7f3-9f19-4892-b91f-f723a5bdbf19',
    historia:"Tirone José González Orama (Caracas, 11 de marzo de 1988-Maracay, 20 de enero de 2015), conocido artísticamente como Canserbero fue un rapero, poeta,compositor y activista venezolano.Fue uno de los intérpretes más significativos del rap independiente en su país de origen y en América Latina; es habitualmente considerado uno de los raperos hispanohablantes más importantes e influyentes.A lo largo de su carrera llegó a lanzar dos álbumes de estudio como solista, Vida (2010) y Muerte (2012), respectivamente,​ y tuvo varias canciones notorias como «Es épico», «Pensando en ti», «¿Y la felicidad qué?», «C’est la mort», «Maquiavélico», «Jeremías 17-5», entre otras"}
]

let fila=document.getElementById("fila")
artistas.forEach(function(artista){
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow","text-center","h-100","p-5","bg-secondary")

    //creando una IMAGEN
    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid","w-100")
    imagen.src=artista.foto[0]

    let descripcion=document.createElement("p")
     descripcion.classList.add("text-danger","d-none")
     descripcion.textContent=artista.descripcion

     tarjeta.appendChild(imagen)
     tarjeta.appendChild(descripcion)
     columna.appendChild(tarjeta)
     fila.appendChild(columna)
})
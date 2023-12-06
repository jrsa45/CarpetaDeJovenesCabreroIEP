document.addEventListener('DOMContentLoaded', () => {
    const indexList = document.getElementById('index-list');
    const mediaGallery = document.getElementById('media-gallery');
    const enlargedImageContainer = document.getElementById('enlarged-image-container');
    const searchInput = document.getElementById('searchInput');

    const mediaFiles = [
        { id: 1, name: 'N1 Cuerpo de Jovenes de Jesucristo', image: 'Imagenes/N1cuerpodejovenes.jpg', audio: 'Audios/N1cuerpodejovenes.mp3' },
        { id: 2, name: 'N2 La Gloria es de El', image: 'Imagenes/N2lagloriaesdeel.jpg', audio: 'Audios/N2hayquecomprender.mp3' },
        { id: 3, name: 'N3 Vengo a ti con mi carga Señor', image: 'Imagenes/N3vengoaticonmicargaseñor.jpg', audio: 'Audios/N3vengoaticonmicarga.mp3' },
        { id: 4, name: 'N4 Cristo es la medicina', image: 'Imagenes/N4cristoeslamedicina.jpg', audio: 'Audios/N4cristoeslamedicina.mp3' },
        { id: 5, name: 'N5 Te mereces toda Gloria', image: 'Imagenes/N5temerecestodagloria.jpg', audio: 'Audios/N5temerecestodagloria.mp3' },
        { id: 6, name: 'N6 Algunos cantan', image: 'Imagenes/N6algunoscantan.jpg', audio: 'Audios/N6algunoscantan.mp3' },
        { id: 7, name: 'N7 Canticos Celeste', image: 'Imagenes/N7canticoscelestes.jpg', audio: 'Audios/N7canticosceleste.mp3' },
        { id: 8, name: 'N8 Fui encontrado', image: 'Imagenes/N8fuiencontrado.jpg', audio: 'Audios/N8fuiencontrado.mp3' },
        { id: 9, name: 'N9 Que está pasando hermano mio', image: 'Imagenes/N9queestapasandohermanomio.jpg', audio: 'Audios/N9queestapasando.mp3' },
        { id: 10, name: 'N10 Aunque todos te negaren', image: 'Imagenes/N10aunquetodostenegaren.jpg', audio: 'Audios/N10aunquetodostenegaren.mp3' },
        { id: 11, name: 'N11 Cuando David cuidaba las ovejas', image: 'Imagenes/N11cuandodavidcuidabalasovejas.jpg', audio: 'Audios/N11cuandodavid.mp3' },
        { id: 12, name: 'N12 El buen samaritano', image: 'Imagenes/N12elbuensamaritano.jpg', audio: 'Audios/N12elbuensamaritano.mp3' },
        { id: 13, name: 'N13 Como el ciervo ansioso brama', image: 'Imagenes/N13comoelciervoansiosobrama.jpg', audio: 'Audios/N13comoelciervoansiosobrama.mp3' },
        { id: 14, name: 'N14 Dios comprende tus lagrimas', image: 'Imagenes/N14dioscomprendetulagrimas.jpg', audio: 'Audios/N14dioscomprendetuslagrimas.mp3' },
        { id: 15, name: 'N15 Que tiene tu Espíritu', image: 'Imagenes/N15quetienetuespiritu.jpg', audio: 'path/to/audio2.mp3' },
        { id: 16, name: 'N16 Huestes de Israel', image: 'Imagenes/N16huestesdeisrael.jpg', audio: 'path/to/audio2.mp3' },
        { id: 17, name: 'N17 Alla en un lejano monte', image: 'Imagenes/N17allaenunlejanomonte.jpg', audio: 'Audios/N17allaenunlejanomonte.mp3' },
        { id: 18, name: 'N18 Medley 1', image: 'Imagenes/N18medley.jpg', audio: 'path/to/audio2.mp3' },
        { id: 19, name: 'N19 De Cristo cada día', image: 'Imagenes/N19decristocadadia.jpg', audio: 'Audios/N19decristocadadia.mp3' },
        { id: 20, name: 'N20 Dios no se equivoca', image: 'Imagenes/N20diosnoseequivoca.jpg', audio: 'path/to/audio2.mp3' },
        { id: 21, name: 'N21 Cristo yo creo en ti', image: 'Imagenes/N21cristoyocreoenti.jpg', audio: 'Audios/N21cristoyocreoenti.mp3' },
        { id: 22, name: 'N22 Dame fuerza Señor', image: 'Imagenes/N22damefuerzasseñor.jpg', audio: 'Audios/N22damefuerzasseñor.mp3' },
        { id: 23, name: 'N23 Te preguntas por qué', image: 'Imagenes/N23tepreguntasporque.jpg', audio: 'Audios/N23tepreguntasporque.mp3' },
        { id: 24, name: 'N24 De la montaña', image: 'Imagenes/N24delamontaña.jpg', audio: 'Audios/N24delamontaña.mp3' },
        { id: 25, name: 'N25 Se maravillaban', image: 'Imagenes/N25semaravillaban.jpg', audio: 'Audios/N25semaravillaban.mp3' },
        { id: 26, name: 'N26 El mar está tranquilo', image: 'Imagenes/N26elmarestatranquilo.jpg', audio: 'Audios/N26elmarestatranquilo.mp3' },
        { id: 27, name: 'N27 Junto al Señor', image: 'Imagenes/N27juntoalseñor.jpg', audio: 'Audios/N27juntoalseñor.mp3' },
        { id: 28, name: 'N28 Permiteme Señor', image: 'Imagenes/N28permitemeseñor.jpg', audio: 'Audios/N28permitemeseñor.mp3' },
        { id: 29, name: 'N29 La zarza', image: 'Imagenes/N29lazarza.jpg', audio: 'Audios/N29lazarza.mp3' },
        { id: 30, name: 'N30 Cuando miro los cielos', image: 'Imagenes/N30cuandomiroloscielos.jpg', audio: 'Audios/N30cuandomiroloscielos.mp3' },
        { id: 31, name: 'N31 Agua Viva', image: 'Imagenes/N31aguaviva.jpg', audio: 'path/to/audio2.mp3' },
        { id: 32, name: 'N32 Tiernas Canciones', image: 'Imagenes/N32tiernascanciones.jpg', audio: 'path/to/audio2.mp3' },
        { id: 33, name: 'N33 Quisiera relatarles', image: 'Imagenes/N33quisierarelatarles.jpg', audio: 'path/to/audio2.mp3' },
        { id: 34, name: 'N34 Gloria Gloria Aleluya', image: 'Imagenes/N34gloriagloriaaleluya.jpg', audio: 'path/to/audio2.mp3' },
        { id: 35, name: 'N35 En un mar profundo', image: 'Imagenes/N35enunmarprofundo.jpg', audio: 'path/to/audio2.mp3' },
        { id: 36, name: 'N36 Como tu siervo Job', image: 'Imagenes/N36comotusiervojob.jpg', audio: 'path/to/audio2.mp3' },
        { id: 37, name: 'N37 No se por qué', image: 'Imagenes/N37noseporque.jpg', audio: 'path/to/audio2.mp3' },
        { id: 38, name: 'N38 Oh profundo Amor de Cristo', image: 'Imagenes/N38ohprofundoamordecristo.jpg', audio: 'path/to/audio2.mp3' },
        { id: 39, name: 'N39 Te levantaré', image: 'Imagenes/N39televantare.jpg', audio: 'path/to/audio2.mp3' },
        { id: 40, name: 'N40 Ayer le dije adiós', image: 'Imagenes/N40ayerledijeadios.jpg', audio: 'path/to/audio2.mp3' },
        { id: 41, name: 'N41 Medley Predicacion', images: ['Imagenes/N41medleypredicacion.jpg', 'Imagenes/N41parte2medleypredicacion.jpg'], audio: 'path/to/audio2.mp3' },
        { id: 42, name: 'N42 Saliendo del pretorio', image: 'Imagenes/N42saliendodelpretorio.jpg', audio: 'path/to/audio2.mp3' },
        { id: 43, name: 'N43 Hoy dia vi', image: 'Imagenes/N43hoydiavi.jpg', audio: 'path/to/audio2.mp3' },
        { id: 44, name: 'N44 Como quisiera Señor haber vivido', image: 'Imagenes/N44comoquisieraseñor.jpg', audio: 'path/to/audio2.mp3' },
        { id: 45, name: 'N45 Cuando sopla el viento', image: 'Imagenes/N45cuandosoplaelviento.jpg', audio: 'path/to/audio2.mp3' },
        { id: 46, name: 'N46 Aun el gorrion halla casa', image: 'Imagenes/N46cualpajarillovolaba.jpg', audio: 'path/to/audio2.mp3' },
        { id: 47, name: 'N47 Yo no sabía', image: 'Imagenes/N47yonosabia.jpg', audio: 'path/to/audio2.mp3' },
        { id: 48, name: 'N48 Al contemplar tu inmenso Amor', image: 'Imagenes/N48alcontemplartuinmensoamor.jpg', audio: 'path/to/audio2.mp3' },
        { id: 49, name: 'N49 Tu me encontraste a mí', image: 'Imagenes/N49tumeencontrasteami.jpg', audio: 'path/to/audio2.mp3' },
        { id: 50, name: 'N50 Todo anuncia su venida', image: 'Imagenes/N50todoanunciasuvenida.jpg', audio: 'path/to/audio2.mp3' },
        { id: 51, name: 'N51 El Señor es mi luz', image: 'Imagenes/N51elseñoresmiluz.jpg', audio: 'path/to/audio2.mp3' },
        { id: 52, name: 'N52 Oh Gózate', image: 'Imagenes/N52ohgozate.jpg', audio: 'path/to/audio2.mp3' },
        { id: 53, name: 'N53 Señor tu viña es Grande', image: 'Imagenes/N53señortuviñaesgrande.jpg', audio: 'path/to/audio2.mp3' },
        { id: 54, name: 'N54 Pronto los cielos se conmoverán', image: 'Imagenes/N54prontoloscielosseconmoveran.jpg', audio: 'path/to/audio2.mp3' },
        { id: 55, name: 'N55 Hermoso manto real', image: 'Imagenes/N55hermosomantoreal.jpg', audio: 'path/to/audio2.mp3' },
        { id: 56, name: 'N56 Como quisiera ser un mejor Cristiano', image: 'Imagenes/N56comoquisieraserunmejorcristiano.jpg', audio: 'path/to/audio2.mp3' },
        { id: 57, name: 'N57 Ten Confianza', image: 'Imagenes/N57tenconfianza.jpg', audio: 'path/to/audio2.mp3' },
        { id: 58, name: 'N58 Medley 2', image: 'Imagenes/N58medley2.jpg', audio: 'path/to/audio2.mp3' },
        { id: 59, name: 'N59 Vida eterna el prometió', image: 'Imagenes/N59vidaeternaelprometio.jpg', audio: 'path/to/audio2.mp3' },
        { id: 60, name: 'N60 Creer en Dios', image: 'Imagenes/N60creerendios.jpg', audio: 'path/to/audio2.mp3' },
        { id: 61, name: 'N61 Muchas Lágrimas', image: 'Imagenes/N61muchaslagrimas.jpg', audio: 'path/to/audio2.mp3' },
        { id: 62, name: 'N62 Murió por ti, murió por mi', image: 'Imagenes/N62murioportimuriopormi.jpg', audio: 'path/to/audio2.mp3' },
        { id: 63, name: 'N63 Con cruel dolor', image: 'Imagenes/N63concrueldolor.jpg', audio: 'path/to/audio2.mp3' },
        { id: 64, name: 'N64 Las cosas del mundo', image: 'Imagenes/N64lascosasdelmundo.jpg', audio: 'path/to/audio2.mp3' },
        { id: 65, name: 'N65 La samaritana', image: 'Imagenes/N65lasamaritana.jpg', audio: 'path/to/audio2.mp3' },
        { id: 66, name: 'N66 En la inmensidad', image: 'Imagenes/N66enlainmensidad.jpg', audio: 'path/to/audio2.mp3' },
        { id: 67, name: 'N67 Cuando Jesucristo venga', image: 'Imagenes/N67cuandojesucristovenga.jpg', audio: 'path/to/audio2.mp3' },
        { id: 68, name: 'N68 Allá en las playas de Galilea', image: 'Imagenes/N68allaenlasplayas.jpg', audio: 'path/to/audio2.mp3' },
        { id: 69, name: 'N69 Al caminar de tu mano', image: 'Imagenes/N69alcaminar.jpg', audio: 'path/to/audio2.mp3' },
        { id: 70, name: 'N70 Yo anhelo tocar a Cristo', image: 'Imagenes/N70yoanhelotocaracristo.jpg', audio: 'path/to/audio2.mp3' },
        { id: 71, name: 'N71 La Gloria de Jehová', image: 'Imagenes/N71lagloriadejehova.jpg', audio: 'path/to/audio2.mp3' },
        { id: 72, name: 'N72 Del cielo se apercibe', image: 'Imagenes/N72delcieloseapercibe.jpg', audio: 'path/to/audio2.mp3' },
        { id: 73, name: 'N73 Camino a Emaus', image: 'Imagenes/N73caminoaemaus.jpg', audio: 'path/to/audio2.mp3' },
        { id: 82, name: 'N82 Yo solo espero ese dia', image: 'Imagenes/N82yosoloesperoesedia.jpg', audio: 'path/to/audio2.mp3' },
        { id: 88, name: 'N88 Que grande es Dios', image: 'Imagenes/N88quegrandeesdios.jpg', audio: 'path/to/audio2.mp3' },
        // Agrega más archivos multimedia según sea necesario
    ];

    // Construir el índice y mostrar archivos multimedia al cargar la página
    buildIndex(mediaFiles);
    displayMedia(mediaFiles);

    // Agrega el evento de input al campo de búsqueda
    const searchButton = document.querySelector('.btn-outline-secondary');
    searchButton.addEventListener('click', () => {
    searchMedia(searchInput.value);
    });

    function searchMedia(searchTerm) {
        const filteredMedia = mediaFiles.filter(file => file.id.toString().includes(searchTerm));

        displayMedia(filteredMedia);
    }

    function buildIndex(files) {
        files.forEach(file => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.textContent = file.name;
            listItem.addEventListener('click', () => {
                // Al hacer clic en un ítem del índice, mostrar el archivo multimedia
                displayMedia([file]);
            });
            indexList.appendChild(listItem);
        });
    }

    function displayMedia(files) {
        mediaGallery.innerHTML = ''; // Limpiar la galería antes de mostrar nuevos archivos
    
        files.forEach(file => {
            const mediaItem = document.createElement('div');
            mediaItem.classList.add('col-md-4', 'mb-4');
    
            // Mostrar imágenes
            if (file.image) {
                const img = document.createElement('img');
                img.src = file.image;
                img.alt = file.name;
                img.classList.add('img-fluid', 'rounded', 'media-image');
                img.addEventListener('click', () => {
                    // Al hacer clic en la imagen, mostrarla en un área ampliada
                    showEnlargedImage(file.image);
                });
                mediaItem.appendChild(img);
                img.addEventListener('mouseover', () => {
                    img.style.transform = 'scale(1.1)';
                    img.style.transition = 'transform 0.3s ease-in-out';
                });
                img.addEventListener('mouseout', () => {
                    img.style.transform = 'scale(1)';
                    img.style.transition = 'transform 0.3s ease-in-out';
                });
            } else if (file.images && Array.isArray(file.images) && file.images.length > 0) {
                file.images.forEach(imageSrc => {
                    const img = document.createElement('img');
                    img.src = imageSrc;
                    img.alt = file.name;
                    img.classList.add('img-fluid', 'rounded', 'media-image');
                    img.addEventListener('click', () => {
                        // Al hacer clic en la imagen, mostrarla en un área ampliada
                        showEnlargedImage(imageSrc);
                    });
                    mediaItem.appendChild(img);
                    img.addEventListener('mouseover', () => {
                        img.style.transform = 'scale(1.1)';
                        img.style.transition = 'transform 0.3s ease-in-out';
                    });
                    img.addEventListener('mouseout', () => {
                        img.style.transform = 'scale(1)';
                        img.style.transition = 'transform 0.3s ease-in-out';
                    });
                });
            }

            // Mostrar audio (si está presente)
            if (file.audio) {
                const audio = document.createElement('audio');
                audio.src = file.audio;
                audio.controls = true;
                mediaItem.appendChild(audio);
            }

            mediaGallery.appendChild(mediaItem);
        });
    }

    function showEnlargedImage(imageSrc) {
        // Cambia el contenido del contenedor de imagen agrandada
        enlargedImageContainer.innerHTML = '';

        // Crea una nueva imagen agrandada
        const enlargedImg = document.createElement('img');
        enlargedImg.src = imageSrc;
        enlargedImg.alt = 'Enlarged Image';
        enlargedImg.classList.add('enlarged-image');

        // Agrega la nueva imagen al contenedor
        enlargedImageContainer.appendChild(enlargedImg);

        // Muestra el contenedor de imagen agrandada
        enlargedImageContainer.style.display = 'flex';
    }

    // Oculta el contenedor de imagen agrandada al hacer clic fuera de la imagen
    enlargedImageContainer.addEventListener('click', () => {
        enlargedImageContainer.style.display = 'none';
    });

    // Agregar efecto de zoom a las imágenes
    const mediaImages = document.querySelectorAll('.media-image');
    mediaImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.3s ease-in-out';
        });

        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
            image.style.transition = 'transform 0.3s ease-in-out';
        });
    });
});
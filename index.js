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
        { id: 15, name: 'N15 Que tiene tu Espíritu', image: 'Imagenes/N15quetienetuespiritu.jpg', audio: 'Audios/N15quetienetuespiritu.mp3' },
        { id: 16, name: 'N16 Huestes de Israel', image: 'Imagenes/N16huestesdeisrael.jpg', audio: 'Audios/N16huestesdeisrael.mp3' },
        { id: 17, name: 'N17 Alla en un lejano monte', image: 'Imagenes/N17allaenunlejanomonte.jpg', audio: 'Audios/N17allaenunlejanomonte.mp3' },
        { id: 18, name: 'N18 Medley 1', image: 'Imagenes/N18medley.jpg', audio: 'Audios/N18medley1.mp3' },
        { id: 19, name: 'N19 De Cristo cada día', image: 'Imagenes/N19decristocadadia.jpg', audio: 'Audios/N19decristocadadia.mp3' },
        { id: 20, name: 'N20 Dios no se equivoca', image: 'Imagenes/N20diosnoseequivoca.jpg', audio: 'Audios/N20diosnoseequivoca.mp3' },
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
        { id: 31, name: 'N31 Agua Viva', image: 'Imagenes/N31aguaviva.jpg', audio: 'Audios/N31aguaviva.mp3' },
        { id: 32, name: 'N32 Tiernas Canciones', image: 'Imagenes/N32tiernascanciones.jpg', audio: 'Audios/N32tiernascanciones.mp3' },
        { id: 33, name: 'N33 Quisiera relatarles', image: 'Imagenes/N33quisierarelatarles.jpg', audio: 'Audios/N33quisierarelatarles.mp3' },
        { id: 34, name: 'N34 Te Busqué', image: 'Imagenes/N34tebusque.jpg', audio: 'Audios/N34tebusque.mp3' },
        { id: 35, name: 'N35 En un mar profundo', image: 'Imagenes/N35enunmarprofundo.jpg', audio: 'Audios/N35enunmarprofundo.mp3' },
        { id: 36, name: 'N36 Como tu siervo Job', image: 'Imagenes/N36comotusiervojob.jpg', audio: 'Audios/N36comotusiervojob.mp3' },
        { id: 37, name: 'N37 No se por qué', image: 'Imagenes/N37noseporque.jpg', audio: 'Audios/N37noseporque.mp3' },
        { id: 38, name: 'N38 Oh profundo Amor de Cristo', image: 'Imagenes/N38ohprofundoamordecristo.jpg', audio: 'Audios/N38ohprofundoamordecristo.mp3' },
        { id: 39, name: 'N39 Te levantaré', image: 'Imagenes/N39televantare.jpg', audio: 'Audios/N39televantare.mp3' },
        { id: 40, name: 'N40 Ayer le dije adiós', image: 'Imagenes/N40ayerledijeadios.jpg', audio: 'Audios/N40ayerledijeadios.mp3' },
        { id: 41, name: 'N41 Medley Predicacion', images: ['Imagenes/N41medleypredicacion.jpg', 'Imagenes/N41parte2medleypredicacion.jpg'], audio: 'Audios/N41medleypredicacion.mp3' },
        { id: 42, name: 'N42 Saliendo del pretorio', image: 'Imagenes/N42saliendodelpretorio.jpg', audio: 'Audios/N42saliendodelpretorio.mp3' },
        { id: 43, name: 'N43 Hoy dia vi', image: 'Imagenes/N43hoydiavi.jpg', audio: 'Audios/N43hoydiavi.mp3' },
        { id: 44, name: 'N44 Como quisiera Señor haber vivido', image: 'Imagenes/N44comoquisieraseñor.jpg', audio: 'Audios/N44comoquisieraseñor.mp3' },
        { id: 45, name: 'N45 Cuando sopla el viento', image: 'Imagenes/N45cuandosoplaelviento.jpg', audio: 'Audios/N45cuandosoplaelviento.mp3' },
        { id: 46, name: 'N46 Aun el gorrion halla casa', image: 'Imagenes/N46cualpajarillovolaba.jpg', audio: 'Audios/N46cualpajarillo.mp3' },
        { id: 47, name: 'N47 Yo no sabía', image: 'Imagenes/N47yonosabia.jpg', audio: 'Audios/N47yonosabia.mp3' },
        { id: 48, name: 'N48 Al contemplar tu inmenso Amor', image: 'Imagenes/N48alcontemplartuinmensoamor.jpg', audio: 'Audios/N48alcontemplartuinmensoamor.mp3' },
        { id: 49, name: 'N49 Tu me encontraste a mí', image: 'Imagenes/N49tumeencontrasteami.jpg', audio: 'Audios/N49tumeencontrasteami.mp3' },
        { id: 50, name: 'N50 Todo anuncia su venida', image: 'Imagenes/N50todoanunciasuvenida.jpg', audio: 'Audios/N50todoanunciasuvenida.mp3' },
        { id: 51, name: 'N51 El Señor es mi luz', image: 'Imagenes/N51elseñoresmiluz.jpg', audio: 'Audios/N51elseñoresmiluz.mp3' },
        { id: 52, name: 'N52 Oh Gózate', image: 'Imagenes/N52ohgozate.jpg', audio: 'Audios/N52ohgozate.mp3' },
        { id: 53, name: 'N53 Señor tu viña es Grande', image: 'Imagenes/N53señortuviñaesgrande.jpg', audio: 'Audios/N53señortuviñaesgrande.mp3' },
        { id: 54, name: 'N54 Pronto los cielos se conmoverán', image: 'Imagenes/N54prontoloscielosseconmoveran.jpg', audio: 'Audios/N54prontoloscielos.mp3' },
        { id: 55, name: 'N55 Hermoso manto real', image: 'Imagenes/N55hermosomantoreal.jpg', audio: 'Audios/N55hermosomantoreal.mp3' },
        { id: 56, name: 'N56 Como quisiera ser un mejor Cristiano', image: 'Imagenes/N56comoquisieraserunmejorcristiano.jpg', audio: 'Audios/N56comoquisieraserunmejorcristiano.mp3' },
        { id: 57, name: 'N57 Ten Confianza', image: 'Imagenes/N57tenconfianza.jpg', audio: 'Audios/N57tenconfianza.mp3' },
        { id: 58, name: 'N58 Medley 2', image: 'Imagenes/N58medley2.jpg', audio: 'Audios/N58medley2.mp3' },
        { id: 59, name: 'N59 Vida eterna el prometió', image: 'Imagenes/N59vidaeternaelprometio.jpg', audio: 'Audios/N59vidaeternaelprometio.mp3' },
        { id: 60, name: 'N60 Creer en Dios', image: 'Imagenes/N60creerendios.jpg', audio: 'Audios/N60creerendios.mp3' },
        { id: 61, name: 'N61 Muchas Lágrimas', image: 'Imagenes/N61muchaslagrimas.jpg', audio: 'Audios/N61muchaslagrimas.mp3' },
        { id: 62, name: 'N62 Murió por ti, murió por mi', image: 'Imagenes/N62murioportimuriopormi.jpg', audio: 'Audios/N62murioportimuriopormi.mp3' },
        { id: 63, name: 'N63 Con cruel dolor', image: 'Imagenes/N63concrueldolor.jpg', audio: 'Audios/N63concrueldolor.mp3' },
        { id: 64, name: 'N64 Las cosas del mundo', image: 'Imagenes/N64lascosasdelmundo.jpg', audio: 'Audios/N64lascosasdelmundo.mp3' },
        { id: 65, name: 'N65 La samaritana', image: 'Imagenes/N65lasamaritana.jpg', audio: 'Audios/N65lasamaritana.mp3' },
        { id: 66, name: 'N66 En la inmensidad', image: 'Imagenes/N66enlainmensidad.jpg', audio: 'Audios/N66enlainmensidad.mp3' },
        { id: 67, name: 'N67 Cuando Jesucristo venga', image: 'Imagenes/N67cuandojesucristovenga.jpg', audio: 'Audios/N67cuandojesucristovenga.mp3' },
        { id: 68, name: 'N68 Allá en las playas de Galilea', image: 'Imagenes/N68allaenlasplayas.jpg', audio: 'Audios/N68allaenlasplayas.mp3' },
        { id: 69, name: 'N69 Al caminar de tu mano', image: 'Imagenes/N69alcaminar.jpg', audio: 'path/to/N69alcaminar.mp3' },
        { id: 70, name: 'N70 Yo anhelo tocar a Cristo', image: 'Imagenes/N70yoanhelotocaracristo.jpg', audio: 'Audios/N70yoanhelotocaracristo.mp3' },
        { id: 71, name: 'N71 La Gloria de Jehová', image: 'Imagenes/N71lagloriadejehova.jpg', audio: 'Audios/N71lagloriadejehova.mp3' },
        { id: 72, name: 'N72 Del cielo se apercibe', image: 'Imagenes/N72delcieloseapercibe.jpg', audio: 'Audios/N72delcieloseapercibe.mp3' },
        { id: 73, name: 'N73 Camino a Emaus', image: 'Imagenes/N73caminoaemaus.jpg', audio: 'Audios/N73caminoaemaus.mp3' },
        { id: 74, name: 'N74 Han pasado los meses y los años', image: 'Imagenes/N74hanpasadolosmeses.jpg', audio: 'Audios/N74hanpasadolosmesesylosaños.mp3' },
        { id: 75, name: 'N75 Las dos huellas', image: 'Imagenes/N75lasdoshuellas.jpg', audio: 'Audios/N75lasdoshuellas.mp3' },
        { id: 76, name: 'N76 Como podré agradecer', image: 'Imagenes/N76comopodreagradecer.jpg', audio: 'Audios/N76comopodreagradecer.mp3' },
        { id: 77, name: 'N77 Hoy te siento Señor', image: 'Imagenes/N77hoytesientoseñor.jpg', audio: 'Audios/N77hoytesientoseñor.mp3' },
        { id: 78, name: 'N78 En la noche sin fin', image: 'Imagenes/N78enlanochesinfin.jpg', audio: 'Audios/N78enlanochesinfin.mp3' },
        { id: 79, name: 'N79 Tu creaste Señor', image: 'Imagenes/N79tucreasteseñor.jpg', audio: 'Audios/N79tucreasteseñor.mp3' },
        { id: 80, name: 'N80 Canta hermano canta', image: 'Imagenes/N80cantahermanocanta.jpg', audio: 'Audios/N80cantahermanocanta.mp3' },
        { id: 81, name: 'N81 Hoy te quiero alabar Señor', image: 'Imagenes/N81hoytequieroalabarseñor.jpg', audio: 'Audios/N81hoytequieroalabarseñor.mp3' },
        { id: 82, name: 'N82 Yo solo espero ese día', image: 'Imagenes/N82yosoloesperoesedia.jpg', audio: 'Audios/N82yosoloesperoesedia.mp3' },
        { id: 83, name: 'N83 Oh Jovenes venid', image: 'Imagenes/N83ohjovenesvenid.jpg', audio: 'Audios/N83ohjovenesvenid.mp3' },
        { id: 84, name: 'N84 Siempre estuviste aqui', image: 'Imagenes/N84siempreestuvisteaqui.jpg', audio: 'Audios/N84siempreestuvisteaqui.mp3' },
        { id: 85, name: 'N85 Un cielo nuevo', image: 'Imagenes/N85uncielonuevo.jpg', audio: 'Audios/N85uncielonuevoyunatierranueva.mp3' },
        { id: 86, name: 'N86 En esta noche Señor he comprendido', image: 'Imagenes/N86enestanocheseñor.jpg', audio: 'Audios/N86enestanocheseñor.mp3' },
        { id: 87, name: 'N87 Solo al pensar', image: 'Imagenes/N87soloalpensar.jpg', audio: 'Audios/N87soloalpensar.mp3' },
        { id: 88, name: 'N88 Que grande es Dios', image: 'Imagenes/N88quegrandeesdios.jpg', audio: 'Audios/N88quegrandeesdios.mp3' },
        { id: 89, name: 'N89 Hermanos mios vamos adelante', image: 'Imagenes/N89hermanosmios.jpg', audio: 'Audios/N89hermanosmios.mp3' },
        { id: 90, name: 'N90 Amale', image: 'Imagenes/N90amale.jpg', audio: 'Audios/N90amale.mp3' },
        { id: 91, name: 'N91 Caminaba Jesús', image: 'Imagenes/N91caminabajesus.jpg', audio: 'Audios/N91caminabajesus.mp3' },
        { id: 92, name: 'N92 Señor haz de mi vida', image: 'Imagenes/N92señorhazdemivida.jpg', audio: 'Audios/N92señorhazdemivida.mp3' },
        { id: 93, name: 'N93 Donde esta el amor', image: 'Imagenes/N93dondeestaelamor.jpg', audio: 'Audios/N93dondeestaelamor.mp3' },
        { id: 94, name: 'N94 Vagaba yo por el mundo', image: 'Imagenes/N94vagabayoporelmundo.jpg', audio: 'Audios/N94vagabayoporelmundo.mp3' },
        { id: 95, name: 'N95 Un principe tenemos', image: 'Imagenes/N95unprincipetenemos.jpg', audio: 'Audios/N95unprincipetenemos.mp3' },
        { id: 96, name: 'N96 Una bendición', image: 'Imagenes/N96unabendicion.jpg', audio: 'Audios/N96unabendicion.mp3' },
        { id: 97, name: 'N97 Contendamos Jóvenes por la fe', image: 'Imagenes/N97contendamosjovenes.jpg', audio: 'Audios/N97contendamosjovenes.mp3'},
        { id: 98, name: 'N98 No temeré luchar por el Señor', image: 'Imagenes/N98notemere.jpg', audio: 'Audios/N98notemere.mp3'},
        { id: 99, name: 'N99 Ya los campos blanco estan', image: 'Imagenes/N99yaloscamposblancoestan.jpg', audio: 'Audios/N99yaloscamposblancosestan.mp3'},
        { id: 100, name: 'N100 Luces de Gala', image: 'Imagenes/N100lucesdegala.jpg', audio: 'Audios/N100lucesdegala.mp3'},
        { id: 101, name: 'N101 El buen Pastor', image: 'Imagenes/N101elbuenpastor.jpg', audio: 'Audios/N101elbuenpastor.mp3'},
        { id: 102, name: 'N102 Como poder volver', image: 'Imagenes/N102comopodervolver.jpg', audio: 'Audios/N102comopodervolver.mp3'},
        { id: 103, name: 'N103 No dejes pasar el Tiempo', image: 'Imagenes/N103nodejespasareltiempo.jpg', audio: 'Audios/103nodejespasareltiempo.mp3'},
        { id: 104, name: 'N104 Medley 3', images: 'Imagenes/N104medley3.jpg', audio: 'Audios/N104medley3.mp3' },


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

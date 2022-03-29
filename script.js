//MUSICAS
let musicas = [{
        titulo: 'Kayn Solo',
        artista: 'Horizonte',
        src: './musica/Something You Could Never Own (Instrumental) - NEFFEX.mp3',
        img: './imagens/piano.jpg',
    },
    {
        titulo: 'Picerniz',
        artista: 'Aiyessandro',
        src: './musica/Go Down Swinging (Instrumental) - NEFFEX.mp3',
        img: './imagens/vibes.jpg',
    },
    {
        titulo: 'Classic Shocks',
        artista: 'Shockzin',
        src: "./musica/Hustlin' (Instrumental) - NEFFEX.mp3",
        img: './imagens/guitar.jpg',
    },

]


let music = document.querySelector('audio');
let indexMusicas = 0;
let duracaoMusica = document.querySelector('.fim')
renderizarMusicas(indexMusicas);
//LISTA
let image = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');


//EVENTOS
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

music.addEventListener('timeupdate', atualizarBarra)

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusicas--;
    if (indexMusicas < 0) {
        indexMusicas = 2;
    }
    renderizarMusicas(indexMusicas);
})
document.querySelector('.proximo').addEventListener('click', () => {
    indexMusicas++;
    if (indexMusicas > 2) {
        indexMusicas = 0;
    }
    renderizarMusicas(indexMusicas)
})


//BTN PROX-ANT
function renderizarMusicas(index) {
    pausarMusica()
    music.setAttribute('src', musicas[index].src);
    music.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        image.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(music.duration));
    });
}


/*BOTAO-PLAY-PAUSE*/
function tocarMusica() {
    music.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica() {
    music.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';

}

//BARRA
function atualizarBarra() {
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(music.currentTime));
}

function segundosParaMinutos(segundos) {
    let tempoMinuto = Math.floor(segundos / 60);
    let tempoSegundos = segundos % 60;
    if (tempoSegundos < 10) {
        tempoSegundos = '0' + tempoSegundos;
    }
    return tempoMinuto + ':' + tempoSegundos
}
let musicas = [
  {
    titulo: "Não faz isso comigo não",
    artista: "Tz da Coronel",
    src: "songs/TZ da Coronel - Não Faz Isso Comigo Não (Áudio Oficial) Faixa12.mp3",
    img: "images/coroner.jpg",
  },
  {
    titulo: "Predestinado",
    artista: "mc oruam",
    src: "songs/Oruam - Predestinado (prod. EREN, Tkd).mp3",
    img: "images/oruam.jpg",
  },
  {
    titulo: "Bass (Hold on)",
    artista: "Dubdogs",
    src: "songs/Dubdogz  Clubbers - Bass (Hold On) [Copyright Free Music].mp3",
    img: "images/dubdogz.jpg",
  },
];

let musica = document.querySelector("audio");
let indexMusica = 0;
let duracaoMusica = document.querySelector(".end");
let imagem = document.querySelector("img");
let nomeMusica = document.querySelector(".description h2");
let nomeArtista = document.querySelector(".description i");

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

// Eventos
document.querySelector(".button-play").addEventListener("click", tocarMusica);

document.querySelector(".button-pause").addEventListener("click", pausarMusica);

musica.addEventListener("timeupdate", atualizarBarra);

document.querySelector(".back").addEventListener("click", () => {
  indexMusica--;
  if (indexMusica < 0) {
    indexMusica = 2;
  }
  renderizarMusica(indexMusica);
});

document.querySelector(".next").addEventListener("click", () => {
  indexMusica++;
  if (indexMusica > 2) {
    indexMusica = 0;
  }
  renderizarMusica(indexMusica);
});

//funções
function renderizarMusica(index) {
  musica.setAttribute("src", musicas[index].src);
  musica.addEventListener("loadeddata", () => {
    nomeMusica.textContent = musicas[index].titulo;
    nomeArtista.textContent = musicas[index].artista;
    imagem.src = musicas[index].img;
    duracaoMusica.textContent = segundosParaMinutos(
      Math.floor(musica.duration)
    );
  });
}

function tocarMusica() {
  musica.play();
  document.querySelector(".button-pause").style.display = "block";
  document.querySelector(".button-play").style.display = "none";
}
function pausarMusica() {
  musica.pause();
  document.querySelector(".button-pause").style.display = "none";
  document.querySelector(".button-play").style.display = "block";
}
function atualizarBarra() {
  let barra = document.querySelector("progress");
  barra.style.width =
    Math.floor((musica.currentTime / musica.duration) * 100) + "%";
  let tempoDecorrido = document.querySelector(".start");
  tempoDecorrido.textContent = segundosParaMinutos(
    Math.floor(musica.currentTime)
  );
}
function segundosParaMinutos(segundos) {
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if (campoSegundos < 10) {
    campoSegundos = "0" + campoSegundos;
  }

  return campoMinutos + ":" + campoSegundos;
}

let img;
let sound;
let video;
let isImageClicked = false;

function preload() {
  img = loadImage('gb.png'); // Coloque o link ou caminho da sua imagem
  sound = loadSound('pj1.mp3'); // Coloque o link ou caminho do seu áudio
  video = createVideo(['ddr.mp4']); // Coloque o link ou caminho do seu vídeo
}

function setup() {
  createCanvas(800, 600);
  sound.loop();  // Inicia o som em loop
  video.hide();  // Esconde o vídeo no começo
}

function draw() {
  background(255);

  if (!isImageClicked) {
    // Exibe a imagem e o som
    image(img, width / 2 - img.width / 2, height / 2 - img.height / 2);
  } else {
    // Quando a imagem for clicada, esconde a imagem e exibe o vídeo
    video.position(0, 0);  // Posiciona o vídeo no canto superior esquerdo
    video.size(width, height); // Ajusta o tamanho do vídeo
    video.show();  // Exibe o vídeo
  }
}

function mousePressed() {
  // Detecta se a imagem foi clicada
  let imgX = width / 2 - img.width / 2;
  let imgY = height / 2 - img.height / 2;
  let imgW = img.width;
  let imgH = img.height;
  
  if (mouseX > imgX && mouseX < imgX + imgW && mouseY > imgY && mouseY < imgY + imgH) {
    // Se a imagem for clicada, interrompe o som, esconde a imagem e começa o vídeo
    sound.stop();
    isImageClicked = true;
    video.play();  // Inicia o vídeo
  }
}

Como jogar:
Ao abrir o jogo clique na imagem para ver a outra.

Explicação do código:
Pré-carregamento (preload): Carregamos a imagem, o som e o vídeo.


Setup: Criamos a tela com createCanvas(800, 600) e começamos o som com sound.loop(). O vídeo é carregado mas não visível ainda, usando video.hide().


Draw: Na função draw(), exibimos a imagem no centro da tela até que o usuário clique nela.


mousePressed: Verifica se o clique foi dentro da área da imagem. Quando a imagem for clicada, o som é interrompido (sound.stop()), a imagem é substituída pelo vídeo e o vídeo começa a tocar.
Link son; https://pixabay.com/pt/sound-effects/search/despertador/ 

Imagens: minha autoria
Site usado Canvas; https://www.canva.com/ 

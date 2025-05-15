let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(400, 400);
  background("white");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  // Preenche o círculo com a cor aleatória
  fill(cor);

  // Desenha o círculo na posição aleatória
  circle(posicaoHorizontal, posicaoVertical, 50);

  // Movimento horizontal
  if (mouseX < posicaoHorizontal) {
    posicaoHorizontal--; // Move para a esquerda
  }
  if (mouseX > posicaoHorizontal) {
    posicaoHorizontal++; // Move para a direita
  }

  // Movimento vertical
  if (mouseY < posicaoVertical) {
    posicaoVertical--; // Move para cima
  }
  if (mouseY > posicaoVertical) {
    posicaoVertical++; // Move para baixo
  }

  // Se o mouse estiver pressionado, altera a cor
  if (mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}

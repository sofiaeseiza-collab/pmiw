//https://www.youtube.com/watch?v=BfVSs230ycg


let mapa, parado, conejoPa, boton;
let pelota=[], burbuja=[], caminar=[], espalda=[], botonA=[], conejo=[];
let contador=0, tirar=0, aparecer=0, camina=0, caminaEspalda=0, girar=0, conejoCorre=0;
let posX, posY, tamX, tamY, posXboton, posYboton, tamBoton, posXconejo, posYconejo, tamConejo;
let velTirar, velAparecer, velCamina;


function preload () {

  mapa = loadImage("data/fondo.png");
  parado= loadImage ("data/parado.png");
  boton= loadImage ("data/reiniciar-0.png");
  conejoPa= loadImage ("data/conejo-0.png");

  for (let i=0; i<7; i++) {
    pelota [i]= loadImage("data/pelota-"+i+".png");
  }

  for (let i=0; i<12; i++) {

    burbuja [i]= loadImage("data/burbuja-"+i+".png");
  }

  for (let i=0; i<4; i++) {

    caminar [i]= loadImage("data/caminar-"+i+".png");
  }

  for (let i=0; i<4; i++ ) {

    espalda [i]= loadImage("data/espalda-"+i+".png");
  }

  for (let i=0; i<7; i++) {

    botonA [i]= loadImage("data/reiniciar-"+i+".png");
  }

  for (let i=0; i<6; i++) {

    conejo [i]= loadImage("data/conejo-"+i+".png");
  }
}
function setup() {

  createCanvas(800, 600);
  posX= 180;
  posY= 365;
  tamX=32;
  tamY=64;

  posXboton=10;
  posYboton=515;
  tamBoton=80;

  posXconejo= 640;
  posYconejo= 80;
  tamConejo= 64;

  velTirar=10;
  velAparecer=20;
  velCamina= 25;
}


function draw() {

  background (255);
  image (mapa, 0, 0, 800, 600);


  if (detectarBoton(posXboton, posYboton, tamBoton)) {

    if (girar>= botonA.length) {
      girar=0;
    }
    animar(botonA, girar, posXboton, posYboton, tamBoton, tamBoton);
    girar= vel(velTirar, girar);
  } else {
    image (boton, posXboton, posYboton, tamBoton, tamBoton);
  }
  if (mouseIsPressed) {

    if (detectarBoton(posXboton, posYboton, tamBoton)) {
      contador=0;
      posX= 180;
      posY= 365;
      aparecer=0;
      camina=0;
      tirar=0;
      caminaEspalda=0;
      posXconejo= 640;
    }
  }

  contador++;
  if (contador>=0 && contador<=279) {
    estado1();
  }
  if (contador>=279 && contador<= 480) {
    estado2();
  }

  if (contador>=480 && contador<=900) {

    estado3();
    posX++;
  }
  if ( posX>= 590) {

    posX=590;
  };

  if (contador>=900) {

    estado4();
    posY--;
  }

  if (posY<=posYconejo) {
    conejoCorre= vel(velTirar, conejoCorre);
    if (conejoCorre>= conejo.length) {
      conejoCorre=0
    }
    animar (conejo, conejoCorre, posXconejo, posYconejo, tamConejo, tamConejo);
    posXconejo++;
  } else {
    image (conejoPa, posXconejo, posYconejo, tamConejo, tamConejo)
  }
}



function animar (sprite, accion, x, y, tamX, tamY) {

  image (sprite [accion], x, y, tamX, tamY);
}

function vel (num, accion) {

  if ( frameCount% num ===0) {
    accion++
  }
  return accion
}

function estado1 () {
  tirar= vel (velTirar, tirar);
  if (tirar>= pelota.length) {
    tirar=0;
  }
  animar (pelota, tirar, posX, posY, tamX, tamY);
}

function estado2 () {

  image (parado, posX, posY, tamX, tamY);
  aparecer=vel (velAparecer, aparecer);
  animar (burbuja, aparecer, posX, 335, 32, 32);
  if (aparecer>=11) {
    aparecer=0;
  }
}

function estado3 () {

  camina= vel (velCamina, camina);

  if ( camina>= caminar.length) {
    camina=0;
  }

  animar(caminar, camina, posX, posY, tamX, tamY);
}

function estado4 () {

  caminaEspalda= vel (velCamina, caminaEspalda);

  if ( caminaEspalda>= espalda.length) {
    caminaEspalda=0;
  }

  animar(espalda, caminaEspalda, posX, posY, tamX, tamY);
}

function detectarBoton (x, y, tam) {

  if (mouseX>=x && mouseX<=x+tam && mouseY>=y && mouseY<=y+tam) {

    return true;
  } else {
    return false;
  }
}

//Sofia Eseiza - Valentina Cappella - El regreso de Anaconda
//https://www.youtube.com/watch?v=NJbOCD0tpxI

let imagenes = [];
let texto = [];
let posXbotI, posYbotI, tamXbotI, tamYbotI, posXbot1, posYbot1, tamXbot1, tamYbot1, posXbot2, posYbot2, tamXbot2, tamYbot2, posXbot3, posYbot3;
let pantallas=0
  let miFuente
  let tamSig, sigR, sigG, sigB;
  let decision1=0;
  let imgInicio, imgTitulo, imgCreditos, horacio, sofia, valen, pmiw;
  let fondo, hojasBoton, fondo2, agua, shot;
  let sonando = false;
  let boton;
  let contador=0
  let tamXtitulo, tamYtitulo,tamXtituloF, tamYtituloF;

function preload() {



  for (let i = 0; i < 22; i++) {

    imagenes[i]= loadImage ("data/img"+i+".jpeg")
  }

  for (let i = 0; i < 22; i++) {
    texto[i] = loadStrings("data/texto/P" + i+ ".txt");
  }

  miFuente = loadFont("data/LibreBaskerville-Regular.ttf");
  
  imgInicio= loadImage ("data/inicial.jpeg");
  imgTitulo= loadImage ("data/titulo.png");
  boton= loadImage ("data/boton.png");
  horacio= loadImage ("data/hq.png");
  sofia= loadImage ("data/se.png");
  valen= loadImage ("data/vc.png");
  pmiw= loadImage ("data/pm.png");
  
  fondo = loadSound("data/selva.mp3");
  hojasBoton= loadSound ("data/hojas.mp3");

}

function setup() {
  createCanvas(800, 450);

  tamSig=30

  posXbotI=236;
  posYbotI=350;
  tamXbotI= 324;
  tamYbotI= 50;

  posXbot1=560;
  posYbot1=365;
  tamXbot1= 210;
  tamYbot1=60;

  posXbot2=144;
  posYbot2=376;
  tamXbot2=234;
  tamYbot2=45;

  posXbot3=477;
  posYbot3=376;
  
  tamXtitulo=700;
  tamYtitulo=160;
  tamXtituloF=350;
  tamYtituloF=80;
}


function inicio() {

    if (contador>0 && contador<70) {

    tamXtitulo =map(contador, 0, 70, 0, 700);
     tamYtitulo =map(contador, 0, 70, 0, 160);
  };
  push();
  imageMode(CENTER, CENTER);
  image (imgInicio, 400, 225, 800,450);
  image (imgTitulo, 390, 150, tamXtitulo, tamYtitulo);

pop();
 mensaje( 251, 201, 71, tamSig, 398, 386, "> Iniciar <");
}

function pantalla(numImg) {

  image (imagenes[numImg], 0, 0, 800, 450);
  fill(0, 0, 0, 150);
  rect(0, 0, 800, 100);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(17);
  textFont (miFuente);
  text (texto[numImg], 50, 0, 700, 100);
}

function mensaje (R, G, B, tamTxt, posX, posY, texto) {

  textAlign(CENTER);
  fill(R, G, B);
  textSize(tamTxt);
  text(texto, posX, posY);
}

function creditos(){

      if (contador>0 && contador<70) {

    tamXtituloF =map(contador, 0, 70, 0, 350);
     tamYtituloF =map(contador, 0, 70, 0, 80);
  };
  push();
  imageMode(CENTER, CENTER);
  image (imgInicio, 400, 225, 800,450);
  image (imgTitulo, 170, 50, tamXtituloF, tamYtituloF);
    image (horacio, 170, 110, tamXtituloF, tamYtituloF);
       image (sofia, 170, 180, tamXtituloF, tamYtituloF);
      image (valen, 170, 230, tamXtituloF, tamYtituloF);
      image (pmiw, 170, 280, tamXtituloF, tamYtituloF);
pop();
 mensaje( 251, 201, 71, tamSig, 398, 375, "> Reiniciar <");
};


function mousePressed () {

  if (pantallas===0) {

    if (detectarBoton(posXbotI, posYbotI, tamXbotI, tamYbotI)) {

      pantallas=1;
      
      if (!sonando) {
        userStartAudio();
    fondo.loop();
    sonando=true;
      }
    }
  } else if (pantallas===1) {


    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=2;
    }
  } else if (pantallas===2) {


    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=3;
    }
  } else if (pantallas===3) {

    if (detectarBoton(posXbot2, posYbot2, tamXbot2, tamYbot2)) {

      pantallas=4;
    } else  if (detectarBoton(posXbot3, posYbot3, tamXbot2, tamYbot2)) {

      pantallas=5;
    }
  } else if (pantallas===4) {

    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=5;
    }
  }else if (pantallas===5) {

    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=6;
    }
  } else if (pantallas===6) {

    if (detectarBoton(posXbot2, posYbot2, tamXbot2, tamYbot2)) {

      pantallas=8;
    } else  if (detectarBoton(posXbot3, posYbot3, tamXbot2, tamYbot2)) {

      pantallas=7;
    }
  }else if (pantallas===7) {

    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=8;
    }
  }else if (pantallas===8) {

    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=9;
    }
  }else if (pantallas===9) {

    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=10;
    }
  }else if (pantallas===10) {

    if (detectarBoton(posXbot2, posYbot2, tamXbot2, tamYbot2)) {

      pantallas=12;
      decision1=2;
    }else  if (detectarBoton(posXbot3, posYbot3, tamXbot2, tamYbot2)) {

      pantallas=11;
      decision1=1;
    }
  }else if (pantallas===11) {

    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=13;
    }
  }else if (pantallas===12) {

    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=13;
    }
  }else if (pantallas===13) {

    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=14;
    }
  }else if (pantallas===14) {

  if (detectarBoton(posXbot2, posYbot2, tamXbot2, tamYbot2)) {

    pantallas=18;

  }else if (detectarBoton(posXbot3, posYbot3, tamXbot2, tamYbot2)) {


    if (decision1===1) {
      pantallas=15;

    }else if (decision1===2) {
      pantallas=20;
    }
  }
}
  
  //final 1
  else if (pantallas===15) {

    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=16;
    }
  }else if (pantallas===16) {

    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=17;
    }
  }
  
  //final 2
  else if (pantallas===18){  
    
    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=19;
    }
  } 
  
  //final 3
   else if (pantallas===20){  
    
    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=21;
    }
  }  else if (pantallas===21){  
    
    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=22;
    }
  } 
  
  //creditos
  else if (pantallas===17 || pantallas===19 || pantallas===22) {

    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=23;
      contador=0;
    }
  }else if (pantallas===23){
  
   if (detectarBoton(posXbotI, posYbotI, tamXbotI, tamYbotI)) {

      pantallas=0;
contador=0;
   }
  }
  
  
  
}

function detectarBoton (posX, posY, tamX, tamY) {

  if (mouseX>posX && mouseX<posX+tamX && mouseY>posY && mouseY<posY+tamY) {

    hojasBoton.play();
    return true

    
  }
}

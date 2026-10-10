function draw() {
  
  contador++;
textFont (miFuente);
  
if(pantallas===0){
  

inicio();

}

if(pantallas===1){


pantalla(0);

mensaje( 44, 38, 17,tamSig, 659, 395, "Siguiente");

}
if(pantallas===2){

pantalla(1);

mensaje( 44, 38, 17,tamSig, 659, 395, "Siguiente");

}
if(pantallas===3){

pantalla(2);


mensaje(44, 38, 17, 17, 262, 390, "Esperar a los tucanes");

mensaje(44, 38, 17, 17, 536, 390, "Actuar ahora");

}
if(pantallas===4){

pantalla(3);

mensaje( 44, 38, 17,tamSig, 659, 395, "Siguiente");

}
if(pantallas===5){

pantalla(4);

mensaje(44, 38, 17, tamSig, 659, 395, "Siguiente");

}
if(pantallas===6){

pantalla(5);

mensaje( 44, 38, 17,17, 262, 390, "Seguir con el plan");

mensaje( 44, 38, 17,17, 536, 390, "Detenerse para descansar");

}
if(pantallas===7){

pantalla(6);

mensaje(44, 38, 17, tamSig, 659, 395, "Siguiente");

}
if(pantallas===8){

pantalla(7);

mensaje( 44, 38, 17,tamSig, 659, 395, "Siguiente");

}
if(pantallas===9){

pantalla(8);

image (boton, 485, 300, 315,150);
mensaje( 44, 38, 17,tamSig, 659, 395, "Siguiente");

}
if(pantallas===10){

pantalla(9);

mensaje( 44, 38, 17,15, 260, 380, "Dejar que las vívoras");
mensaje( 44, 38, 17,15, 260, 400, "lo ataquen");

mensaje( 44, 38, 17,17, 540, 390, "Defender al mensú");

}
if(pantallas===11){

pantalla(10);

mensaje( 44, 38, 17,tamSig, 650, 392, "Siguiente");

}
if(pantallas===12){

pantalla(11);

mensaje( 44, 38, 17,tamSig, 659, 395, "Siguiente");

}
if(pantallas===13){

pantalla(12);

mensaje( 44, 38, 17,tamSig, 659, 395, "Siguiente");
}
if(pantallas===14){

pantalla(13);

mensaje( 44, 38, 17,17, 262, 390, "Abandonar la balsa");

mensaje( 44, 38, 17,17, 536, 390, "Permanecer en la balsa");
}
//final 1
if(pantallas===15){

pantalla(14);

mensaje(44, 38, 17, tamSig, 635, 395, "Siguiente");
}
if(pantallas===16){

pantalla(15);

mensaje( 44, 38, 17,tamSig, 630, 395, "Siguiente");
}
if(pantallas===17){

pantalla(16);

mensaje( 44, 38, 17,tamSig, 620, 395, "FIN");
}

//final 2
if(pantallas===18){

pantalla(17);

mensaje( 44, 38, 17,tamSig, 630, 395, "Siguiente");
}
if(pantallas===19){

pantalla(18);

mensaje(44, 38, 17, tamSig, 620, 392, "FIN");
}

//final 3
if(pantallas===20){

pantalla(19);

mensaje( 44, 38, 17,tamSig, 625, 395, "Siguiente");
}
if(pantallas===21){

pantalla(20);

mensaje(44, 38, 17, tamSig, 625, 395, "Siguiente");
}
if(pantallas===22){

pantalla(21);

mensaje( 44, 38, 17,tamSig, 620, 395, "FIN");
}



if(pantallas===23){
  
creditos();

}

}

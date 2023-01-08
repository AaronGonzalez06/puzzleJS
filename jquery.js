$(document).ready(function(){
    //console.log("jquery cargao");

let puzzle =[[0,0,0],
             [0,0,0],
             [0,0,0]];

let arrAux = [];
let contador = 0;

while(arrAux.length != 8){
let pieza = Math.floor((Math.random() * (8 - 1 + 1)) + 1);
if(!arrAux.includes(pieza)){
  arrAux.push(pieza);
}
}
//console.log(arrAux);
let z = 0
for(let x = 0; x<puzzle.length;x++){
  for(let y = 0; y<puzzle.length;y++){
      puzzle[x][y] = arrAux[z];
      let clase = ".img" + (z +1);
      if(clase == '.img9'){
        $(clase).attr("src","./img/0.jpg");
        puzzle[x][y] =0;
      }else{
        $(clase).attr("src","./img/"+arrAux[z]+".jpg");
      }
      z++;
  }
}

console.log(puzzle);
$("div").click(function(){
  //alert($("img",this).attr('src'));
  let posicion = $(this).attr('class').slice(4);
  //posicion.slice(4);
  //console.log("X: "+posicion[0]+ " Y: " + posicion[1] + " y su valor que tiene dentro es : " + puzzle[posicion[0]][posicion[1]]);
  let abajo =0;
  let arriba = 0;
  if((parseInt(posicion[0]) + 1) > 2){
     abajoDos = 2;
     abajo = puzzle[abajoDos][posicion[1]];
  }else{
     abajo = puzzle[parseInt(posicion[0]) + 1][posicion[1]];
  }
  if((parseInt(posicion[0]) - 1) < 0){
     arribaCero = 0;
     arriba = puzzle[arribaCero][posicion[1]];
  }else{
     arriba = puzzle[parseInt(posicion[0]) - 1][posicion[1]];
  }
  //console.log("pieza a la izquierda es :" + puzzle[posicion[0]][posicion[1] - 1]);
  //console.log("pieza a la derecha es :" + puzzle[posicion[0]][parseInt(posicion[1])  + 1]);
  //console.log("pieza a la arriba es :" + puzzle[arriba][posicion[1]]);
  //console.log("pieza a la abajo es :" + puzzle[abajo][posicion[1]]);
  //izquierda
  let derecha = puzzle[posicion[0]][parseInt(posicion[1]) + 1];
  let izquierda = puzzle[posicion[0]][parseInt(posicion[1]) - 1];
  //let arriba = puzzle[parseInt(posicion[0]) - 1][posicion[1]];
  //let abajo = puzzle[parseInt(posicion[0]) + 1][posicion[1]];
  //console.log(puzzle[3][1]);
  if( derecha == 0){
    //antes de nada guardamos nuestro numero
    let auxNum = puzzle[posicion[0]][posicion[1]];
    let urlActual = $("img",this).attr('src');
    //cambiamos nuesta img actual por la de cero
    $("img",this).attr("src","./img/0.jpg");
    puzzle[posicion[0]][posicion[1]] = 0;
    //poner en la de cero la actual que señale
    let etiquieta =".caja"+ posicion[0] + (parseInt(posicion[1]) + 1) + " img";
    console.log("etiqueta a pner nueva: "+ etiquieta);
    $(etiquieta).attr("src",urlActual);
    puzzle[posicion[0]][parseInt(posicion[1]) + 1] = auxNum;

    console.log(puzzle);
    contador++;
    $('#contador').text(contador);
  } else if( izquierda == 0){
    //antes de nada guardamos nuestro numero
    let auxNum = puzzle[posicion[0]][posicion[1]];
    let urlActual = $("img",this).attr('src');
    //cambiamos nuesta img actual por la de cero
    $("img",this).attr("src","./img/0.jpg");
    puzzle[posicion[0]][posicion[1]] = 0;
    //poner en la de cero la actual que señale
    let etiquieta =".caja"+ posicion[0] + (parseInt(posicion[1]) - 1) + " img";
    console.log("etiqueta a pner nueva: "+ etiquieta);
    $(etiquieta).attr("src",urlActual);
    puzzle[posicion[0]][parseInt(posicion[1]) - 1] = auxNum;

    console.log(puzzle);
    contador++;
    $('#contador').text(contador);
  } else if (abajo == 0){
    //antes de nada guardamos nuestro numero
    let auxNum = puzzle[posicion[0]][posicion[1]];
    let urlActual = $("img",this).attr('src');
    //cambiamos nuesta img actual por la de cero
    $("img",this).attr("src","./img/0.jpg");
    puzzle[posicion[0]][posicion[1]] = 0;
    //poner en la de cero la actual que señale
    let etiquieta =".caja"+ (parseInt(posicion[0]) + 1) + posicion[1] + " img";
    console.log("etiqueta a pner nueva: "+ etiquieta);
    $(etiquieta).attr("src",urlActual);
    puzzle[(parseInt(posicion[0]) + 1)][posicion[1]] = auxNum;

    console.log(puzzle);
    contador++;
    $('#contador').text(contador);
  } else if (arriba == 0){
    //antes de nada guardamos nuestro numero
    let auxNum = puzzle[posicion[0]][posicion[1]];
    let urlActual = $("img",this).attr('src');
    //cambiamos nuesta img actual por la de cero
    $("img",this).attr("src","./img/0.jpg");
    puzzle[posicion[0]][posicion[1]] = 0;
    //poner en la de cero la actual que señale
    let etiquieta =".caja"+ (parseInt(posicion[0]) - 1) + posicion[1] + " img";
    console.log("etiqueta a pner nueva: "+ etiquieta);
    $(etiquieta).attr("src",urlActual);
    puzzle[(parseInt(posicion[0]) - 1)][posicion[1]] = auxNum;

    console.log(puzzle);
    contador++;
    $('#contador').text(contador);
  }


});


})
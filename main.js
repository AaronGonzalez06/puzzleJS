/*let puzzle =[[0,0,0],
[0,0,0],
[0,0,0]];

let arrAux = [];

while(arrAux.length != 9){
let pieza = Math.floor((Math.random() * (9 - 1 + 1)) + 1);
if(!arrAux.includes(pieza)){
arrAux.push(pieza);
}
}
console.log(arrAux);
let z = 0
for(let x = 0; x<puzzle.length;x++){
for(let y = 0; y<puzzle.length;y++){
puzzle[x][y] = arrAux[z];
let clase = ".img" + (z +1);
console.log(clase);
//$(clase).attr("src","./img/"+(z+1)+".jpg");
z++;
}
}

document.getElementsByClassName("img1").src="image2.jpg";
console.log(puzzle);*/
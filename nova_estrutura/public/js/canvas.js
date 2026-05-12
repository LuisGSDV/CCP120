let canvasID = document.getElementById("canvas");
let canvas = canvasID.getContext('2d');

canvas.beginPath();
canvas.lineWidth = 1;
canvas.fillStyle = "#8FFDD4";
canvas.fillRect(0, 0, 300, 180);
canvas.closePath();

// chão
canvas.beginPath();
canvas.fillStyle = "#727272";
canvas.fillRect(0, 180, 300, 120);
canvas.closePath();

// casa
canvas.beginPath();
canvas.fillStyle = "#86471A";
canvas.fillRect(120, 120, 60, 60);
canvas.closePath();

// sol
canvas.beginPath();
canvas.fillStyle = "#FCFF2D";
canvas.arc(240, 60, 30, 1.5*Math.PI, 3.5*Math.PI);
canvas.fill();
canvas.closePath();

// telhado
canvas.beginPath();
canvas.fillStyle = "#F5694D";
canvas.moveTo(150, 90);
canvas.lineTo(120,120);
canvas.lineTo(180,120);
canvas.lineTo(150,90);
canvas.fill();
canvas.closePath();

// curva 1 rio
canvas.beginPath();
canvas.fillStyle = "#458EFC";
canvas.arc(0, 180, 42, 1.5*Math.PI, 3.5*Math.PI);
canvas.fill();
canvas.closePath();

// vertical rio
canvas.beginPath();
canvas.fillStyle = "#458EFC";
canvas.fillRect(0, 180, 42, 120);
canvas.closePath();

// horizontal rio
canvas.beginPath();
canvas.fillStyle = "#458EFC";
canvas.fillRect(0, 252, 120, 120);
canvas.closePath();

// curva 2 rio
canvas.beginPath();
canvas.fillStyle = "#458EFC";
canvas.arc(120, 300, 48, 1.5*Math.PI, 3.5*Math.PI);
canvas.fill();
canvas.closePath();

// janela 1
canvas.beginPath();
canvas.fillStyle = "#47BDFD";
canvas.fillRect(126, 135, 15, 15);
canvas.closePath();

// janela 2
canvas.beginPath();
canvas.fillStyle = "#47BDFD";
canvas.fillRect(159, 135, 15, 15);
canvas.closePath();

// porta
canvas.beginPath();
canvas.fillStyle = "#624423";
canvas.fillRect(141, 150, 18, 30);
canvas.closePath();

// arvore 1 - tronco
canvas.beginPath();
canvas.fillStyle = "#86471A";
canvas.fillRect(42, 138, 12, 42);
canvas.closePath();

// arvore 1 - folhas
canvas.beginPath();
canvas.fillStyle = "#318A26";
canvas.arc(48, 123, 24, 1.5*Math.PI, 3.5*Math.PI);
canvas.fill();
canvas.closePath();

// arvore 2 - tronco
canvas.beginPath();
canvas.fillStyle = "#86471A";
canvas.fillRect(258, 177, 12, 42);
canvas.closePath();

// arvore 2 - folhas
canvas.beginPath();
canvas.fillStyle = "#318A26";
canvas.arc(264, 162, 24, 1.5*Math.PI, 3.5*Math.PI);
canvas.fill();
canvas.closePath();

// ---------------------------------------------------------

function quadrado(cor, x, y, tmn){
    ctx2.beginPath();
    ctx2.fillStyle = cor;
    ctx2.fillRect(x, y, tmn, tmn);
    ctx2.closePath();
}

function bola(x, y, cor, d, borda){
    ctx2.beginPath();
    ctx2.arc(x, y, d, 1.5*Math.PI, 3.5*Math.PI);
    ctx2.strokeStyle = borda;
    ctx2.fillStyle = cor;
    ctx2.fill();
    ctx2.stroke();
    ctx2.closePath();
}

function semicirculo(x, y, r, c ,f, cor){
    ctx2.beginPath();
    ctx2.arc(x, y, r, c*Math.PI , f*Math.PI);
    ctx2.strokeStyle = cor;
    ctx2.stroke();
    ctx2.closePath();
}

canvas2 = document.getElementById('canvas2');
ctx2 = canvas2.getContext('2d');

// fundo branco

ctx2.beginPath();
ctx2.fillStyle = "white";
ctx2.fillRect(0, 0, 300, 300);
ctx2.closePath();

semicirculo(150, 150, 72, 1.75, 2, 'green');
semicirculo(150, 150, 72, 3, 3.25, 'green');
semicirculo(150, 150, 48, 3, 2, 'green');

semicirculo(150, 300, 72, 3, 1.5, 'green');
semicirculo(150, 300, 60, 1.5, 2, 'green');

quadrado("blue", 0, 0, 60);
quadrado("red", 240, 0, 60);

// linhas q azul
ctx2.beginPath();
ctx2.strokeStyle = "blue";
ctx2.moveTo(60, 60);
ctx2.lineTo(150, 150);
ctx2.stroke();
ctx2.closePath();

// linhas q vermelho
ctx2.beginPath();
ctx2.strokeStyle = "red";
ctx2.moveTo(240, 60);
ctx2.lineTo(150, 150);
ctx2.stroke();
ctx2.closePath();

// retangulo azul claro
ctx2.beginPath();
ctx2.fillStyle = "#00FFFF";
ctx2.fillRect(0, 120, 30, 60);
ctx2.closePath();

quadrado("#00FFFF", 270, 135, 30);

// linha verde
ctx2.beginPath();
ctx2.strokeStyle = "green";
ctx2.moveTo(0, 150);
ctx2.lineTo(300,150);
ctx2.stroke();
ctx2.closePath();

// q vermelho 2
quadrado("red", 102, 150, 48);

// linha cinza vertical
ctx2.beginPath();
ctx2.strokeStyle = "grey";
ctx2.moveTo(150, 150);
ctx2.lineTo(150, 300);
ctx2.stroke();
ctx2.closePath();

bola(75, 225, "yellow", 15, "green");
bola(225, 225, "yellow", 15, "green");
bola(150, 126, "#00FFFF", 12, "blue");
bola(150, 300, "#00FFFF", 42, "green");

quadrado("yellow", 0, 240, 30);
quadrado("yellow", 0, 270, 30);
quadrado("yellow", 30, 270, 30);

quadrado("black", 270, 240, 30);
quadrado("black", 270, 270, 30);
quadrado("black", 240, 270, 30);

// borda preta
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = "black";
ctx2.moveTo(0, 0);
ctx2.lineTo(0, 300);
ctx2.lineTo(300, 300);
ctx2.lineTo(300, 0);
ctx2.lineTo(0, 0);
ctx2.stroke();
ctx2.closePath();

// escreve texto
ctx2.beginPath();
ctx2.textAlign = 'center';
ctx2.font = "18px Arial";
ctx2.fillText("canvas2", canvas2.width / 2, 42);
ctx2.closePath();
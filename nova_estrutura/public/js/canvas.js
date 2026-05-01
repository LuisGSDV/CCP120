let canvasID = document.getElementById("canvas");
let canvas = canvasID.getContext('2d');

canvas.beginPath();
canvas.lineWidth = 1;
canvas.fillStyle = "#8FFDD4";
canvas.fillRect(0, 0, 500, 300);
canvas.lineWidth = 1;
canvas.closePath();

//chão
canvas.beginPath();
canvas.fillStyle = "#727272";
canvas.fillRect(0, 300, 500, 200);
canvas.lineWidth = 1;
canvas.closePath();

// casa
canvas.beginPath();
canvas.fillStyle = "#86471A";
canvas.fillRect(200, 200,100, 100);
canvas.closePath();

//sol
canvas.beginPath();
canvas.fillStyle = "#FCFF2D";
canvas.arc(400, 100, 50, 1.5*Math.PI, 3.5*Math.PI);
canvas.fill();
canvas.closePath();

// telhado
canvas.beginPath();
canvas.fillStyle = "#F5694D";
canvas.moveTo(250, 150);
canvas.lineTo(200,200);
canvas.lineTo(300,200);
canvas.lineTo(250,150);
canvas.fill();
canvas.closePath();
//curva 1 rio
canvas.beginPath();
canvas.fillStyle = "#458EFC"
canvas.arc(0, 300, 70, 1.5*Math.PI, 3.5*Math.PI);
canvas.fill();
canvas.closePath();

// vertical rio

canvas.beginPath();
canvas.fillStyle = "#458EFC";
canvas.fillRect(0, 300, 70, 200);
canvas.lineWidth = 1;
canvas.closePath();

// horizontal rio

canvas.beginPath();
canvas.fillStyle = "#458EFC";
canvas.fillRect(0, 420, 200, 200);
canvas.lineWidth = 1;
canvas.closePath();

// curva 2 rio

//curva 1 rio
canvas.beginPath();
canvas.fillStyle = "#458EFC"
canvas.arc(200, 500, 80, 1.5*Math.PI, 3.5*Math.PI);
canvas.fill();
canvas.closePath();

//janela 1

canvas.beginPath();
canvas.lineWidth = 1;
canvas.fillStyle = "#47BDFD"
canvas.fillRect(210, 225, 25, 25)
canvas.closePath();

//janela 2

canvas.beginPath();
canvas.lineWidth = 1;
canvas.fillStyle = "#47BDFD"
canvas.fillRect(300 - 35, 225, 25, 25)
canvas.closePath();

//porta

canvas.beginPath();
canvas.fillStyle = "#624423"
canvas.lineWidth = 1;
canvas.fillRect(210 + 25, 250, 30, 50)

// arvore 1 - tronco

canvas.beginPath();
canvas.fillStyle = "#86471A";
canvas.fillRect(70, 230, 20, 70)
canvas.closePath();

// arvore 1 - folhas

canvas.beginPath();
canvas.fillStyle = "#318A26"
canvas.arc(80, 205, 40, 1.5*Math.PI, 3.5*Math.PI);
canvas.fill();
canvas.closePath();

// arvore 2 - tronco

canvas.beginPath();
canvas.fillStyle = "#86471A";
canvas.fillRect(430, 295, 20, 70);
canvas.closePath();

// arvore 2 - planta

canvas.beginPath();
canvas.fillStyle = "#318A26";
canvas.arc(440, 270, 40, 1.5*Math.PI, 3.5*Math.PI);
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
    ctx2.arc(x, y, d, 1.5*Math.PI, 3.5*Math.PI)
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

semicirculo(250, 250, 120, 1.75, 2, 'green');
semicirculo(250, 250, 120, 3, 3.25, 'green');
semicirculo(250, 250, 80, 3, 2, 'green');

semicirculo(250, 500, 120, 3, 1.5, 'green');
semicirculo(250, 500, 100, 1.5, 2, 'green');

quadrado("blue", 0, 0, 100)
quadrado("red", 500-100, 0, 100)

// linhas q azul

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = "blue";
ctx2.moveTo(100, 100);
ctx2.lineTo(250, 250);
ctx2.stroke();
ctx2.closePath();

// linhas q vermelho

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = "red";
ctx2.moveTo(400, 100);
ctx2.lineTo(250, 250);
ctx2.stroke();
ctx2.closePath();

//retangulo azul claro
ctx2.beginPath();
ctx2.fillStyle = "#00FFFF"
ctx2.fillRect(0, 200, 50, 100)
ctx2.closePath();

quadrado("#00FFFF", 500 - 50, 250 -25, 50)


// linha verde

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = "green";
ctx2.moveTo(0, 250);
ctx2.lineTo(500,250);
ctx2.stroke();
ctx2.closePath();

// q vermelho 2

quadrado("red", 250 - 80, 250, 80)

// linha cinz ahorizontal

ctx2.beginPath;
ctx2.strokeStyle = "grey";
ctx2.moveTo(250, 250);
ctx2.lineTo(250, 500);
ctx2.stroke();
ctx2.closePath();

bola(125, 375, "yellow", 25, "green")
bola(375, 375, "yellow", 25, "green")
bola(250, 210, "#00FFFF", 20, "blue")
bola(250, 500, "#00FFFF", 70, "green")

quadrado("yellow", 0, 400, 50);
quadrado("yellow", 0, 450, 50);
quadrado("yellow", 50, 450, 50);

quadrado("black", 500 - 50, 400, 50);
quadrado("black", 500 - 50, 450, 50);
quadrado("black", 500 - 100, 450, 50);

//borda preta

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = "black";
ctx2.moveTo(0, 0);
ctx2.lineTo(0, 500);
ctx2.lineTo(500, 500);
ctx2.lineTo(500, 0);
ctx2.lineTo(0, 0);
ctx2.stroke();
ctx2.closePath();

// escreve texto

ctx2.beginPath();
ctx2.textAlign = 'center';
ctx2.font = "30px Arial";
ctx2.fillText("canvas2", canvas2.width / 2, 70);
ctx2.closePath();

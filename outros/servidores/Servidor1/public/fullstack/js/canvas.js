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


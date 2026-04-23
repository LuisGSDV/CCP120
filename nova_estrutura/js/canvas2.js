function quadrado(cor, x, y, tmn){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, tmn, tmn);
    ctx.closePath();
}

function bola(x, y, cor, d, borda){
    ctx.beginPath();
    ctx.arc(x, y, d, 1.5*Math.PI, 3.5*Math.PI)
    ctx.strokeStyle = borda;
    ctx.fillStyle = cor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function semicirculo(x, y, r, c ,f, cor){
    ctx.beginPath();
    ctx.arc(x, y, r, c*Math.PI , f*Math.PI);
    ctx.strokeStyle = cor;
    ctx.stroke();
    ctx.closePath();
}

    canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

semicirculo(250, 250, 120, 1.75, 2, 'green');
semicirculo(250, 250, 120, 3, 3.25, 'green');
semicirculo(250, 250, 80, 3, 2, 'green');

semicirculo(250, 500, 120, 3, 1.5, 'green');
semicirculo(250, 500, 100, 1.5, 2, 'green');

quadrado("blue", 0, 0, 100)
quadrado("red", 500-100, 0, 100)

// linhas q azul

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = "blue";
ctx.moveTo(100, 100);
ctx.lineTo(250, 250);
ctx.stroke();
ctx.closePath();

// linhas q vermelho

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = "red";
ctx.moveTo(400, 100);
ctx.lineTo(250, 250);
ctx.stroke();
ctx.closePath();

//retangulo azul claro
ctx.beginPath();
ctx.fillStyle = "#00FFFF"
ctx.fillRect(0, 200, 50, 100)
ctx.closePath();

quadrado("#00FFFF", 500 - 50, 250 -25, 50)


// linha verde

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = "green";
ctx.moveTo(0, 250);
ctx.lineTo(500,250);
ctx.stroke();
ctx.closePath();

// q vermelho 2

quadrado("red", 250 - 80, 250, 80)

// linha cinz ahorizontal

ctx.beginPath;
ctx.strokeStyle = "grey";
ctx.moveTo(250, 250);
ctx.lineTo(250, 500);
ctx.stroke();
ctx.closePath();

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

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.moveTo(0, 0);
ctx.lineTo(0, 500);
ctx.lineTo(500, 500);
ctx.lineTo(500, 0);
ctx.lineTo(0, 0);
ctx.stroke();
ctx.closePath();

// escreve texto

ctx.beginPath();
ctx.textAlign = 'center';
ctx.font = "30px Arial";
ctx.fillText("Canvas", canvas.width / 2, 70);
ctx.closePath();

canvas = document.getElementById('canva');
ctx = canvas.getContext('2d');
let aux = 1;

let retangulo = {
    x: 0,
    y: 0,
    altura: 50,
    largura: 50,
    cor: "blue",
    desenha: function () {
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }
 }

let circulo = {
    x: 0,
    y: 200,
    raio: 50,
    cor: "blue",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.arc(this.x,this.y,this.raio,0,2*Math.PI);
        ctx.fill()
        ctx.closePath();
    }
};

let bola = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'bola.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 1.5*this.raio);
        ctx.closePath();
    }
};


function animacao(){
    ctx.clearRect(0,0,500,500);
    if (retangulo.x == 0) {
        aux = 1;
    } else if (retangulo.x == 500){
        aux = -1;
    }
    retangulo.x += aux;
    retangulo.desenha();
    circulo.desenha();
    bola.desenha();
    requestAnimationFrame(animacao);
}



document.addEventListener('keydown', function(evento){
    tecla = evento.key;
    console.log(tecla);
    if(tecla == "ArrowUp")   {circulo.y = circulo.y-2}  
    if(tecla == 'ArrowDown') {circulo.y = circulo.y+2}  
    if(tecla == 'ArrowLeft') {circulo.x = circulo.x-2}  
    if(tecla == 'ArrowRight'){circulo.x = circulo.x+2}
});



canvas.addEventListener('mousemove', function(evento){
    rect = canvas.getBoundingClientRect();
    x_mouse = evento.clientX - rect.left,
    y_mouse = evento.clientY - rect.top;
    console.log(x_mouse, y_mouse);
    bola.x = x_mouse;
    bola.y = y_mouse;
});

animacao();
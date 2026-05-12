canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

// Fundo inicial

fundo = {
    x: 0,
    y: 0,
    img: new Image(),
    desenha: function(){
        this.img.src = '../assets/ceu.png'
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 300, 300);
        ctx.closePath();
    }
}

let sol = {
    x: 150,
    y: 150,
    raio: 75,
    img: new Image(),
    desenha: function(){
        this.img.src = '../assets/sol.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2 * this.raio, 2 * this.raio);
        ctx.closePath();
    }
}

// Evento no canvas: só segue o mouse enquanto está dentro do canvas
canvas.addEventListener('mousemove', function(e){
    let rect = canvas.getBoundingClientRect();
    let X_mouse = e.clientX - rect.left;
    let Y_mouse = e.clientY - rect.top;

    // Centraliza a imagem no ponteiro (subtrai o raio)
    let x_centralizado = X_mouse - sol.raio;
    let y_centralizado = Y_mouse - sol.raio;

    // Clamp: impede a imagem de sair do canvas
    sol.x = Math.max(0, Math.min(canvas.width  - 2 * sol.raio, x_centralizado));
    sol.y = Math.max(0, Math.min(canvas.height - 2 * sol.raio, y_centralizado));
})

function animacao(){
    fundo.desenha();

    sol.desenha();
    requestAnimationFrame(animacao);
}

animacao();

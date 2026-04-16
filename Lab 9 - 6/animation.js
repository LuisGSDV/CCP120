canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
corpo = document.getElementById('cp');
cp = corpo.getContext('2d');

ctx.beginPath();
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 300, 300);
ctx.closePath();

let sol = {
    x: 0,
    y: 0,
    raio: 75,
    img: new Image(),
    desenha: function(){
        this.img.src = 'sol.png';
        cp.documentElement.beginPath();
        cp.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        cp.closePath();
    }

}

corpo.addEventListener('mousemove', function(e){
    rect = corpo.getBoundingClientRect();
    X_mouse = e.clientX - rect.left;
    Y_mouse = e.clientY - rect.top;
    console.log(X_mouse, Y_mouse);
    sol.x = X_mouse;
    sol.y = Y_mouse;
})

function animacao(){
    cp.clearRect();
    sol.desenha();
    requestAnimationFrame(animacao);
}

animacao();


function adivinhar(){
    const inp = document.getElementById("inp");
    var n = inp.value;
    

    if(n){

        console.log(n)

        x = Math.floor(Math.random(0,1));
        console.log(x)

        if(x){

        }else {
            console.log("x não localizado")
        }

    } else{
            console.log("n não localizado")
    }
}
//addeventlistener pra evitar carregamento de pagina


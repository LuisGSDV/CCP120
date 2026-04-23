form = document.getElementById("form")

form.addEventListener("submit", function(e){

    event.preventDefault();

    const div = document.getElementById("resultado");
    const inp = document.getElementById("inp");
    const texto = div.querySelectorAll("p")
    var n = inp.value;
    

    if(n){

        console.log(n)

        var x = Math.floor(10*(Math.random(0,1)));
        console.log(x);

        if(x >= 0){

            if(x == n){

                div.style.backgroundColor = "green"
                texto.style.setProperty("color: white")
                

            } else{
                div.style.backgroundColor = "red"
                texto.style.setProperty("color: white")
            }

        }else {
            console.log("x não localizado")
        }

    } else{
            console.log("n não localizado")
    }

    })

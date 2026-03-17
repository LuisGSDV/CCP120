form = document.getElementById("form")

form.addEventListener("submit", function(e){

    event.preventDefault();

    const div = document.getElementById("resultado");
    const inp = document.getElementById("inp");
    const text = div.querySelectAll("p")
    var n = inp.value;
    

    if(n){

        console.log(n)

        var x = Math.floor(10*(Math.random(0,1)));
        console.log(x);

        if(x >= 0){

            if(x == n){

                div.style.backgroundColor = "green"

            } else{
                div.style.backgroundColor = "red"
            }

        }else {
            console.log("x não localizado")
        }

    } else{
            console.log("n não localizado")
    }

    })

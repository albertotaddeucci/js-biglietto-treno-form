const buttonElement = document.querySelector("#generate");
let inputDistanceElement = document.querySelector("#inputkm");
let inputAgeElement = document.querySelector("#inputage");
let inputName = document.querySelector("#inputname");
const buttonCancelElement = document.querySelector("#cancel");




buttonElement.addEventListener("click",
function(){

        const coach = Math.floor(Math.random() * 9) + 1;
        const codeCp = Math.floor(Math.random() * 999) + 9000;
        const distance = inputDistanceElement.value
        const userAge = inputAgeElement.value
        const userName = inputName.value

        let errorHappened = false
    
        // controllo anno
        if(userAge<1|| isNaN(userAge) || userAge>120) {
            alert("Attenzione: data inserita non valida");
            errorHappened = true 
        }


        // // controllo distanza
        if (isNaN(distance) || distance<1){
            alert("Attenzione: distanza inserita non valida");
            errorHappened = true
        }


        // costo biglietto intero
        const ticketPrice = 0.21 * distance;

        // calcolo sconto    
        let discountPrice;

        if (userAge<18){
            discountPrice = ticketPrice * 0.2;
            
        } else if (userAge>65){
            discountPrice = ticketPrice * 0.4;
            
        } else {
            discountPrice = 0;
        }

        // biglietto scontato
        const finalPrice = ticketPrice - discountPrice;


        // messaggio errore o visualizzazione a schermo prezzo
        if (!errorHappened){
            document.getElementById("ticketprice").innerHTML = 
            `${finalPrice.toFixed(2)}€`;
            document.getElementById("coach").innerHTML = `${coach}`
            document.getElementById("cp-code").innerHTML = `${codeCp}`


        } else {
            document.getElementById("ticketprice").innerHTML = "Errore"
        }
                     
        document.getElementById("username").innerHTML = `${userName}`

        if (discountPrice>0){
            document.getElementById("offer").innerHTML = "Biglietto scontato"

        } else {
            document.getElementById("offer").innerHTML = "Biglietto standard"

        }


        

    }
)


buttonCancelElement.addEventListener("click",
    function(){
        document.querySelector("#inputname").value = "";
        document.querySelector("#inputkm").value = "";
        document.querySelector("#inputage").value = "";


    }
)
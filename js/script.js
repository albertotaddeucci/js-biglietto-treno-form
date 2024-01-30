const buttonElement = document.querySelector("#button");
const inputDistanceElement = document.querySelector("#inputkm");
const inputAgeElement = document.querySelector("#inputage");
const inputName = document.querySelector("#inputname");



buttonElement.addEventListener("click",
function(){
        let distance = inputDistanceElement.value
        let userAge = inputAgeElement.value
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
            `<b>${finalPrice.toFixed(2)}€</b>`
        } else {
            document.getElementById("ticketprice").innerHTML = "Errore"
        }

             
        document.getElementById("username").innerHTML = `${userName}`

    }
)

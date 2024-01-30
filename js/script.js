const buttonElement = document.querySelector("#generate");
const inputDistanceElement = document.querySelector("#inputkm");
const inputAgeElement = document.querySelector("#inputage");
const inputName = document.querySelector("#inputname");
const buttonCancelElement = document.querySelector("#cancel");




buttonElement.addEventListener("click",
    function(){

        let coach = Math.floor(Math.random() * 9) + 1;
        let codeCp = Math.floor(Math.random() * 999) + 9000;
        let distance = inputDistanceElement.value;
        let userAge = inputAgeElement.value;
        let userName = inputName.value;

        let errorHappened = false;
    
        // controllo anno
        if(userAge<1|| isNaN(userAge) || userAge>120) {
            alert("Attenzione: data inserita non valida");
            errorHappened = true ;
        }

        // // controllo distanza
        if (isNaN(distance) || distance<1){
            alert("Attenzione: distanza inserita non valida");
            errorHappened = true;
        }

        // controllo nome
        if (userName === "" || !isNaN(userName)){
            alert("Devi inserire un nome!")
            errorHappened = true;
            
        } 

        // costo biglietto intero
        const ticketPrice = 0.21 * distance;

        // calcolo sconto    
        let discountPrice;

        if (userAge<18){
            discountPrice = ticketPrice * 0.2;
            document.getElementById("offer").innerHTML = "Biglietto scontato";

            
        } else if (userAge>65){
            discountPrice = ticketPrice * 0.4;
            document.getElementById("offer").innerHTML = "Biglietto scontato"

            
        } else {
            discountPrice = 0;
            document.getElementById("offer").innerHTML = "Biglietto standard"

        }

        // biglietto scontato
        const finalPrice = ticketPrice - discountPrice;

    
        
        
        // messaggio errore o visualizzazione a schermo prezzo
        if (!errorHappened){
            document.getElementById("ticketprice").innerHTML = 
            `${finalPrice.toFixed(2)}€`;
            document.getElementById("coach").innerHTML = `${coach}`;
            document.getElementById("cp-code").innerHTML = `${codeCp}`;
            document.getElementById("username").innerHTML = `${userName}`;

                                    
        } else {
            document.getElementById("ticketprice").innerHTML = "Errore";
            document.getElementById("offer").innerHTML = "";
            document.getElementById("cp-code").innerHTML = "";
            document.getElementById("username").innerHTML = "";
            document.getElementById("coach").innerHTML = "";
            


        }

                
       

    }
)
        


buttonCancelElement.addEventListener("click",
    function(){
        document.querySelector("#inputname").value = null;
        document.querySelector("#inputkm").value = null;
        document.querySelector("#inputage").value = null;


    }
)
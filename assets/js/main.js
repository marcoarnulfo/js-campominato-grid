console.log("hello");

/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/


// creare un bottone che al click (.addEventListener) faccia comparire una griglia (toggle class display:none)
/*
.addEventListener("click" function(){

})

*/


// creare 100 caselle, in 10 righe da 10 caselle. (with calc(100% / 10)) per ogni casella. assegnare display flex, flex-wrap:wrap; al container. 

const container = document.querySelector(".container")
let casella = document.createElement("div")
container.append(casella)

for (let index = 1; index <= 100; index++) {
    //console.log(index);
    let casella = document.createElement("div")
    casella.append(index)
    container.append(casella)
    casella.classList.add("casella")
    casella.addEventListener("click", function (){
        console.log(index);
        casella.classList.toggle("red")
    })
}


// quando l'udente clicka su ogni cella (.addEventListener) la cella cliccata si colora classList.toggle("red") e stampiamo in console il numero della cella cliccata. log(this)

const container = document.querySelector(".containerNoob")
let casella = document.createElement("div")
container.append(casella)



const nabbo = document.querySelector(".nabbo")
const intermedio = document.querySelector(".intermedio")
const pro = document.querySelector(".pro")

nabbo.addEventListener("click", function () {
    container.classList.toggle("hide")
})

intermedio.addEventListener("click", function(){
    container.classList.toggle("hide")
})



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
/*
for (let index = 1; index <= 81; index++) {
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
*/

/*
for (let index = 1; index <= 49; index++) {
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
*/


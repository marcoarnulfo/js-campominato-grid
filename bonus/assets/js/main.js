
const containerNoob = document.querySelector(".containerNoob")
const containerInt = document.querySelector(".containerInt")
const containerPro = document.querySelector(".containerPro")
let casella = document.createElement("div")
//container.append(casella)



const nabbo = document.querySelector(".nabbo")
const intermedio = document.querySelector(".intermedio")
const pro = document.querySelector(".pro")

nabbo.addEventListener("click", function () {
    containerNoob.classList.toggle("hide")
    containerInt.classList.add("hide")
    containerPro.classList.add("hide")
})

intermedio.addEventListener("click", function(){
    containerInt.classList.toggle("hide")
    containerNoob.classList.add("hide")
    containerPro.classList.add("hide")
})

pro.addEventListener("click", function(){
    containerPro.classList.toggle("hide")
    containerNoob.classList.add("hide")
    containerInt.classList.add("hide")
})



for (let index = 1; index <= 100; index++) {
    //console.log(index);
    let casella = document.createElement("div")
    casella.append(index)
    containerNoob.append(casella)
    casella.classList.add("casella")
    casella.addEventListener("click", function (){
        console.log(index);
        casella.classList.toggle("red")
    })
}


for (let index = 1; index <= 81; index++) {
    //console.log(index);
    let casella = document.createElement("div")
    casella.append(index)
    containerInt.append(casella)
    casella.classList.add("casellaInt")
    casella.addEventListener("click", function (){
        console.log(index);
        casella.classList.toggle("green")
    })
}



for (let index = 1; index <= 49; index++) {
    //console.log(index);
    let casella = document.createElement("div")
    casella.append(index)
    containerPro.append(casella)
    casella.classList.add("casellaPro")
    casella.addEventListener("click", function (){
        console.log(index);
        casella.classList.toggle("purple")
    })
}



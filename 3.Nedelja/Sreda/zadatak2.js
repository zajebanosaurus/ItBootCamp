// Написати функцију која израчунава цену пице по квадратном центиметру (параметри функције су полупречник у цм, и цена пице)

let poluprecnik = 25
let cena = 880
let povrsina
let cenaPoCm2

function pizza(poluprecnik, cena){
    povrsina = poluprecnik ** 2 * Math.PI
    cenaPoCm2 = cena / povrsina
    return cenaPoCm2 
    
}
pizza(poluprecnik, cena)
console.log(`Cena po cm2 iznosi: ${cenaPoCm2}`)

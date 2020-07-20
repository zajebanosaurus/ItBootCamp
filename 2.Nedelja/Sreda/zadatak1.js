// За два броја (а и б) исписати њихов: Збир,разлику,производ,количник,остатак при дељењу,степен (а^b)

let a = 10
let b = 4
{
    let zbir = a + b
        console.log("Zbir brojeva je: " + zbir)
    let razlika = a - b
        console.log("Razlika je: " + razlika)
    let  proizvod = a * b
        console.log("Proizvod je: " + proizvod)
    let kolicnik = a / b
        console.log("Količnik je: " + kolicnik)
    let ostatak = a % b;
        console.log("Ostatak brojeva je: " + ostatak)
}    
// Skraćena varijant
{
    let zbir = a + b
    let razlika = a - b
    let proizvod = a * b
    let kolicnik = a / b
    let ostatak = a % b;

    console.log(zbir, razlika, proizvod, kolicnik, ostatak)
}
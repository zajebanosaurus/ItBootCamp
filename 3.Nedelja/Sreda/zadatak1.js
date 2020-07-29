// Написати функцију која враћа максимум од 3 броја (Параметри функције су 3 броја)

let n1 = 76
let n2 = 100
let n3 = -34
let max = 0

function maxOfNumbers(n1,n2,n3){
    if(n1 > n2 && n1 > n3){
        max = n1
    }else if(n2 > n1 && n2 > n3){
        max = n2
    }else{
        max = n3
    }
    return max
}

console.log(`Maksimum od 3 broja je: ${maxOfNumbers(n1,n2,n3)}`)
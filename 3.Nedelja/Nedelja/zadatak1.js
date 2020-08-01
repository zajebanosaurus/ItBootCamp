//Написати функцију која исписује све елементе низа који су дељиви са 5

const divisibleByFive = (arr) =>{
    return arr.filter( el => {
        return el % 5 === 0
    })
}
console.log(`Brojevi deljivi sa 5 su: ${divisibleByFive([1,2,3,4,5,10,15,23,1,5])}`)
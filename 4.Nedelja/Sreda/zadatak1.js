let pikacu = {
    ime: 'Pikaču',
    vrsta: 'elektricni',
    sposobnost:  ['staticni elektricitet', 'bodlje', 'brzi napad' ],
    karakteristike: {
        napad: 75,
        odbrana: 60,
        brzina: 50,
    }
}
let bagon = {
    ime: 'Bagon',
    vrsta: 'reptilianac',
    sposobnost:  ['tvrda glava', 'bes', 'ujed' ],
    karakteristike: {
        napad: 55,
        odbrana: 30,
        brzina: 90,
    }
}
let arbok = {
    ime: 'Arbok',
    vrsta: 'zmija',
    sposobnost:  ['otrov', 'mračni puls'],
    karakteristike: {
        napad: 167,
        odbrana: 153,
        brzina: 155,
    }
}
let cikorita = {
    ime: 'Čikorita',
    vrsta: 'nešto oblo',
    sposobnost:  ['travlji čvor', 'bič'],
    karakteristike: {
        napad: 92,
        odbrana: 122,
        brzina: 128
    }
}

let pokemoni = [pikacu, bagon, arbok, cikorita]

const abilities = (par) =>{
    let arr = []

    par.forEach(el => {
       arr.push(el.sposobnost)
    });
    return arr
}
abilities(pokemoni)
// console.log(abilities(pokemoni))

pokemoni.sort((a,b) => a.karakteristike.brzina - b.karakteristike.brzina)
// console.log(pokemoni)


let pikacu = {
    ime: 'Pikaču',
    vrsta: 'elektricni',
    sposobnost:  ['staticni elektricitet', 'bodlje', 'brzi napad' ],
    karakteristike: {
        napad: 75,
        odbrana: 60,
        brzina: 50,
    },
    slika: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png',
}
let bagon = {
    ime: 'Bagon',
    vrsta: 'reptilianac',
    sposobnost:  ['tvrda glava', 'bes', 'ujed' ],
    karakteristike: {
        napad: 55,
        odbrana: 30,
        brzina: 90,
    },
        slika: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/371.png'
}
let arbok = {
    ime: 'Arbok',
    vrsta: 'zmija',
    sposobnost:  ['otrov', 'mračni puls'],
    karakteristike: {
        napad: 167,
        odbrana: 153,
        brzina: 155,
    }, 
    slika: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/024.png'
}
let cikorita = {
    ime: 'Čikorita',
    vrsta: 'nešto oblo',
    sposobnost:  ['travlji čvor', 'bič'],
    karakteristike: {
        napad: 92,
        odbrana: 122,
        brzina: 128
    },
    slika: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png'
}

let pokemoni = [pikacu, bagon, arbok, cikorita]

pokemoni.sort((a,b) => a.karakteristike.napad - b.karakteristike.napad)

export {pokemoni}

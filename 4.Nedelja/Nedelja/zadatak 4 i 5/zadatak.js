// За дати html направити скрипту која:

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

const wrapperElement = document.querySelector('.wrapper')

const button = document.createElement('button')
button.id = 'prikaz'
button.textContent = 'PRIKAŽI POKEMONE'

const button2 = document.createElement('button')
button2.id = 'pobednik'
button2.textContent = 'PRIKAŽI NAJJAČEG POKEMONA'

wrapperElement.append(button,button2)

pokemoni.sort((a,b) => a.karakteristike.napad - b.karakteristike.napad)


//------------------- POBEDNIK ---------------------------- 

let obj = {}
pokemoni.map(el => {
    let jacina = 0

    if(el.karakteristike.napad >= jacina){
        jacina = el.karakteristike.napad
        obj = el
    }
})

    const pokemonPobednik = document.createElement('div')
    pokemonPobednik.className = 'bez-prikaza'
    
    const parPobednik = document.createElement('p')
    parPobednik.textContent = obj.ime + ': ' + obj.vrsta + ', ' + obj.sposobnost + ', ' + obj.karakteristike.napad + ' ' + obj.karakteristike.odbrana + ' ' + obj.karakteristike.brzina

    const pictureWinner = document.createElement('img')
    pictureWinner.src = obj.slika
    
    pokemonPobednik.append(parPobednik,pictureWinner)
    wrapperElement.append(pokemonPobednik)

button2.addEventListener('click', () =>{
    pokemonPobednik.classList.toggle('bez-prikaza')
})

//------------------- PRIKAZ ------------------------------------------

pokemoni.forEach(pokemon => {
    const pokemonDiv = document.createElement('div')
    pokemonDiv.className =  'bez-prikaza'

    const par = document.createElement('p')
    const picture = document.createElement('img')
    
    par.textContent = pokemon.ime + ': ' + pokemon.vrsta + ', ' + pokemon.sposobnost + ', ' + pokemon.karakteristike.napad + ' ' + pokemon.karakteristike.odbrana + ' ' + pokemon.karakteristike.brzina
    picture.src = pokemon.slika

    button.addEventListener('click', (e) =>{
        pokemonDiv.classList.toggle('bez-prikaza')
        
    })
    wrapperElement.append(pokemonDiv)
    pokemonDiv.append(par, picture) 
});















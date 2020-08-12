import {button} from './buttons.js'
import {pokemoni} from './pokemoni.js'
import {wrapperElement} from './index.js'

export const prikazFunkction = (el) =>{
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
    return el
}
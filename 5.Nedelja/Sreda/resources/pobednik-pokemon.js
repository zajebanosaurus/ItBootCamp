import {button2} from './buttons.js'
import {wrapperElement} from './index.js'

export const pobednikFunkction = (pokemoni) =>{
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
    return pokemoni
}
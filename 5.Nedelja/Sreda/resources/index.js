// За дати html направити скрипту која:
export const wrapperElement = document.querySelector('.wrapper')

import {button, button2} from './buttons.js'
import {pokemoni} from './pokemoni.js'
import {prikazFunkction} from './prikaz-pokemona.js'
import {pobednikFunkction} from './pobednik-pokemon.js'

wrapperElement.append(button,button2)
pobednikFunkction(pokemoni)
prikazFunkction(pokemoni)















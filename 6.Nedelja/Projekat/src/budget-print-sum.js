import {sumOfIncome, sumOfExprenses, sub, percentage} from './budget-calculator.js'
import {inputSelect} from './index.js'

const sumIncomePrint = document.querySelector('.sum-income')
const sumExpensesPrint = document.querySelector('.sum-expenses')
const subtraction = document.querySelector('.subtraction')

const incomePar = document.createElement('p')
const expensesPar = document.createElement('p')

export const sumPrint = () =>{
    if(inputSelect.value === 'Prihodi'){
        incomePar.id = 'sum-income'
        incomePar.innerHTML = `Prihodi <span style="float: right">+ ${Math.round(sumOfIncome * 100) / 100} </span>`
        sumIncomePrint.append(incomePar)
    }
    else {
        expensesPar.id = 'sum-expenses'
        expensesPar.innerHTML = `Rashodi <span style="float: right">- ${Math.round(sumOfExprenses * 100) / 100} <span id="percent">${Math.round(percentage)}%</span></span>`
        sumExpensesPrint.append(expensesPar)
    }
    if(sub > 0){
        subtraction.innerHTML = `+${Math.round(sub * 100) / 100}`
    }
    else{
        subtraction.innerHTML = `${Math.round(+sub * 100) / 100}`
    }
}
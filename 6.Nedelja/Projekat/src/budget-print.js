import { inputSelect, inputDiscription, inputAmount } from './index.js'
import { percentage } from './budget-calculator.js'
import { input } from './index.js'

const incomePrint = document.querySelector('.income')
const expensesPrint = document.querySelector('.expenses')

export const budgetPrint = () => {
    if(inputSelect.value === 'Prihodi'){

        const incomeInput = document.createElement('p')
        incomeInput.className = 'amount'
        incomeInput.innerHTML = `<span style="color: #212121">${inputDiscription.value}</span><span style="float: right"> + ${Math.round(inputAmount.value * 100) / 100}</span>`
        
        const deleteButtonIncome = document.createElement('button')
        deleteButtonIncome.textContent = 'X'
        deleteButtonIncome.className = 'delete-button'
        
            incomeInput.addEventListener('mouseenter', ()=>{
                deleteButtonIncome.className = 'delete-button-show'
                
                incomeInput.addEventListener('mouseleave', ()=>{
                    deleteButtonIncome.className = 'delete-button'
                })
            })
            incomeInput.addEventListener('click', () => {
                incomeInput.remove()
                input.splice(input.findIndex(el => el.amount === parseInt(incomeInput)),1)
                console.log(input)
            })
        incomePrint.append(incomeInput)
        incomeInput.append( deleteButtonIncome)
    }
    else {
        const expensesInput = document.createElement('p')
        expensesInput.className = 'amount'
        expensesInput.innerHTML = `<span style="color: #212121">${inputDiscription.value}</span><span style="float: right"> - ${Math.round(inputAmount.value * 100) / 100} <span id="percent">${Math.round(percentage * 100) / 100}%</span></span>`
 
        const deleteButtonExpenses = document.createElement('button')
        deleteButtonExpenses.textContent = 'X'
        deleteButtonExpenses.className = 'delete-button'

        expensesInput.addEventListener('mouseenter', ()=>{
            deleteButtonExpenses.className = 'delete-button-show'
            
        expensesInput.addEventListener('mouseleave', ()=>{
            deleteButtonExpenses.className = 'delete-button'
        })
        })
        expensesInput.addEventListener('click', () => {
            expensesInput.remove()
        })
        expensesPrint.append(expensesInput)
        expensesInput.append(deleteButtonExpenses)
    } 
}
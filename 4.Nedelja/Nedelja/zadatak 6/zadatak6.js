// На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER) И постоје 2 дугмета за наручивање одмах
// Дугмићи за 'наручивање' повећавају бројач
// Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку (Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ]) Напомена: X је бројач, проверити да ли је бројач 0, и ако јесте кликом на наручивање одмах избацује одговарајућу поруку за грешку

const app = document.querySelector('.app')

const orderButtons = ['button1', 'button2']
const orderNow = ['button1', 'button2']

const counter = document.createElement('p')
counter.textContent = 0


orderButtons.forEach(orderButton => {
    const button = document.createElement('button')
    button.textContent = 'Order'

    button.addEventListener('click', () =>{
        counter.textContent++
    })

    app.append(button)  
})

orderNow.forEach(orderButton => {
    const orderNowButtons = document.createElement('button')
    orderNowButtons.textContent = 'Order Now'
    app.append(orderNowButtons)

    orderNowButtons.addEventListener('click', () =>{
        const orderPar = document.createElement('p')
        app.append(orderPar) 

        if(counter.textContent > 0 ){
            orderPar.textContent = `You ordered: ${counter.textContent} pizza/pizzas, ${(new Date().toLocaleDateString('sr-RS'))} time:${(new Date()).getHours()}:${(new Date()).getMinutes()}`
            counter.textContent = 0
        }
        else{
            orderPar.textContent = 'Error, amount cannot be 0'
        }
        setTimeout(() => {
            orderPar.remove()
        },2000)
    }) 
})

app.append(counter)


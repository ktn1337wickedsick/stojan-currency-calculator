const currencyOne = document.getElementById('currency-one')
const amountOne = document.getElementById('amount-one')
const currencyTwo = document.getElementById('currency-two')
const amountTwo = document.getElementById('amount-two')

const swap = document.getElementById('swap')
const rate = document.getElementById('rate')


function calculate() {
  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne.value}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    rate.innerText = `1 ${currencyOne.value} = ${data.rates[currencyTwo.value]} ${currencyTwo.value}`
    amountTwo.value = amountOne.value * data.rates[currencyTwo.value]
  })
}


currencyOne.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)
currencyTwo.addEventListener('change', calculate)
amountTwo.addEventListener('input', calculate)

swap.addEventListener('click', (e)=> {
  const temp = currencyOne.value
  currencyOne.value = currencyTwo.value
  currencyTwo.value = temp
  calculate()
})




calculate()
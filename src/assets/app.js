import { templateChart } from './charts.js'
import { transformToArray, generateNumbers } from './utils.js'
const userBinary = document.getElementById('binaryInput')
const userChoice = document.getElementById('user-choice')
const selectContainer = document.getElementById('select-container')
const form = document.getElementById('form-inputs')
const submitButton = document.getElementById('submit-button')
const regexBinary = new RegExp(/\b[01]+\b/)

document.addEventListener('DOMContentLoaded', () => {
  submitButton.disabled = true
})
userChoice.addEventListener('change', validateMethod)
userBinary.addEventListener('keyup', validateBinary)

form.addEventListener('submit', renderChart)

function renderChart(evt) {
  evt.preventDefault()
  const dataInArrays = transformToArray(userBinary.value)
  const numbersTransformed = generateNumbers(
    userChoice.value,
    dataInArrays.integers
  )

  const configs = {
    labels: dataInArrays.strings,
    customData: numbersTransformed,
  }

  const options = templateChart(configs)
  const ctx = document.getElementById('myChart').getContext('2d')
  const myChart = new Chart(ctx, options)
}

function validateMethod(evt) {
  if (this.value === '' || this.value === null) {
    submitButton.disabled = true
    if (selectContainer.classList.contains('is-success')) {
      selectContainer.classList.remove('is-success')
    }
    selectContainer.classList.add('is-danger')
  } else {
    if (selectContainer.classList.contains('is-danger')) {
      selectContainer.classList.remove('is-danger')
    }
    selectContainer.classList.add('is-success')
  }
}

function validateBinary(evt) {
  let condition = regexBinary.test(this.value)
  console.log(regexBinary.test(this.value))
  if (condition) {
    submitButton.disabled = false
    if (userBinary.classList.contains('is-danger')) {
      userBinary.classList.remove('is-danger')
    }
    userBinary.classList.add('is-success')
  } else {
    if (userBinary.classList.contains('is-success')) {
      userBinary.classList.remove('is-success')
    }
    submitButton.disabled = true
    userBinary.classList.add('is-danger')
  }
}

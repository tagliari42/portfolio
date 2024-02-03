const input = document.getElementById("user-input")

const validRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

const inputExtract = () => {
const inputValue = input.value
if (inputValue === '') {
  alert("Please provide a phone number")
} else {
  if (validRegex.test(inputValue)){
  const resultOutput = document.getElementById('results-div')
  resultOutput.innerHTML += `<p>Valid US number: ${inputValue}</p>`
  } else  {
    const resultOutput = document.getElementById('results-div')
  resultOutput.innerHTML += `<p>Invalid US number: ${inputValue}</p>`
  }
}

}

const clearResults = () => {
  const results = document.getElementById("results-div")
  results.innerHTML = ''
  input.value = ''
}

const checkBtn = document.getElementById('check-btn')

checkBtn.addEventListener('click', inputExtract)

const clearBtn = document.getElementById('clear-btn')

clearBtn.addEventListener('click', clearResults)
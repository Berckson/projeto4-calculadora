function themeSwicht () {

    document.body.classList.toggle('is-dark')

    document.getElementById('nameCalc').classList.toggle('name-calc-dark')

    document.getElementById('themeToggle').classList.toggle('theme-button-dark')

    document.getElementById('calcs').classList.toggle('calculation-dark')

    document.getElementById('result').classList.toggle('result-dark')

    document.querySelectorAll('#para').forEach((el) => {
        el.classList.toggle('back-para-dark')
    })
}

function keyboard () {

    const calc = document.getElementById('calcs')
    
    calc.innerText += this.innerText

}

function calculate () {

    const calc = document.getElementById('calcs')

    const result = document.getElementById('result')

    result.innerText = eval(calc.innerText)

}

function clear () {

    const calc = document.getElementById('calcs')

    calc.innerText = ''

    const result = document.getElementById('result')

    result.innerText = ''

}

document.getElementById('themeToggle').addEventListener('click', themeSwicht)

document.querySelectorAll('#calcBtn').forEach((el) => {
        
    el.addEventListener('click', keyboard)

})

document.getElementById('resultBtn').addEventListener('click', calculate)

document.getElementById('clearBtn').addEventListener('click', clear)

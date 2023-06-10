const themeBtn = document.querySelector('#theme-btn')
const themeBtnImg = document.querySelector('#theme-btn img')
const htmlTag = document.documentElement

console.log(htmlTag.getAttribute('data-theme'));

themeBtn.addEventListener('click', () => {
    if (htmlTag.getAttribute('data-theme') == 'dark') {

        htmlTag.setAttribute('data-theme', 'light')
        themeBtnImg.setAttribute('src', './image/dark-theme-btn.svg')

    } else {

        htmlTag.setAttribute('data-theme', 'dark')
        themeBtnImg.setAttribute('src', './image/light-theme-btn.svg')

    }
})

// calc 

let a = '' // first number = brinchi son
let b = '' // second number = ikkinchi son
let sign = '' // Math operator = Matematik operator
let finish = false // = 

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['+', '-', '*', '/']

function allClear() {
    a = ''
    b = ''
    sign = ''
    finish = false
    screenResult.innerHTML = ''
}


const screenResult = document.querySelector('#result')
const calcBtns = document.querySelector('.calc__buttons')
const clearBtn = document.querySelector('#clear')

clearBtn.addEventListener('click', () => allClear())

calcBtns.addEventListener('click', (event) => {
    if (!event.target.classList.contains('btn')) return
    if (event.target.classList.contains('ac')) return
    if (event.target.classList.contains('backspace')) return

    screenResult.innerHTML = ''
    const key = event.target.innerHTML

    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key
            screenResult.innerHTML = a
        } else if (b !== '' && sign !== '' && finish) {
            b = key
            finish = false
            screenResult.innerHTML = b
        } else {
            b += key
            screenResult.innerHTML = b
        }
    }
    if (action.includes(key)) {
        sign = key
        screenResult.innerHTML = sign
    }

    if (key == '=') {
        if (b === '') b = a
        switch (sign) {
            case '+':
                a = (+a) + (+b)
                break;
            case '-':
                a = (+a) - (+b)
                break;
            case '*':
                a = (+a) * (+b)
                break;
            case '/':
                if (b === '0') {
                    screenResult.innerHTML = 'HATO!'
                    a = ''
                    b = ''
                    sign = ''
                    return
                }
                a = (+a) / (+b)
                break;
        }
        finish = true
        screenResult.innerHTML = a
    }
})


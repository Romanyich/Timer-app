const pause = document.getElementById('1')
const reset = document.getElementById('2')
const start = document.getElementById('3')
const timer = document.getElementById('timer')

let a

pause.disabled = true

timer.innerHTML = localStorage.getItem('key')

function increaseTime() {
    numeral = parseInt(timer.innerHTML)
    numeral = numeral + 1
    timer.innerHTML = numeral.toString()
    localStorage.setItem('key', numeral)
}

start.addEventListener('click', function() {
    clearInterval(a)
    a = setInterval(() => {
        increaseTime()
    }, 1000)
    start.disabled = true
    pause.disabled = false
})

pause.addEventListener('click', function() {
    clearInterval(a)
    start.disabled = false
    pause.disabled = true
})

reset.addEventListener('click', function() {
    clearInterval(a)
    timer.innerHTML = '0'
    start.disabled = false
    pause.disabled = true
    localStorage.setItem('key', 0)
})

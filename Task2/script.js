const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click',() => {
    alert('Служит для вывода информации в консоль')
    code_1 = document.querySelector('#code_1')
    code_1.textContent = 'Пример использования команды console.log'
})

const alert_1 = document.querySelector('#alert');

alert_1.addEventListener('click',() => {
    alert('Служит для вывода информации в консоль')
    code_2 = document.querySelector('#code_2')
    code_2.textContent = 'Пример использования команды console.log'
})

const prompt_1 = document.querySelector('#prompt');

prompt_1.addEventListener('click',() => {
    alert('Служит для вывода информации в консоль')
    code_3 = document.querySelector('#code_3')
    code_3.textContent = 'Пример использования команды console.log'
})
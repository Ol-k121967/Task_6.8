document.querySelector('#testText').onclick = function() {
    const userText = prompt('Введите новый текст ссылки:');
    const testText = document.querySelector('#testText');
    testText.textContent = userText;
   // console.log('Текст в ссылке изменен на', userText);
}



document.querySelector("#formVvod").addEventListener("submit", (event) => {
    
    const textVvod = event.target.querySelector("#vvod").value;
    document.querySelector('#duplicateField').textContent = textVvod;
    console.log(textVvod);
    event.target.querySelector("#vvod").value = '';
    event.preventDefault();
    
})
    

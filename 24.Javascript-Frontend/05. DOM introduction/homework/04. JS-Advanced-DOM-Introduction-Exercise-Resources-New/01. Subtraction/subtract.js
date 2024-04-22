function subtract() {
    const firstNumberElement = document.getElementById('firstNumber');
    const secondNumberElement = document.getElementById('secondNumber');
    const resultInput = document.getElementById('result');

    const result = Number(firstNumberElement.value) - Number(secondNumberElement.value);
    resultInput.textContent = result;
}
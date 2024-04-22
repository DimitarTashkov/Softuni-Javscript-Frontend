function calc() {
    // TODO: sum = num1 + num2
    const firstInputElement = document.getElementById('num1');
    const secondInputElement = document.getElementById('num2');
    const sumInput = document.getElementById('sum');

    const firstNumber = Number(firstInputElement.value);
    const secondNumber = Number(secondInputElement.value);

    const sum = firstNumber+secondNumber;

    sumInput.value = sum;
}

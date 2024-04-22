function encodeAndDecodeMessages() {
    const inputTextareaElement = document.querySelector('#main div:first-child textarea');
    const outputTextareaElement = document.querySelector('#main div:last-child textarea');
    const sendButtonElement = inputTextareaElement.nextElementSibling;
    const decodeButtonElement = outputTextareaElement.nextElementSibling;

    sendButtonElement.addEventListener('click', (e) => {
        const inputText = inputTextareaElement.value;
        let result = '';
        for (const character of inputText) {
            const value = character.charCodeAt(0) + 1
            result += String.fromCharCode(value);
        }
        outputTextareaElement.value = result;


        inputTextareaElement.value = '';
    })

    decodeButtonElement.addEventListener('click', (e) => {
        const outputText = outputTextareaElement.value;
        let result = '';

        for (const character of outputText) {
            const value = character.charCodeAt(0) - 1
            result += String.fromCharCode(value);
        }
        outputTextareaElement.value = result;
    })
}
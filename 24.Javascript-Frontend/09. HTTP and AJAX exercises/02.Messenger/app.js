function attachEvents() {
    const messageUrl = 'http://localhost:3030/jsonstore/messenger';

    const sendButtonElement = document.getElementById('submit');
    const refreshButtonElement = document.getElementById('refresh');

    const textareaOutputElement = document.getElementById('messages');
    const nameInputElement = document.querySelector('input[name=author]');
    const messageInputElement = document.querySelector('input[name=content]');

    sendButtonElement.addEventListener('click', async() => {
        const authorName = nameInputElement.value;
        const content = messageInputElement.value;

        await fetch(messageUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                author: authorName,
                content: content,
            })
        });
    })
    refreshButtonElement.addEventListener('click', async() => {
        const response = await fetch(messageUrl);
        const data =  await response.json();
        const entries = Object.values(data);
       console.log(Object.values(data));
       const lastEntry = entries.pop();
       for (const information of Object.values(data)) {
            textareaOutputElement.textContent += `${information.author}: ${information.content}\n`;
       }
       textareaOutputElement.textContent += `${lastEntry.author}: ${lastEntry.content}`;
    })
}

attachEvents();
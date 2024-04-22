function solve() {
  //TODO
  const textareaInputElement = document.getElementById('input');
  const text = textareaInputElement.value;
  const outputElement = document.getElementById('output');

  const result = text.split('.')
  .filter(sentence => !!sentence).reduce((result,sentence,i) => {
    const resultIndex = Math.floor(i/3);
    if(!result[resultIndex]) {
      result[resultIndex] = [];
    }

    result[resultIndex].push(sentence.trim());

    return result;
  },[])
  .map(element => `<p>${element.join('. ')}.</p>`)
  .join('\n');

  outputElement.innerHTML = result
  
}
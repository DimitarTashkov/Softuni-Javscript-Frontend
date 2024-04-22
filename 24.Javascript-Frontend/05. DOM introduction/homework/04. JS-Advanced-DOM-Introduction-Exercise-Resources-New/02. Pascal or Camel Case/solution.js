function solve() {
  //TODO...
  const inputTextElement = document.getElementById('text');
  const namingConventionElement = document.getElementById('naming-convention');

  const resultElement = document.querySelector('#result');

  const text = inputTextElement.value;
  const namingConvention = namingConventionElement.value;

  const convertToPascalCase = (text) => text
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join('');
  const convertor = {
    'Pascal Case': convertToPascalCase,
    'Camel Case': (text) =>   convertToPascalCase(text).charAt(0).toLowerCase() + convertToPascalCase(text).slice(1)
  }
  if(convertor[namingConvention])
  {
    resultElement.textContent = convertor[namingConvention](text);

  }
  else {
    resultElement.textContent = 'Error!';
  }
}
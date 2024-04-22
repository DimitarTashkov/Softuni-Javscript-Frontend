function attachEventsListeners() {
    const outputElements = document.querySelectorAll('#outputUnits option');

    const inputUnitElement = document.querySelector('#inputDistance');
    const outputUnitElement = document.querySelector('#outputDistance');

    const convertButtonElement = document.querySelector('#convert');


    convertButtonElement.addEventListener('click', (e) => {
        const inputOptionElement = document.querySelector('#inputUnits option').parentElement.value;
        const outputOptionElement = document.querySelector('#outputUnits option').parentElement.selectedIndex;


        const elementConvertedToMeters = convertToMeters(Number(inputUnitElement.value),inputOptionElement);
        outputUnitElement.removeAttribute('disabled');
        outputUnitElement.value = convertDesirableMeasure(elementConvertedToMeters,outputOptionElement);

    })
    


    const convertToMeters = (value,unit) => {
        switch(unit) {
            case 'km':
                return value * 1000;
            case 'cm':
                return value / 100;
            case 'mm':
                return value / 1000;
            case 'mi': 
                return value *  1609.34;
            case 'yrd':
                return value * 0.9144;
            case 'ft': 
                return value * 0.3048;
            case 'in':
                return value * 0.0254;  
            case 'm':
                return value;       
        }
    }

    const convertDesirableMeasure = (valueInMeters, index) => {
        switch(index) {
            case 0:
                return valueInMeters / 1000;
            case 1:
                return valueInMeters;
            case 2:
                return valueInMeters * 100;
            case 3: 
                return valueInMeters * 1000;
            case 4:
                return valueInMeters / 1609.34;
            case 5: 
                return valueInMeters / 0.9144;
            case 6:
                return valueInMeters / 0.3048;    
            case 7:    
                 return valueInMeters / 0.0254;    

        }
    }
}


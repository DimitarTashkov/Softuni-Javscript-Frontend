function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

    const studentsBodyElement = document.querySelector('#results tbody');
    const submitButtonElement = document.getElementById('submit');

    submitButtonElement.addEventListener('click', () => {
        const firstNameElement = document.querySelector('input[name=firstName]')
        const lastNameElement = document.querySelector('input[name=lastName]')
        const facultyNumberElement = document.querySelector('input[name=facultyNumber]')
        const gradeElement = document.querySelector('input[name=grade]')

        const newStudent =  {
            firstName: firstNameElement.value,
            lastName : lastNameElement.value,
            facultyNumber: facultyNumberElement.value,
            grade: gradeElement.value
            
        }
        
        fetch(baseUrl, {
            method: 'POST'
            ,headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(newStudent)
        })
            .then(res => res.json())
            .then(data => {
                Object.values(data)
                .forEach(student => studentsBodyElement.appendChild(createStudentElement(student)))
                firstNameElement.valuet = ''; 
                lastNameElement.value = ''; 
                facultyNumberElement.value = ''; 
                gradeElement.value = ''; 
            })
    })

    fetch(baseUrl)
        .then(res=> res.json())
        .then(data => {
            Object.values(data)
            .forEach(student => {
                studentsBodyElement.appendChild(createStudentElement(student)); 
            })
        })

    function createStudentElement(student) {
        const trElement = document.createElement('tr');

        const createRd = value => {
            const tdElement = document.createElement('td');
            tdElement.textContent = value;

            return tdElement;
        }

        trElement.appendChild(createRd(student.firstName));
        trElement.appendChild(createRd(student.lastName));
        trElement.appendChild(createRd(student.facultyNumber));
        trElement.appendChild(createRd(student.grade));

        return trElement;

    }
}


attachEvents();
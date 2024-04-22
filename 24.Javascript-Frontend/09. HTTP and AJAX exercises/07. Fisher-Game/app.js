import template from './catchTemplate'; 

const userUrl = 'http://localhost:3030/users'
const catchUrl = 'http://localhost:3030/data/catches';

const registerView = document.getElementById('register-view')
const loginView = document.getElementById('login-view')
const homeView = document.getElementById('home-view')
const sections = document.getElementById('views');
const mainElement = document.querySelector('body > main')
const catchSection = document.getElementById('catches');

const userButtons = document.getElementById('user');
const guestButtons = document.getElementById('guest'); 

const homeLink = document.getElementById('home');
const logoutLink = document.getElementById('logout');
const loginLink = document.getElementById('login');
const registerLink = document.getElementById('register');

const loginButton = loginView.querySelector('button');
const emailElement = loginView.querySelector('input[name=email]')
const passwordElement = loginView.querySelector('input[name=password]')

const userSpanElement = document.querySelector('nav p.email')
const loadButton = document.querySelector('button.load');

sections.style.display = 'none';
mainElement.appendChild(homeView);

updateNavigationData();

loginLink.addEventListener('click', () => {
    hideSections();
    mainElement.appendChild(loginView);
})

homeLink.addEventListener('click', () => {
    hideSections();
    mainElement.appendChild(homeView);
})

loginButton.addEventListener('click', async (e) => {
    e.preventDefault();
    try{
        const response = await fetch(`${userUrl}/login` , {
            method: 'POST'
            ,headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email:emailElement.value
                ,password: passwordElement.value
            })
        });

        if(!response.ok) {
            throw new Error(response.statusText); 
        }
    
        const userData = response.json();
        
        saveUserData(userData); 


        hideSections();
        mainElement.appendChild(homeView);

        updateNavigationData();
    }
    catch(err){
        document.querySelector('.notification').textContent = 'Invalid username or password';
    }
    
    
})

logoutLink.addEventListener('click', async (e) => {
    removeUserData();
    updateNavigationData();
})

registerLink.addEventListener('click', async (e) => {
    hideSections();
        mainElement.appendChild(registerView);
})
loadButton.addEventListener('click', async(e) => {
    const response = await fetch(catchUrl);
    const catches = response.json(); 
    
    //NOT SECURE DONT DO THIS
    catchSection.innerHTML = catches.map(item => template(item)).join('\n')
})

function hideSections() {
    sections.appendChild(mainElement.children[0]);
}

function saveUserData(userdata) {
    localStorage.setItem('accessToken',userdata.accessToken);
    localStorage.setItem('email',userdata.email);
    localStorage.setItem('username',userdata.username);
    localStorage.setItem('_id',userdata._id);
}

function removeUserData() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    localStorage.removeItem('_id');
}

function updateNavigationData() {
const username = localStorage.getItem('username');
if(!username) {
    userButtons.style.display = 'none';
    guestButtons.style.display = 'inline';
    userSpanElement.textContent = 'guest';
} else {
    userButtons.style.display = 'inline';
    guestButtons.style.display = 'none';
    userSpanElement.textContent = username;
}
}
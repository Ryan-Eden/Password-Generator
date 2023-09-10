const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordBtn = document.getElementById('password-btn');
const passwordLengthEl = document.querySelector('.password-length');
const passwordOneEl = document.getElementById('password-one');
const passwordTwoEl = document.getElementById('password-two');

let passwordLength = 0;

function setPasswordLength(event) {
    passwordLength = parseInt(event);
    passwordLengthEl.textContent = passwordLength;
}

function generateRandomPassword() {
    let password = '';
    for(let i = 0; i < passwordLength; i++) {
        const randIndex = Math.floor(Math.random() * characters.length)
        password += characters[randIndex];
    }
    return password;    
}


function renderPasswords() {
    passwordOneEl.textContent = generateRandomPassword();
    passwordTwoEl.textContent = generateRandomPassword();
}

passwordBtn.addEventListener('click', renderPasswords);
document.getElementById('password-slider').addEventListener('change', e => {
     setPasswordLength(e.target.value);
});
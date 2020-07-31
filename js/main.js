const pPhrase = document.getElementById("pass-phrase");
const decryptedText = document.getElementById("decrypted-text");
const timeoutInMiliseconds = 5000;
let timeoutId; 

const encrypt = () => {
    let encrypted = document.getElementById("encrypted");
    let text = document.getElementById("text-to-encrypt").value;
    let pphrase = document.getElementById("pass-phrase1").value;
    console.log( `encrypting ${text} with code ${pphrase}...`);
    encrypted.innerHTML = CryptoJS.AES.encrypt(text, pphrase);
}

const decrypt = () =>  {
    let decrypted = document.getElementById("decrypted");
    let text = document.getElementById("text-to-decrypt").value;
    let pphrase = document.getElementById("pass-phrase2").value;
    console.log(`decrypting ${text} with code ${pphrase}...`);
    decrypted.innerHTML = CryptoJS.AES.decrypt(text, pphrase).toString(CryptoJS.enc.Utf8);
}

function decrypt2(cryptedText, passPhrase) {
    let uncryptedString = CryptoJS.AES.decrypt(cryptedText, passPhrase).toString(CryptoJS.enc.Utf8);
    if (uncryptedString.length == 0) {
        console.log('Decrypt process failed.');
        return;
    } else {
        return uncryptedString;
    }
}

function startTimer() { 
    timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds)
}
 
function doInactive() {
    decryptedText.value = "";
    pPhrase.value = "";
}

function resetTimer() { 
    window.clearTimeout(timeoutId)
    startTimer();
}

function setupTimers () {
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);
    startTimer();
}

document.addEventListener('click', function(event) {
    if (event.target.id == 'decrypt') {
        if (pPhrase.value.length == 0) {
            console.log('Pass Phrase needed');
        } else {
            decryptedText.value = decrypt2(secretText, pPhrase.value);
        }
    }
});

window.addEventListener("DOMContentLoaded", (event) => {
    setupTimers();
});

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
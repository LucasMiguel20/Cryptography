// CRYPTOGRAPHY KEYS
let a = "ai";
let e = "enter";
let i = "imes";
let o = "ober";
let u = "ufat";

// VARIABLES
let patterns = document.querySelectorAll(".patterns");
let encryptForm = document.querySelector("#encrypt-text");
let decryptForm = document.querySelector("#decrypt-text")
let toEncryptText = document.querySelector("#encrypt");
let encryptedText = document.querySelector("#decrypt");
let encryptBtn = document.querySelector(".encryptBtn");
let decryptBtn = document.querySelector(".decryptBtn");
let copyTextToEncryptBtn = document.querySelector("#copyTextToEncrypt");
let copyTextToDecryptBtn = document.querySelector("#copyTextToDecrypt");

// Buttons actions
encryptBtn.addEventListener("click", toEncrypt);
decryptBtn.addEventListener("click", toDecrypt);

// let patterns = document.querySelectorAll(".patterns");
// patterns.addEventListener("keydown", function (letters) {
//     if (letters.key >= "0" && letters.key <= "9") {
//        return letters.preventDefault();
//     }
// }); --> Uncaught TypeError: patterns.addEventListener is not a function ???

// To prevent the user to type numbers
for (let i = 0; i < patterns.length; i++) {
    patterns[i].addEventListener("keydown", function (x) {
        if (x.key >= "0" && x.key <= "9") {
            return x.preventDefault();
        }
    });
}

// To prevent the user from typing specials characters
toEncryptText.addEventListener('keyup', (ev) => {
    const input = ev.target;
    input.value = input.value.replace(/[^\w\s]/gi, "");
});

// To prevent the user from typing in capital letters
toEncryptText.addEventListener('keyup', (ev) => {
    const input = ev.target;
    input.value = input.value.toLowerCase();
});

encryptedText.addEventListener('keyup', (ev) => {
    const input = ev.target;
    input.value = input.value.toLowerCase();
});

// Makes what is in the first textarea disappear and appear in the second, encrypted.
function toEncrypt(event) {
    event.preventDefault();
    let textToEncrypt = toEncryptText.value;

    // To replace all strings you must use the Regular Expression with the global marker g
    let encrypting = textToEncrypt.replace(/a|e|i|o|u/g, function (keys) {
        if (keys === 'a') {
            return a;
        }
        else if (keys === 'e') {
            return e;
        }
        else if (keys === 'i') {
            return i;
        }
        else if (keys === 'o') {
            return o;
        }
        else if (keys === 'u') {
            return u;
        }
    });
    encryptedText.value = encrypting;
    if (encrypting.length == 0) {
        alert("Digite algo para encriptografar!")
    } else {
        encryptForm.reset(); //It's erasing what was typed after the alert appeared???
    }
    return encrypting;
};

// Makes what is in the second textarea disappear and appear in the first, decrypted.
function toDecrypt(event) {
    event.preventDefault();
    let textTodecrypt = encryptedText.value;

    let decrypting = textTodecrypt.replace(/ai|enter|imes|ober|ufat/g, function (keys) {
        if (keys === 'ai') {
            return "a";
        }
        else if (keys === "enter") {
            return "e";
        }
        else if (keys === 'imes') {
            return "i";
        }
        else if (keys === 'ober') {
            return "o";
        }
        else if (keys === 'ufat') {
            return "u";
        }
    });
    toEncryptText.value = decrypting;
    if (textTodecrypt.length == 0) {
        alert("Digite algo para descriptografar!")
    } else {
        decryptForm.reset(); //It's erasing what was typed after the alert appeared???
    }
    return decrypting;
};
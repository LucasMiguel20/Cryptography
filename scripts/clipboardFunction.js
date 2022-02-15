// To copy to the clipboard
copyTextToEncryptBtn.addEventListener("click", function copyNormalTextToclipboard(event) {
    event.preventDefault();
    toEncryptText.select();
    navigator.clipboard.writeText(toEncryptText.value);
    alert("Texto não criptografado copiado: " + toEncryptText.value);
});

copyTextToDecryptBtn.addEventListener("click", function copyEncryptedTextToclipboard(event) {
    event.preventDefault();
    encryptedText.select();
    navigator.clipboard.writeText(encryptedText.value);
    alert("Texto criptografado copiado: " + encryptedText.value);
});
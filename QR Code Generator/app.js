const api = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

const inputBox = document.querySelector("#inputbox");
const imgTag = document.querySelector("#imgtag");

const generateQr = () =>{
    if(inputBox.value == ""){
        alert("Pleace Enter Text or Link here...");
        return
    }
    imgTag.src= api + inputBox.value;
    inputBox.value = "";
}
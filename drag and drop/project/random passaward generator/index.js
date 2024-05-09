const passawardBox =document.getElementById("passaward");
const lenght =12;

const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghihklmnopqrstuvwxyz";
const number ="0123456789";
const symbol ="@#$%^&*()(){}[]<>/-=";
const allChars= upperCase +lowerCase +number+ symbol;

function createPassaward(){
    let passaward= "";
    passaward += upperCase[Math.floor(Math.random()*upperCase.length)];
    passaward += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    passaward += number[Math.floor(Math.random()*number.length)];
    passaward += symbol[Math.floor(Math.random()*symbol.length)];

    while(lenght >passaward.length){
        passaward += allChars[Math.floor(Math.random()*allChars.length)]

    }
    passawardBox.value =passaward;
}


function copyPassaward(){
    passawardBox.select();
    document.execCommand("copy"); 
}
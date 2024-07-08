const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let getPasswordEl=document.getElementById("getPassword")
let passwordOneEl=document.getElementById("passwordOne")
let passwordTwoEl=document.getElementById("passwordTwo")
let passwordLengthEl=document.getElementById("passwordLength")
let changeMode=document.getElementById("light-mode")

changeMode.addEventListener('click',function(){
    let changeColor=document.body
    changeColor.classList.toggle("dark-mode")
    if(changeColor.classList.contains('dark-mode')){
        changeMode.src="assets/icons8-dark-mode-50.png"
        
    }else{
        changeMode.src="assets/light-mode.png"
    }
    
})

getPasswordEl.addEventListener('click',generatePassword)
function generatePassword(){
    let passwordOne="";
    let passwordTwo="";
    let lengthRequired=passwordLengthEl.value;
    for(let i=0;i<lengthRequired;i++){
        let randomNumberOne=Math.floor(Math.random()*characters.length);
        let randomNumberTwo=Math.floor(Math.random()*characters.length);
        passwordOne+=characters[randomNumberOne]
        passwordTwo+=characters[randomNumberTwo]
    }
    passwordOneEl.textContent=passwordOne;
    passwordTwoEl.textContent=passwordTwo;

}

  
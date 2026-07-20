import './style.css';
const passwordInput=document.querySelector("#password");
const copyBtn=document.querySelector("#copyBtn");
const length=document.querySelector("#length");
const lengthValue=document.querySelector("#lengthValue");
const uppercase=document.querySelector("#uppercase");
const lowercase=document.querySelector("#lowercase");
const numbers=document.querySelector("#numbers");
const symbols=document.querySelector("#symbols");
const generateBtn=document.querySelector("#generateBtn");
const Strength=document.querySelector("#Strength");
const bar=document.querySelector("#bar");

length.addEventListener("input",()=>{

lengthValue.textContent=length.value;
});
generateBtn.addEventListener("click",()=>{
let characters="";
if(uppercase.checked){
    characters+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

if(lowercase.checked){
    characters+="abcdefghijklmnopqrstuvwxyz";
}
if(numbers.checked){
    characters+="0123456789";
}
if(symbols.checked){
    characters+="!@#%^&*()_+=[]{}<>?";
}
let password="";
for(let i=0;i<length.value;i++){
    let randomIndex=Math.floor(Math.random()*characters.length);
    password+=characters[randomIndex];
}
passwordInput.value=password;

let checkedCount=0;
if(uppercase.checked)checkedCount++;
if(lowercase.checked)checkedCount++;
if(symbols.checked)checkedCount++;
if(numbers.checked)checkedCount++;
if(length.value>=14 && checkedCount>=3){
    Strength.textContent="strong";
Strength.style.color="lime";
}
else if (length.value>=8 && checkedCount>=2){
Strength.textContent="medium";
}
else{
   Strength.textContent="weak"; 
}
});



copyBtn.addEventListener("click",()=>{
navigator.clipboard.writeText(passwordInput.value);
alert("password copied!");
});

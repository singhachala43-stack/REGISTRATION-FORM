const password = document.getElementById("password");
const toggle = document.getElementById("toggle");
const strength = document.getElementById("strength");

toggle.addEventListener("click", () => {

if(password.type === "password"){
password.type = "text";
toggle.textContent = "Hide";
}
else{
password.type = "password";
toggle.textContent = "Show";
}

});

password.addEventListener("input", () => {

let value = password.value;
let score = 0;

if(value.length >= 8) score++;
if(/[A-Z]/.test(value)) score++;
if(/[0-9]/.test(value)) score++;
if(/[^A-Za-z0-9]/.test(value)) score++;

if(value.length === 0){
strength.textContent = "";
}

else if(score <= 1){
strength.textContent = "Weak Password — use 8+ characters, uppercase, number & symbol";
strength.style.color = "red";
}

else if(score <= 3){
strength.textContent = "Medium Password";
strength.style.color = "orange";
}

else{
strength.textContent = "Strong Password";
strength.style.color = "green";
}

});
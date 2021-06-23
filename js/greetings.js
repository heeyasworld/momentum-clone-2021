
const loginForm = document.querySelector(".login-form");
const loginInput= document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    // greeting.innerText = `Hello ${username} You got this!`;
    // greeting.innerText = "Hello " + username;
    // 위의 두 코드는 동일한 결과 
    // `` <--- 백틱. 옵션키 + ₩ 키 누르기
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `💖 Hello, ${username} 💖`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}
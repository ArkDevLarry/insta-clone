let email = document.getElementById("email");
let password = document.getElementById("password");

let emailLabel = document.getElementById("emailLabel");
let passwordLabel = document.getElementById("passwordLabel");

let showOrHide = document.getElementById("showOrHide");

let signIn = document.getElementById("signIn");

let fadingImages = document.querySelectorAll(".fadingImages");

let frame1 = document.getElementById("frame1");


function displayImages(from, to) {

  let current = to;

 setInterval(function() {
    fadingImages[current].style.opacity='0';
    if (current == from) { 
        current= to+1;
    }
    current--;
    fadingImages[current].style.opacity='1';
  }, 4000);
}
displayImages(0, 3);

function btnFunc() {
    if(email.value !="" && password.value != "" && password.value.length >=6){
        signIn.style.backgroundColor = "#049bff";
        signIn.style.cursor="pointer";
        signIn.setAttribute("disabled", false)
        signIn.style.opacity = "1"
    } else{

        signIn.style.backgroundColor = "";
        signIn.style.cursor="not-allowed";
        signIn.setAttribute("disabled", true)
        signIn.style.opacity = "0.8"
    }
}

function check(){
    if(email.value == ""){
        emailLabel.style.fontSize = "12px";
        emailLabel.style.top = "10px";
        emailLabel.style.opacity= "0.7"
        email.style.paddingTop="0px";


    
    } else{
        emailLabel.style.fontSize = "10px";
        emailLabel.style.top = "2px";
        emailLabel.style.opacity= "0.7"
        email.style.fontSize = "12px"
        email.style.paddingTop="0px";

        
    }

    if(password.value==""){

        showOrHide.style.display = "none";
        passwordLabel.style.fontSize = "12px";
        passwordLabel.style.top = "10px";
        passwordLabel.style.opacity= "0.7"
        password.style.paddingTop="0px";

    } else if ( !(password.value=="") && password.type=="password" ) {
        showOrHide.innerHTML = "Show";
        showOrHide.style.display = "block";
        passwordLabel.style.fontSize = "10px";
        passwordLabel.style.top = "2px";
        passwordLabel.style.opacity= "0.7"
        password.style.fontSize = "12px"
        password.style.paddingTop="0px";
    }
     else{
        passwordLabel.style.fontSize = "10px";
        passwordLabel.style.top = "2px";
        passwordLabel.style.opacity= "0.7"
        password.style.fontSize = "12px"
        password.style.paddingTop="0px";

        showOrHide.innerText = "Hide";
        showOrHide.style.display = "block";
    }

    
    btnFunc()
}

btnFunc()

email.addEventListener("input", function () {
    check()
})
password.addEventListener("input", function () {
    check()
})
showOrHide.addEventListener("click", function () {
    if (password.type == "password") {
        password.type = "text"
        showOrHide.innerText = "Hide"
        return
    }
    password.type = "password"
    showOrHide.innerText = "Show"
})
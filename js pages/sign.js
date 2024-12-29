const form=document.getElementById("form");
const login_btn=document.getElementById("login_btn")
const errmsg1=document.getElementById("errmsg1");
const errmsg2=document.getElementById("errmsg2")
const email_reg=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const pass_reg=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const eye_icon=document.getElementById("eye_icon")


function form_validation(){
    const email=document.getElementById("email1").value.trim();
    const password=document.getElementById("password").value.trim();
    let isvalid=true;

    if(email === " "){
        errmsg1.textContent="Please Enter Your Email";
        isvalid=false;
    }else if(email != localStorage.getItem('Email')){
        errmsg1.textContent="Incorrect Email ,please Enter vaild email ";
        isvalid=false;
    }else{
        errmsg1.textContent="";
    }  

    if(password === " "){
        errmsg2.textContent="Please Enter password";
        isvalid=false;
    }else if(password != localStorage.getItem('password')){
        errmsg2.textContent="incorrect password ";
        isvalid=false;
    }else{
        errmsg2.textContent="";
    }
    login_btn.disabled= !isvalid;
}

form.addEventListener("input",form_validation);
form.addEventListener("submit",function(e){
    e.preventDefault();
    if(!login_btn.disabled){
        alert("Welcome Back")
        window.location.href="home.html"
    }
})


eye_icon.addEventListener("click",function(){
    const password=document.getElementById("password");
    if(password.getAttribute("type") === "password"){
        password.setAttribute("type","text")
    }else{
        password.setAttribute("type","password")
    }
    eye_icon.classList.toggle('fa-eye-slash')
    eye_icon.classList.toggle('fa-eye')

})
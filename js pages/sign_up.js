const form=document.getElementById("form");
const errmsg1=document.getElementById("errmsg");
const errmsg2=document.getElementById("errmsg2");
const errmsg3=document.getElementById("errmsg3");
const errmsg4=document.getElementById("errmsg4");
const submit_btn=document.getElementById("submit_btn")
const name_reg=/[A-Za-z\s]{3,}$/;
const email_reg=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const pass_reg=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function input_validation(){
    const name_value=document.getElementById("username").value.trim();
    const email=document.getElementById("Email1").value.trim();
    const password=document.getElementById("password").value.trim();
    const confirm_pass=document.getElementById("confirm_pass").value.trim();
   
    console.log(name_value)

    let isvalid=true;

    if(name_value === ""){
        errmsg1.textContent="First Name is Required";
        isvalid=false;
    }else if(!name_reg.test(name_value)){
        errmsg1.textContent="please Enter valid Name";
        isvalid=false;
    }else{
        errmsg1.textContent=""
    }

    if(email === " "){
        errmsg2.textContent="Please Enter Your Email";
        isvalid=false;
    }else if(!email_reg.test(email)){
        errmsg2.textContent="please Enter valid email";
        isvalid=false;
    }else{
        errmsg2.textContent="";
    }  

    if(password === ""){
        errmsg3.textContent="Please Enter password";
        isvalid=false;
    }else if(!pass_reg.test(password)){
        errmsg3.textContent="please Enter A strong password";
        isvalid=false;
    }else{
        errmsg3.textContent="";
    }

    if(confirm_pass === " "){
        errmsg4.textContent="please Copy Your Password here";
        isvalid=false;
    }else if(confirm_pass !== password){
        errmsg4.textContent="Password not match";
        isvalid=false;
    }else{
        errmsg4.textContent="";
    }

    submit_btn.disabled = !isvalid;
}   

form.addEventListener("input",input_validation)
form.addEventListener("submit",function(e){
    e.preventDefault();
    if(!submit_btn.disabled){
        const name_value=document.getElementById("username").value.trim();
        const email=document.getElementById("Email1").value.trim();
        const password=document.getElementById("password").value.trim();
        // alert(`Hello , ${name_value}`)
        Swal.fire({
            title: "Sign Up Successfully !",
            text: `Hello ,${name_value}` ,
            icon: "success"
          });
        window.location.href="home.html";
        localStorage.setItem("Email",email);
        localStorage.setItem("password",password)
    }
})



const eye_icon=document.getElementById("eye_icon")
const eye_icon_confirm=document.getElementById("eye_icon_confirm")

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

eye_icon_confirm.addEventListener("click",function(){
    const confirm_pass=document.getElementById("confirm_pass")
    if(confirm_pass.getAttribute("type") === "password"){
        confirm_pass.setAttribute("type","text")
    }else{
        confirm_pass.setAttribute("type","password")
    }
    eye_icon_confirm.classList.toggle('fa-eye-slash')
    eye_icon_confirm.classList.toggle('fa-eye')

})






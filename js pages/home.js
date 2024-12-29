 
 const navbar=document.getElementById("navbar")
 const nav_link=document.querySelectorAll("nav-link");
 const light_icon=document.getElementById("light_icon");
 const dark_icon=document.getElementById("dark_icon")
 const togler=document.querySelector('.navbar-toggler');
 const about_h1=document.getElementById("about_h1");
 const about_p=document.getElementById("about_p");
 const about_p2=document.querySelector(".about_icon_p");
 const div_title=document.querySelectorAll(".div_title");
 const feedback_text=document.querySelectorAll(".feedback_text");
 const contac_div=document.querySelector(".contac_div");

 dark_icon.addEventListener("click",function(){
         document.body.style.backgroundColor="black";
         dark_icon.style.visibility='hidden';
         light_icon.style.visibility="visible"
         navbar.style.backgroundColor="#181e38"; 
         togler.style.backgroundColor="#06bacb";
         about_h1.style.color="white";
         about_p.style.color="white";
         about_p2.style.color="white";
        div_title.forEach((title) =>{
                title.style.color="white"
        })
        feedback_text.forEach((item)=>{
            item.style.color="#06BBCC"
        }) 
        contac_div.style.color="#06BBCC"
 })


light_icon.addEventListener("click",function(){
            document.body.style.backgroundColor="white";
            navbar.style.backgroundColor="#f0fcfc";
            dark_icon.style.visibility='visible';
            light_icon.style.visibility="hidden";
            togler.style.backgroundColor="#f0fcfc";
            about_h1.style.color="black";
            about_p.style.color="black";
            about_p2.style.color="black";
        div_title.forEach((title) =>{
                title.style.color="black"
        })
        feedback_text.forEach((item)=>{
                item.style.color="black"
        }) 
        contac_div.style.color="black"     
})


const favicon=document.querySelectorAll('.favicon')
favicon.forEach((icon) => {
        icon.addEventListener("click",function(){
                if(icon.style.color == "black"){
                        icon.style.color="red"
                }else{
                        icon.style.color="black"
                }
        })    
});
 
const scroll_btn=document.querySelector(".scroll_btn");
window.addEventListener("scroll",function(){
        if(window.scrollY >= 300){
              scroll_btn.style.visibility="visible"
        }else{
              scroll_btn.style.visibility="hidden"  
        }
})
scroll_btn.addEventListener("click",function(){
        window.scrollTo({
         top:0,
         behavior:"smooth"
        })
});


const div_star=document.querySelectorAll(".div_star");
console.log(div_star)

div_star.forEach((div) => {
const p_rating=div.querySelector(".star_rating_p1");
const star_rating=div.querySelectorAll(".star_rating i");
console.log(star_rating);
star_rating.forEach((star,index) => {
        star.addEventListener("mouseenter",function(){
                star_rating.forEach((star1,index1) => {
                        if(index1 <= index){
                                star1.style.color="gold";
                        }
                })   
        })

        star.addEventListener("click",function(){
                const curentStar=index+1;
                p_rating.textContent=`${curentStar} of 5`
                star_rating.forEach((star1,index1)=>{
                        if(index1 < curentStar){
                                star1.style.color="gold"
                                star1.classList.add("selected")
                        }
                        else{
                                star1.style.color="#06BBCC";
                                star1.classList.remove("selected")
                        }
                })

        })

        star.addEventListener("mouseleave",function(){
                star_rating.forEach((star1) => {
                        if(!star1.classList.contains("selected")){
                            star1.style.color="#06BBCC"
                        } 
                })
        })

})
})



const read_more_p=document.getElementById('read_more_p')
function read_more(){
        read_more_p.textContent="Hello I am read more paragraph"
}












 
 
 const dark_icon= document.getElementById("dark_icon");
 const navbar=document.getElementById("navbar")
 const nav_link=document.querySelectorAll("nav-link");
 const light_icon=document.getElementById("light_icon")
 const togler=document.querySelector('.navbar-toggler');

 dark_icon.addEventListener("click",function(){
         document.body.style.backgroundColor="black";
         document.body.style.color="#06bacb"
         dark_icon.style.visibility='hidden';
         light_icon.style.visibility="visible"
         navbar.style.backgroundColor="#181e38";  
         togler.style.backgroundColor="#06bacb";     
 })

light_icon.addEventListener("click",function(){
            document.body.style.backgroundColor="white";
            navbar.style.backgroundColor="white";
            dark_icon.style.visibility='visible';
            light_icon.style.visibility="hidden";
            togler.style.backgroundColor="#f0fcfc";

         })



 
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
})


const courses=[
        {
                "picture":"img/fc6f52ff1691fd7c40061f4d251bac76.png",
                "title":"Introduction to C++",
                "price":"$125.00",
                "lect_num":"100 lectures( 100 hrs )",
                "rating":"(5,0)",
                "pric_details":"$ 125 All Courses / $25 per month",
                "path":"https://www.youtube.com/watch?v=XDuWyYxksXU&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS"
        },
        {
                "picture":"img/065b916e08a0484ef2402bbb1e2805a5.png",
                "title":"Introduction to Java",
                "price":"$120.00",
                "lect_num":"90 lectures( 100 hrs )",
                "rating":"(5,0)",
                "pric_details":"$ 120 All Courses / $20 per month",
                "path":"https://www.youtube.com/playlist?list=PL1DUmTEdeA6K7rdxKiWJq6JIxTvHalY8f"
        },
        {
                "picture":"img/3c211f7a47a182acfffebae84c72bd7a.png",
                "title":"Introduction to JavaScript",
                "price":"$147.00",
                "lect_num":"188 lectures( 82 hrs )",
                "rating":"(5,0)",
                "pric_details":"$ 147 All Courses / $25 per month",
                "path":"https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv"
        },
        {
                "picture":"img/f6b8b46d102165e0748386cafb1bf00c.png",
                "title":"Introduction to SQL ",
                "price":"$200.00",
                "lect_num":"80 lectures( 50 hrs )",
                "rating":"(5,0)",
                "pric_details":"$ 200 All Courses / $30 per month",
                "path":"https://www.youtube.com/playlist?list=PL1DUmTEdeA6J6oDLTveTt4Z7E5qEfFluE"

        },
        {
                "picture":"img/854f86f853aa1c0b1e55260e0d9cd097.png",
                "title":"Introduction to Wordpres",
                "price":"50.00",
                "lect_num":"20 lectures( 15 hrs )",
                "rating":"(5,0)",
                "pric_details":"$ 50 All Courses / $10 per month",
                "path":"https://www.youtube.com/playlist?list=PLDoPjvoNmBAwCNR-UIRft5YuVlZKrYh20"

        },
        {
                "picture":"img/kisspng-logo-html-brand-font-cascading-style-sheets-easy-html-html-js-css-editor-amp-viewer-vers-5bf8a8fa66ac49.3519574315430228424206.png",
                "title":"Introduction to Html 5",
                "price":" $20.00",
                "lect_num":"44 lectures( 5 hrs )",
                "rating":"(5,0)",
                "pric_details":"$ 44 All Courses / $22 per month",
                "path":"https://www.youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji"

        },
        {
                "picture":"img/kisspng-learning-python-computer-programming-programming-l-python-5b2231284b5f28.7075361215289674643087.png",
                "title":"Introduction to Python",
                "price":" $250.00",
                "lect_num":"200 lectures( 82 hrs )",
                "rating":"(5,0)",
                "pric_details":"$ 250 All Courses / $ 50 per month",
                "path":"https://www.youtube.com/playlist?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs"

        },
        {
                "picture":"img/4116376ed3f9fe98f5a18dd0be047f02.png",
                "title":"Introduction to CSS",
                "price":"$160.00",
                "lect_num":"88 lectures( 12 hrs )",
                "rating":"(5,0)",
                "pric_details":"$ 160 All Courses / $ 80 per month",
                "path":"https://www.youtube.com/playlist?list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe"

        },
        {
                "picture":"img/3599173963dc3b2964a1a3d74e5074d4.png",
                "title":"Introduction to C#",
                "price":"$150.00",
                "lect_num":"100 lectures( 50 hrs )",
                "rating":"(5,0)",
                "pric_details":"$ 150 All Courses / $ 50 per month",
                "path":"https://www.youtube.com/playlist?list=PLsV97AQt78NT0H8J71qe7edwRpAirfqOI"

        }
]


function displaycourses(){
for (let i = 0 ; i < courses.length ; i++){
        
        const main_div=document.getElementById("main_div");

        const res_div=document.createElement("div");
        res_div.className="col-lg-4 col-md-4 col-sm-12 pcourse_div mb-5";

        const div_for_card=document.createElement('div');
        div_for_card.className="card text-center border-0";
        div_for_card.id="card_div"

        const div_card_img=document.createElement('div');
        div_card_img.className="div_card_img";
        const picture=document.createElement("img");
        picture.src=courses[i].picture;
        picture.className="card-img-top card_img" 
        div_card_img.append(picture);

        const card_body=document.createElement('div');
        card_body.className="card-body card_div";

        const title=document.createElement('p');
        title.className="text-dark p_in_pcourses fw-bold";
        title.textContent=courses[i].title;
        card_body.appendChild(title);

        const price=document.createElement('h5');
        price.className="card-title";
        price.textContent=courses[i].price;
        card_body.appendChild(price);


        const lect=document.createElement('p');
        lect.className="text-center";
        lect.textContent=courses[i].lect_num;
        card_body.appendChild(lect);

        const favicon=document.createElement('li');
        favicon.className="fa-solid fa-heart favicon";
        card_body.appendChild(favicon);

        const rating=document.createElement('p');
        rating.className="Star_rating";
        for(let j=0; j<=4 ; j++){
                const stars=document.createElement('li');
                stars.className="fa-solid fa-star star_icon";
                rating.appendChild(stars)   
        }
        const ratingValue = document.createElement('span');
        ratingValue.className = "rating-value";
        ratingValue.textContent = courses[i].rating;
        rating.appendChild(ratingValue)
        card_body.appendChild(rating);

        const price_details_div=document.createElement('div');
        price_details_div.className="div_for_p_incard_price";
        const pric_details=document.createElement('p');
        pric_details.className="p_price_incard"
        pric_details.textContent=courses[i].pric_details;
        price_details_div.appendChild(pric_details)
        card_body.appendChild(price_details_div);

        const link=document.createElement('a');
        link.href=courses[i].path;
        const button=document.createElement('button');
        button.className="enroll_btn";
        button.textContent="Start Now";
        link.appendChild(button);
        card_body.appendChild(link);

        div_for_card.appendChild(div_card_img)
        div_for_card.appendChild(card_body)
        res_div.appendChild(div_for_card)
        main_div.appendChild(res_div);
        favicon_click();
}
}
displaycourses();



function favicon_click(){
        const favicon=document.querySelectorAll('.favicon');
        favicon.forEach((icon) => {
                icon.addEventListener("click",function(){
                        if(icon.style.color == "black"){
                                icon.style.color="red";

                        }else{
                                icon.style.color="black"
                        }
                })    
        });
        }















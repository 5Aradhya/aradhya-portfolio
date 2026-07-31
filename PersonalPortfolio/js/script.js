//==============================
// DARK / LIGHT MODE
//==============================

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }

    else{

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});
//==============================
// SMOOTH SCROLL
//==============================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});
//==============================
// NAVBAR SHADOW
//==============================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";

    }

    else{

        header.style.boxShadow="none";

    }

});
//==============================
// SCROLL TOP
//==============================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
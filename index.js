// IMAGE SLIDER
let slides = document.querySelectorAll(".slide");
let current = 0;

function nextSlide(){
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
}

setInterval(nextSlide, 4000);


// SMOOTH SCROLL
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}


// NAVBAR SCROLL EFFECT
window.addEventListener("scroll",()=>{
    let nav = document.getElementById("navbar");
    nav.classList.toggle("scrolled",window.scrollY>50);
});


// FORM VALIDATION
document.getElementById("admissionForm").addEventListener("submit",function(e){
    e.preventDefault();

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("phone").value;

    if(name.length<3){
        showMsg("Enter valid name",true);
        return;
    }

    if(!email.includes("@")){
        showMsg("Enter valid email",true);
        return;
    }

    if(phone.length<10){
        showMsg("Enter valid phone number",true);
        return;
    }

    showMsg("Form submitted successfully! We will contact you soon.",false);
    this.reset();
});

function showMsg(msg,error){
    let el=document.getElementById("formMsg");
    el.textContent=msg;
    el.style.color= error ? "red" : "green";
}


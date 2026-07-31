/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 800);

});

/* ==========================================
   AOS
========================================== */

AOS.init({

    duration:1000,

    once:true,

    easing:"ease-in-out"

});

/* ==========================================
   TYPING EFFECT
========================================== */

new Typed("#typing",{

    strings:[

        "AI & Machine Learning Student",

        "Frontend Developer",

        "Competitive Programmer",

        "Python Learner",

        "Future AI Engineer"

    ],

    typeSpeed:70,

    backSpeed:45,

    loop:true,

    backDelay:1500

});

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

window.addEventListener("scroll",()=>{

    const scrollTop=document.documentElement.scrollTop;

    const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const progress=(scrollTop/scrollHeight)*100;

    document.getElementById("progress-bar").style.width=progress+"%";

});

/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================================
   NAVBAR EFFECT
========================================== */

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.style.background="rgba(2,6,23,.92)";

        navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

    }

    else{

        navbar.style.background="rgba(15,23,42,.65)";

        navbar.style.boxShadow="none";

    }

});

/* ==========================================
   DARK / LIGHT MODE
========================================== */

const themeBtn=document.querySelector(".theme-btn");

let dark=true;

themeBtn.addEventListener("click",()=>{

    if(dark){

        document.body.style.background="#f8fafc";

        document.body.style.color="#111827";

        themeBtn.innerHTML='<i class="fas fa-sun"></i>';

        dark=false;

    }

    else{

        document.body.style.background="#050816";

        document.body.style.color="#ffffff";

        themeBtn.innerHTML='<i class="fas fa-moon"></i>';

        dark=true;

    }

});

/* ==========================================
   VANILLA TILT
========================================== */

VanillaTilt.init(

    document.querySelectorAll(

        ".project-card,.skill-card,.coding-card,.roadmap-card,.achievement-card"

    ),

    {

        max:10,

        speed:400,

        glare:true,

        "max-glare":0.25

    }

);
/* ==========================================
   ACTIVE NAVIGATION LINK
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
   SMOOTH SCROLL
========================================== */

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* ==========================================
   CONTACT FORM
========================================== */



/* ==========================================
   ACHIEVEMENT COUNTER
========================================== */

const counters = document.querySelectorAll(".achievement-card h1");

const animateCounter = (counter) => {

    const text = counter.innerText;

    const number = parseInt(text);

    if (isNaN(number)) return;

    let count = 0;

    const speed = Math.max(10, Math.floor(1500 / number));

    const update = () => {

        if (count < number) {

            count++;

            if (text.includes("+")) {
                counter.innerText = count + "+";
            } else {
                counter.innerText = count;
            }

            setTimeout(update, speed);

        } else {

            counter.innerText = text;

        }

    };

    update();

};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));

/* ==========================================
   FLOATING BACKGROUND PARTICLES
========================================== */

if (typeof particlesJS !== "undefined") {

    particlesJS("particles-js", {

        particles: {

            number: {

                value: 60,

                density: {

                    enable: true,

                    value_area: 800

                }

            },

            color: {

                value: "#00d9ff"

            },

            shape: {

                type: "circle"

            },

            opacity: {

                value: 0.5

            },

            size: {

                value: 3

            },

            line_linked: {

                enable: true,

                distance: 150,

                color: "#00d9ff",

                opacity: 0.4,

                width: 1

            },

            move: {

                enable: true,

                speed: 2

            }

        }

    });

}

/* ==========================================
   REVEAL ANIMATION
========================================== */

const revealItems = document.querySelectorAll(

    ".project-card,.skill-card,.coding-card,.roadmap-card,.achievement-card"

);

const reveal = () => {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();

/* ==========================================
   CURSOR GLOW
========================================== */

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "20px";
glow.style.height = "20px";
glow.style.borderRadius = "50%";
glow.style.background = "rgba(0,217,255,.35)";
glow.style.pointerEvents = "none";
glow.style.filter = "blur(10px)";
glow.style.zIndex = "99999";

document.body.appendChild(glow);

window.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX - 10 + "px";
    glow.style.top = e.clientY - 10 + "px";

});

/* ==========================================
   CURRENT YEAR IN FOOTER
========================================== */

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML = `© ${year} Sanat Tripathi. All Rights Reserved.`;

}

console.log("🚀 Portfolio Loaded Successfully");

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll section active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
            });
            
            // Adding the 'active' class to the corresponding navigation link
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        };
    });

    // Sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window. scrollY > 100);

    // Remove toggle icon and navbar when click navbar link
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*----------------------------------Scroll Reveal---------------------------*/
ScrollReveal({ 
    /*reset: true,*/
    distance: "80px",
    duration: 3000,
    delay: 300
});

ScrollReveal().reveal('.home-content,.heading', { origin : "top" });
ScrollReveal().reveal('.home-img,.home-contianer,.portfolio-box,.contact-form',{ origin : "bottom" });
ScrollReveal().reveal('.home-content h1,.about-img',{ origin : "left" });
ScrollReveal().reveal('.home-content p,.about-content',{ origin : "right" });

/*----------------------------------Scroll Reveal---------------------------*/

const typed = new Typed (".multiple-text", {
    strings : ['Web Developer','SEO Analyst'],
    typeSpeed :100,
    backSpeed :100,
    backDelay :1000,
    loop : true
});
/*---------------------------------------To Link Whatsapp ------------------*/


function sendWhatsapp(){
    var phoneNumber = "+919344206673";
    var name = document.getElementById('name').value;
    var phonenumber = document.getElementById('mobilenumber').value;
    var email = document.getElementById('email').value;
    var message = document.querySelector('.input-text').value;
    
    var url = "https://wa.me/" + phoneNumber + "?text=" + "*Name* :" + name +"%0a"+
       "*PhoneNumber* :" + phonenumber +"%0a" +
       "*Email* :" + email +"%0a"+
       "*Message* :" + message +"%0a%0a";
       
       window.open(url,'_blank').focus();
       
}
const fromOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw-hide");

fromOpenBtn.addEventListener("click", () => home.classList.add("show"))
formCloseBtn.addEventListener("click", () => home.classList.remove("show"))

pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput.type === "password")
        {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash","uil-eye");
        }
        else{
            getPwInput.type = "password";
            icon.classList.replace("uil-eye","uil-eye-slash");
        }
    });
});

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active")
})

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active")
})



const link = 'https://nahida-chowdhury.github.io/Login_Register_page/';
const msg = encodeURIComponent('');
const title = encodeURIComponent(document.querySelector('title').textContent);

console.log([link, msg, title]);

const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/sharer/sharer.php?u=${link}&quote=${msg}%20${title}`;

const whatsapp = document.querySelector('.whatsapp');
whatsapp.href = `https://api.whatsapp.com/send?text=${msg}%20${link}`;

const twitter = document.querySelector('.twitter');
twitter.href = `https://twitter.com/intent/tweet?url=${link}&text=${msg}%20${title}`;

const linkedin = document.querySelector('.linkedin');
linkedin.href = 'https://www.linkedin.com/shareArticle?mini=true&url=${link}&title=${title}&summary=${msg}';
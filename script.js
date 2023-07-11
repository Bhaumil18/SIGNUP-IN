const signup = document.querySelector(".signup"),
signin = document.querySelector(".signin"),
slider1 = document.querySelector(".slider1"),
slider2 = document.querySelector(".slider2");

const btn1 = document.querySelector(".btn1"),
btn2 = document.querySelector(".btn2");

btn1.onclick = () =>
{
    slider1.classList.add("slide");
    signup.classList.add("slide");
    signin.classList.add("slide");
    slider2.classList.add("slide");
}
btn2.onclick = () =>
{
    slider1.classList.remove("slide");
    signup.classList.remove("slide");
    signin.classList.remove("slide");
    slider2.classList.remove("slide");
}

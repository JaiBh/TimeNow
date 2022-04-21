const toggle = document.querySelector(".switch")
const ball = document.querySelector(".ball");
const monthlyDOM = document.getElementById("monthly");
const yearlyDOM = document.getElementById("yearly")

toggle.addEventListener("click", function(){
    ball.classList.toggle("ball-right");
    yearlyDOM.classList.toggle("active-plan");
    monthlyDOM.classList.toggle("active-plan");
})
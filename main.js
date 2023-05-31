document.querySelector("#show-login").addEventListener("click", function() {
    document.querySelector(".popUp").classList.add("active");
    document.querySelector(".overlay").style.display = "block";
/*     document.body.classList.add("blur"); 
 */});

document.querySelector(".popUp .close-btn").addEventListener("click", function() {
    document.querySelector(".popUp").classList.remove("active");
    document.querySelector(".overlay").style.display = "none";
    /* document.body.classList.remove("blur"); */
});


let hamburgerbutton = document.getElementById("hamburger-btn");
let navoverlay = document.querySelector("#nav-overlay-smscreens");
let closenavoverlay = document.querySelector("#close-nav-overlay-smscreens")

hamburgerbutton.addEventListener("click" , () => {
    navoverlay.classList.remove("hidden");
  document.body.classList.add("no-scroll");
})
closenavoverlay.addEventListener("click", () =>{
    navoverlay.classList.add("hidden");
     document.body.classList.remove("no-scroll")
})
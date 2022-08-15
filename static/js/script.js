//Smooth scrolling//
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

//Disables down arrow on scroll//
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("down-arrow").style.display = "block";
  } else {
    document.getElementById("down-arrow").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
}

//About section slides from left using observer//
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if (entry.isIntersecting) {
      entry.target.classList.add("text-animation");
    }
  });
});

observer.observe(document.querySelector(".about-section h1"));
observer.observe(document.querySelector(".about-section h2"));
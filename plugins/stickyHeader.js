// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
  
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 150;
  
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }
  
//   window.addEventListener("scroll", reveal);


function scrollFunction() {
  let y = screen.availHeight;
  
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("page-header-section").classList.add("sub-page");
    document.getElementById("page-header-section").classList.remove("home-header");

    console.log("not top");
  } else {
    
    document.getElementById("page-header-section").classList.remove("sub-page");
    document.getElementById("page-header-section").classList.add("home-header");
     console.log("top");
    
  }
}

window.addEventListener("scroll", scrollFunction);
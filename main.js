let body = document.body;
let cta = document.getElementById("cta");

if (cta) {
  cta.addEventListener("click", () => {
    displayMessage("Submission Successfull!", "success");
  });
}

function displayMessage(str, type) {
  let msgCard = document.createElement("div");
  msgCard.innerText = str;
  msgCard.classList.add("msg-card");
  if (type == "success") {
    msgCard.classList.add("success");
  } else if (type == "warning") {
    msgCard.classList.add("warning");
  }
  body.append(msgCard);
  setTimeout(function () {
    msgCard.style.display = "none";
    body.removeChild(msgCard);
  }, 2900);
}

// displayMessage('Testing Message','success');//Success message
// displayMessage('Testing Message','warning');//Error Message

// // Toggle Swtich Functionality
// let toggleBtn= document.querySelector('#toggle input[type="checkbox"]');

// toggleBtn.addEventListener('click',()=>{
//   if(toggleBtn.checked){
//     document.body.classList.add('light-mode');
//   }else{
//     document.body.classList.remove('light-mode');
//   }
// })
let loginBtn = document.querySelector("#loginBtn");
let userId = JSON.parse(localStorage.getItem("userId"));
let loginCont = document.querySelector("#login-container");
let logoutCont = document.querySelector("#login-container>div");
let logoutBtn = document.getElementById("logout-btn");

if (userId === null) {
  loginBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });
} else {
  console.log(userId);
  loginBtn.style.display = "none";
  logoutCont.style.display = "block";
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("userId");
    displayMessage("Logged Out Successfully", "success");
  });
}

// FOR ANIMATION
// Select the sections with the fade-in class
// Select the sections with the fade-in class
const sections = document.querySelectorAll(".fade-in");

// Create an Intersection Observer instance
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
); // Adjust the threshold value as needed

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});

// Responsive nav
let resNav = document.querySelector(".responsive-nav>.fa-bars");
let resContent = document.querySelector(".responsive-nav-content");
resNav.addEventListener("click", () => {
  resContent.classList.toggle("responsive-nav-active");
});

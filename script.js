//  Dark mode funtion

const darkMode = document.getElementsByClassName("dark_mode")[0];

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("active");

  if (document.body.classList.contains("active")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

const userTheme = localStorage.getItem("theme");
if (userTheme === "dark") {
  document.body.classList.add("active");
} else {
  document.body.classList.remove("active");
}

// Scrooll Behaviour
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 1000,
   interval: 190,
  reset: false,
});

sr.reveal(".heroBox");

sr.reveal("#img", {
  origin: "bottom",
  distance: "80px",
  duration: 1000,
   interval: 190,
  reset: false,
});

sr.reveal(".text", {
  origin: "left",
  distance: "80px",
  duration: 1000,
  interval: 190,
  reset: false,
});

sr.reveal(".project_contact");

sr.reveal("#percorsoTech");

sr.reveal(".aboutColumn");

sr.reveal(".skillsColumn");

sr.reveal(".blue");

sr.reveal(".eduColumn");

sr.reveal(".certificate");

sr.reveal(".techSkills", {
  origin: "left",
  distance: "80px",
  duration: 1000,
   interval: 190,
  reset: false,
});

sr.reveal(".projectBox", {
  origin: "bottom",
  distance: "80px",
  duration: 1000,
  interval: 190,
  reset: false,
});

sr.reveal(".projectDescription", {
  origin: "left",
  distance: "80px",
  duration: 1000,
  interval: 190,
  reset: false,
});

sr.reveal(".description", {
  origin: "left",
  distance: "80px",
  duration: 1000,
  interval: 190,
  reset: false,
});

sr.reveal(".certDescription");

sr.reveal(".greet", {
  origin: "left",
  distance: "80px",
  duration: 1000,
  interval: 190,
  reset: false,
});

sr.reveal(".intro", {
  origin: "left",
  distance: "80px",
  duration: 1000,
  interval: 190,
  reset: false,
});

sr.reveal(".content", {
  origin: "left",
  distance: "80px",
  duration: 1000,
   interval: 190,
  reset: false,
});

sr.reveal(".contact");

sr.reveal(".certBox", {
  origin: "left",
  distance: "80px",
  duration: 1000,
  interval: 190,
  reset: false,
});

sr.reveal(".mySkills", {
  origin: "left",
  distance: "80px",
  duration: 1000,
  interval: 190,
  reset: false,
});

const navItems = document.getElementsByClassName("navItems")[0];

const menu = document.getElementsByClassName("menu")[0];

menu.addEventListener("click", () => {
  navItems.classList.toggle("active");

  if (navItems.classList.contains("active")) {
    menu.textContent = "✕";
  } else {
    menu.textContent = "☰";
  }
});

// Close the nav Bar when user taps on any link
const navLinks = document.querySelectorAll(".navItems a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navItems.classList.remove("active");
  });
});

const greet = document.getElementsByClassName("greet")[0];
greet.addEventListener("click", () => {
  greet.textContent = "Hi, I,m 👋";
});

// Function to close the navBar when user taps outside of it.

document.addEventListener("click", (event) => {
  if (
    navItems.classList.contains("active") &&
    !navItems.contains(event.target) &&
    !menu.contains(event.target)
  ) {
    navItems.classList.remove("active");
  }
});

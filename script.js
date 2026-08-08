// Scrooll Behaviour
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 900,
  delay: 200,
  reset: false,
});

sr.reveal(".heroBox");

sr.reveal("#img", {
  origin: "bottom",
  distance: "80px",
  duration: 1000,
  interval: 200,
  reset: false,
});

sr.reveal(".text", {
  origin: "left",
  distance: "80px",
  duration: 1000,
  interval: 200,
  reset: false,
});

sr.reveal(".project_contact")

sr.reveal("#percorsoTech")

sr.reveal(".aboutColumn");

sr.reveal(".skillsColumn");

sr.reveal(".eduColumn", {
   origin: "left",
  distance: "80px",
  duration: 1000,
  interval: 200,
  reset: false,
});

sr.reveal

sr.reveal(".certColumn", {
  delay: 300,
});

sr.reveal(".techSkills", {
  origin: "left",
  distance: "80px",
  duration: 1000,
  interval: 200,
  reset: false,
});

sr.reveal(".projectBox", {
  origin: "bottom",
  distance: "80px",
  duration: 1000,
  interval: 200,
  reset: false,
});

sr.reveal(".projectDescription", {
  origin: "left",
  distance: "80px",
  duration: 1000,
  interval: 200,
  reset: false,
});

sr.reveal(".description", {
  origin: "left",
  distance: "80px",
  duration: 1000,
  interval: 200,
  reset: false,
});

sr.reveal(".intro", {
  origin: "left",
  distance: "80px",
  duration: 1000,
  interval: 200,
  reset: false,
});



sr.reveal(".content", {
  origin: "left",
  distance: "80px",
  duration: 1000,
  interval: 200,
  reset: false,
});

sr.reveal(".contact");

sr.reveal(".mySkills", {
  origin: "left",
  distance: "80px",
  duration: 1000,
  interval: 200,
  reset: false,
});


const navItems = document.getElementsByClassName("navItems")[0];
const menu = document.getElementsByClassName("menu")[0];

const navLinks = document.querySelectorAll(".navItems a");

menu.addEventListener("click", () => {
  navItems.classList.toggle("active");

  if (navItems.classList.contains("active")) {
    menu.textContent = "✕";
  } else {
    menu.textContent = "☰";
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navItems.classList.remove("active");
  });
});

//  Dark mode funtion

const darkMode = document.getElementsByClassName("dark_mode")[0];

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("active");
});

const greet = document.getElementsByClassName("greet")[0];
greet.addEventListener("click", () => {
  greet.textContent = "Hi, I,m 👋";
});

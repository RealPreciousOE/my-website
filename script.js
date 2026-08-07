
 // Scrooll Behaviour
   const sr = ScrollReveal ({
    origin: "bottom",
    distance: "60px",
    duration: 900,
    delay: 200,
    reset: false
  })

  sr.reveal(".heroBox")
  sr.reveal("#img", {
   delay: 300
  })

  sr.reveal(".aboutColumn")

  sr.reveal(".skillsColumn")

  sr.reveal(".eduColumn")

  sr.reveal(".certColumn", {
   delay: 300
  })

  sr.reveal(".ProjectBox", {
   interval: 200
  })

  sr.reveal(".contact")

  sr.reveal("footer")








 const navItems = document.getElementsByClassName("navItems")[0]
 const menu = document.getElementsByClassName("menu")[0]

 const navLinks = document.querySelectorAll(".navItems a")

 menu.addEventListener("click", () => {
    navItems.classList.toggle("active")

    if(navItems.classList.contains("active")){
      menu.textContent = "✕"
    } else {
      menu.textContent = "☰"
    }
 })

 navLinks.forEach(link => {
   link.addEventListener("click", () => {
     navItems.classList.remove("active")
   })
 })

//  Dark mode funtion

const darkMode = document.getElementsByClassName ("dark_mode")[0]

darkMode.addEventListener("click", () => {
   document.body.classList.toggle("active")
})

 
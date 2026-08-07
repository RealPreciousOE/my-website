
 const navItems = document.getElementsByClassName("navItems")[0]
 const menu = document.getElementsByClassName("menu")[0]

 menu.addEventListener("click", () => {
    navItems.classList.toggle("active")
 })

 
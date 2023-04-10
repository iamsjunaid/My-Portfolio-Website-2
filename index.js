let hamIcon = document.querySelector('#horizontal-bars')
let navbar = document.querySelector('#navbar-menu')
let cross = document.querySelector('#cross')
let header = document.querySelector('header')
let navLinks = document.querySelectorAll('a.nav-link')

// console.log(navLinks)
cross.style.display = "none"
function menuClick() {
    if(cross.style.display = "none")
    cross.style.display = "block"
    hamIcon.style.display = "none"
    navbar.style.display = "block";
    navbar.style.width = "100%";
    header.style.height = "100%";
    header.style.background = "#6070ff"
    for(let link in navLinks){
        console.log(navLinks[link])
        // link.style.color= "#fff"
    }
    
}

function crossClick(){
    cross.style.display = "none"
    console.log('cross clicked')
    hamIcon.style.display = "block"
    navbar.style.display = "none";
    header.style.height = "10%";
    header.style.background = "#fff"
}


const hamburgerButton = document.getElementById("hamburgerButton")
const menu  = document.getElementById("menu");

hamburgerButton.addEventListener("click", (e)=> {
    if (e.target.className.includes("hamburgerButtonClicked")) { 
        hamburgerButton.classList.remove("hamburgerButtonClicked") 
    }
    
    else{
    hamburgerButton.classList.add("hamburgerButtonClicked")
    }

    if(menu.className.includes("menusIsOpen")){ 
        menu.classList.remove("menusIsOpen")
    }
    else { 
        menu.classList.add("menusIsOpen")
    }
}
)


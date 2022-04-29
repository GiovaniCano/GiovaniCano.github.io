function nav() {
    window.onscroll = ()=>{        
        const nav = document.querySelector(".js-nav")
        if(nav) {
            const navFill = document.querySelector(".js-nav-fill")
            let navFillTop = navFill.getBoundingClientRect().top
    
            const navTitle = document.querySelector(".js-nav-title")
            const navContainer = document.querySelector(".js-nav .container")
    
            if(navFillTop <= 0) {
                navTitle.classList.remove("hidden")
                nav.classList.add("nav-fixed")
                navContainer.classList.remove("nav-centered")
            } else {
                navTitle.classList.add("hidden")
                nav.classList.remove("nav-fixed")
                navContainer.classList.add("nav-centered")
            }
        }
    }
}

function menuMobile() {
    const menuMobile = document.querySelector(".js-menu-mobile") as SVGElement
    if(menuMobile) {
        menuMobile.onclick = ()=>{
            const modal = document.querySelector(".js-menu-mobile-modal")

            modal.classList.toggle("hidden")
            document.body.classList.toggle("no-scroll")

        }
    }
}
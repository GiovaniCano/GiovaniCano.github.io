function nav() {
    window.onscroll = ()=>{        
        const nav = document.querySelector(".js-nav-bar")
        if(nav) {
            const navFill = document.querySelector(".js-nav-fill")!
            let navFillTop = navFill.getBoundingClientRect().top
    
            const navTitle = document.querySelector(".js-nav-title")!
            const navContainer = document.querySelector(".js-nav-bar .container")!
    
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
    const menus = document.querySelectorAll(".js-menu-mobile") as NodeListOf<HTMLElement>
    if(menus) {
        menus.forEach(menuMobile => {
            menuMobile.onclick = ()=>{
                const modal = document.querySelector(".js-menu-mobile-modal")!
    
                modal.classList.toggle("hidden")
                document.body.classList.toggle("no-scroll")
            }
        })
    }

    // protect body's scroll when the modal menu is hidden because of the resize
    window.onresize = () => {
        const modal = document.querySelector(".js-menu-mobile-modal")! as HTMLElement
        if(window.getComputedStyle(modal).display == "none") {
            document.body.classList.remove("no-scroll")
        } else {
            document.body.classList.add("no-scroll")
        }
    }
}
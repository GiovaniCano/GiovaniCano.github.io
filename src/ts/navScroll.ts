function navScroll() {
    const as = document.querySelectorAll(".js-nav a")! as NodeListOf<HTMLLinkElement>
    const navTitle = document.querySelector(".js-nav-title")! as HTMLLinkElement
    const links = [...as, navTitle]

    links.forEach(link=>{
        link.onclick = (event) => {
            event.preventDefault()
            const id = link.getAttribute("href")!
            const section = document.querySelector(id)! as HTMLElement
            section.scrollIntoView({behavior:"smooth"})

            const modalMenu = document.querySelector(".js-menu-mobile-modal")! as HTMLElement
            if(!modalMenu.classList.contains("hidden")) {
                modalMenu.classList.add("hidden")
                document.body.classList.remove("no-scroll")
            }
        }
    })
}
let currentLanguage:string = "en"

function multiLingual() {
    const langIcons = document.querySelectorAll(".js-lang-icon")! as NodeListOf<HTMLElement>
    langIcons.forEach(icon=>{
        icon.onclick = e => {
            e.preventDefault()
            langIcons.forEach(icon=>{ //update all language buttons
                const en = icon.querySelector('[data-langIcon="en"]')
                const es = icon.querySelector('[data-langIcon="es"]')

                if(!en || !es) return

                if(en.classList.contains("active-lang")) { // en to es
                    en.classList.remove("active-lang")
                    es.classList.add("active-lang")
                } else { // es to en
                    en.classList.add("active-lang")
                    es.classList.remove("active-lang")
                }
            })
            
            if(currentLanguage === "en") {
                currentLanguage = "es"
            } else {
                currentLanguage = "en"
            }
            translate(currentLanguage)
        }
    })
}

async function translate(language: string) {
    if(!["en", "es"].includes(language)) return
    
    const response = await fetch(`/languages/${language}.json`)
    const texts = await response.json()

    const elementsToTranslate = document.querySelectorAll("[data-lang]") as NodeListOf<HTMLElement>
    
    elementsToTranslate.forEach(element=>{
        const key = element.dataset.lang!
        element.textContent = texts[key]

         //only nav elements
        if(element.dataset.hover) element.dataset.hover = texts[key]
    })
}
function multiLingual() {
    
}

async function translate(language: string) {
    const response = await fetch(`/languages/{language}.json`)
    const texts = await response.json()

    const elementsToTranslate = document.querySelectorAll("[data-lang]") as NodeListOf<HTMLElement>
    
    elementsToTranslate.forEach(element=>{
        const key = element.dataset.lang!
        element.textContent = texts[key]

         //only nav elements
        if(element.dataset.hover) element.dataset.hover = texts[key]
    })
}
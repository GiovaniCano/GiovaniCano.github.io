function imagesModal() {
    document.getElementById('js-images-blog')!.onclick = () => showImages(['blog-angularavel-mockup.jpg'])

    document.getElementById('js-images-corio-eer')!.onclick = () => showImages(['corio-eer.png'])
    document.getElementById('js-images-corio-mockup')!.onclick = () => showImages(['corio-adobe_xd.jpg', 'corio-balsamiq.jpg'])

    document.getElementById('js-images-workflows-eeruml')!.onclick = () => showImages(['workflows-eer.png', 'workflows-uml.png'])
    document.getElementById('js-images-workflows-mockup')!.onclick = () => showImages(['workflows-adobe_xd.jpg'])
}

function showImages(images: string[]): void {
    let currentImage: number = 0
    const imagesCount: number = images.length

    const body = document.body

    const modal = document.getElementById('images-modal')
    modal?.classList.add('show')
    body.classList.add('no-scroll')

    const close = modal!.querySelector('.close-modal-icon') as HTMLElement
    close.onclick = closeModal
    window.onkeydown = (e:KeyboardEvent) => e.key === 'Escape' ? closeModal() : null
    modal!.onclick = (e: MouseEvent) => e.target === e.currentTarget ? closeModal() : null

    const img = modal!.querySelector('img') as HTMLImageElement
    setImage()

    const prev = modal!.querySelector('.previous') as HTMLButtonElement
    prev.onclick = () => {
        if(currentImage <= 0) {
            currentImage = imagesCount - 1
        } else {
            currentImage--
        }
        setImage()
    }
    const next = modal!.querySelector('.next') as HTMLButtonElement
    next.onclick = () => {
        if(currentImage == imagesCount-1) {
            currentImage = 0
        } else {
            currentImage++
        }
        setImage()
    }

    if(imagesCount <= 1) {
        prev.style.visibility = 'hidden'
        next.style.visibility = 'hidden'
    } else {
        prev.style.visibility = 'visible'
        next.style.visibility = 'visible'
    }

    function setImage(): void {
        img.src = '/img/' + images[currentImage]
    }

    function closeModal(): void {
        modal?.classList.remove('show')
        body.classList.remove('no-scroll')
    }
}

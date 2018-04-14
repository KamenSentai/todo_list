export default class Resize
{
    constructor()
    {
        this.resize()
    }

    resize()
    {
        // Get card
        const $card = document.querySelector('.container_card')
        this.w = $card.offsetWidth
        this.h = $card.offsetHeight

        // Resize function
        const resize = () =>
        {
            $card.style.width  = `${Math.min(this.w, window.innerWidth)}px`
            $card.style.height = `${Math.min(this.h, window.innerHeight)}px`
        }
        resize()

        // Resize event
        window.addEventListener('resize', resize)
    }
}
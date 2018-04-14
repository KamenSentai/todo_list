export default class Pop
{
    constructor()
    {
        this.logout()
    }

    logout()
    {
        // Get elements
        const $card   = document.body.querySelector('.container_card')
        const $logout = $card.querySelector('.button_signout')

        if ($logout)
        {
            // Get elements
            const $overlay = document.body.querySelector('.overlay')
            const $popup   = document.body.querySelector('.popup')
            const $yes     = $popup.querySelector('.yes')
            const $no      = $popup.querySelector('.no')
            const $link    = $logout.getAttribute('href')

            // Click
            $logout.addEventListener('click', (event) =>
            {
                event.preventDefault()
                $overlay.classList.remove('hidden')
                $popup.classList.remove('hidden')
            })
            
            // Log out
            $yes.addEventListener('click', (event) =>
            {
                event.preventDefault()
                window.location = $link;
            })
            
            // Stay
            $no.addEventListener('click', (event) =>
            {
                event.preventDefault()
                $overlay.classList.add('hidden')
                $popup.classList.add('hidden')
            })

            // Cancel
            $overlay.addEventListener('click', () =>
            {
                $overlay.classList.add('hidden')
                $popup.classList.add('hidden')
            })
        }
    }
}
export default class Navigate
{
    constructor()
    {
        this.navigate()
    }

    navigate()
    {
        // Get element
        const $card = document.querySelector('.container_card.page_app')

        // App loaded
        if ($card)
        {
            // Get elements
            const $menu         = $card.querySelector('.menu')
            const $title        = $card.querySelector('.title_app')
            const $slideBar     = $menu.querySelector('.slide_bar')
            const $navBar       = $menu.querySelector('.nav_bar')
            const $ranges       = $card.querySelector('.ranges')
            const $rangesButton = Array.from($menu.querySelectorAll('a'))
            const $rangesPage   = Array.from($ranges.querySelectorAll('.content'))
            let anchorPage      = window.location.hash.substr(1) != '' ? window.location.hash.substr(1).split('_', 1)[0] : 'day'
            let $currentButton  = $rangesButton.find($button => $button.classList.contains(anchorPage))
            let $currentPage    = $rangesPage.find($page => $page.classList.contains(anchorPage))

            // Set transition delays
            setTimeout(() =>
            {
                $slideBar.classList.add('active')
                $navBar.classList.add('active')
                $ranges.classList.add('active')
            }, 500)

            // Initial button
            $rangesButton.find($button => $button.classList.contains('active')).classList.remove('active')
            $currentButton.classList.add('active')

            // Initial page
            $rangesPage.find($page => $page.classList.contains('active')).classList.remove('active')
            $currentPage.classList.add('active')
            $ranges.style.transform = `translateX(-${$rangesPage.indexOf($currentPage) * $ranges.offsetWidth}px)`

            // Set styles
            $slideBar.style.transform = `translateX(${$currentButton.offsetLeft}px)`
            $navBar.style.transform   = `translateX(${$currentButton.offsetLeft}px)`

            // Update button
            const updateButton = (anchor, newButton) =>
            {
                // New page
                anchorPage = anchor

                // Remove class
                $currentButton.classList.remove('active')
                $currentPage.classList.remove('active')

                // Define new elements
                $currentButton = newButton
                $currentPage   = $rangesPage.find($page => $page.classList.contains(anchorPage))

                // Add classes
                $currentButton.classList.add('active')
                $currentPage.classList.add('active')
                
                // Set styles
                $slideBar.style.transform = `translateX(${newButton.offsetLeft}px)`
                $navBar.style.transform   = `translateX(${newButton.offsetLeft}px)`

                // Change page
                $ranges.style.transform = `translateX(-${$rangesPage.indexOf($currentPage) * $ranges.offsetWidth}px)`
            }

            // Move nav bar
            for (const $button of $rangesButton)
            {
                // Click
                $button.addEventListener('click', () =>
                {
                    updateButton(
                        Array.from($button.classList).find($buttonClass => $buttonClass != 'active'),
                        $button
                    )
                })

                // Mouse enter
                $button.addEventListener('mouseenter', () =>
                {
                    $slideBar.style.transform = `translateX(${$button.offsetLeft}px)`
                })
                
                // Mouse out
                $button.addEventListener('mouseout', () =>
                {
                    $slideBar.style.transform = `translateX(${$currentButton.offsetLeft}px)`
                })
            }

            // Title click
            $title.addEventListener('click', () =>
            {
                updateButton(
                    $title.getAttribute('href').substr(1),
                    $rangesButton.find($button => $button.classList.contains(anchorPage))
                )
            })
        }
    }
}
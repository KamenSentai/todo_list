export default class Add
{
    constructor()
    {
        this.expand()
    }

    expand()
    {
        // Get element
        const $card = document.querySelector('.container_card.page_app')

        if ($card)
        {
            // Get elements
            const $contents = Array.from($card.querySelectorAll('.content'))

            for (const $content of $contents)
            {
                const $boxBackground = $content.querySelector('.box_adding.background')
                const $opening       = $content.querySelector('.opening_adding')
                const $formAdd       = $content.querySelector('.form')
                const $list          = $content.querySelector('.list')
                const $gradientT     = $content.querySelector('.gradient.top')
                const $gradientB     = $content.querySelector('.gradient.bottom')
                const $indicator     = $opening.querySelector('.indicator')
                const $cross         = $opening.querySelector('.cross')
                
                // Display adding area
                $boxBackground.addEventListener('click', () =>
                {
                    if (!$boxBackground.classList.contains('active'))
                    {
                        $boxBackground.classList.add('active')
                        $indicator.classList.add('active')
                        $cross.classList.add('active')
                        $list.style.zIndex      = '-1'
                        $gradientT.style.zIndex = '-1'
                        $gradientB.style.zIndex = '-1'
                        $formAdd.style.display  = 'block'
                        setTimeout(() =>
                        {
                            $formAdd.classList.add('active')
                        }, 125)
                    }
                })
                $indicator.addEventListener('click', () =>
                {
                    if (!$boxBackground.classList.contains('active'))
                    {
                        $boxBackground.classList.add('active')
                        $indicator.classList.add('active')
                        $cross.classList.add('active')
                        $list.style.zIndex      = '-1'
                        $gradientT.style.zIndex = '-1'
                        $gradientB.style.zIndex = '-1'
                        $formAdd.style.display  = 'block'
                        setTimeout(() =>
                        {
                            $formAdd.classList.add('active')
                        }, 125)
                    }
                })
                
                // Hide or display adding area
                $cross.addEventListener('click', () =>
                {
                    $boxBackground.classList.toggle('active')
                    $indicator.classList.toggle('active')
                    $cross.classList.toggle('active')
                    if (!$boxBackground.classList.contains('active'))
                    {
                        $formAdd.classList.remove('active')
                        setTimeout(() =>
                        {
                            $list.style.zIndex      = '1'
                            $gradientT.style.zIndex = '1'
                            $gradientB.style.zIndex = '1'
                            $formAdd.style.display  = 'none'
                        }, 250)
                    }
                    else
                    {
                        $list.style.zIndex      = '-1'
                        $gradientT.style.zIndex = '-1'
                        $gradientB.style.zIndex = '-1'
                        $formAdd.style.display  = 'block'
                        setTimeout(() =>
                        {
                            $formAdd.classList.add('active')
                        }, 125)
                    }
                })

                // Push list
                const $push = document.createElement('div')
                $push.classList.add('push')
                $list.appendChild($push)
            }

            // Set correction
            this.correct($contents)
        }
    }

    correct($contents)
    {
        for (const $content of $contents)
        {
            // Get elements
            const $boxBackground = $content.querySelector('.box_adding.background')
            const $formAdd       = $content.querySelector('form.add_task')
            const $formEdit      = $content.querySelector('form.edit_task')
            const $inputAD       = $formAdd.querySelector('input#day')
            const $inputAM       = $formAdd.querySelector('input#month')
            const $inputAY       = $formAdd.querySelector('input#year')

            // Define if editing
            const isEditing = !$formEdit ? false : true
            const $inputED  = isEditing ? $formEdit.querySelector('input#day')   : undefined
            const $inputEM  = isEditing ? $formEdit.querySelector('input#month') : undefined
            const $inputEY  = isEditing ? $formEdit.querySelector('input#year')  : undefined

            // Get date
            const date       = new Date()
            const todayDay   = date.getDate()
            const todayMonth = date.getMonth() + 1
            const todayYear  = date.getFullYear()

            // Check form
            const checkForm = (inputD, inputM, inputY) =>
            {
                setTimeout(() =>
                {
                    // Check last day of a month
                    if (inputM.value != '')
                    {
                        if (inputM.value != 2)
                        {
                            if (((!(inputM.value % 2) && inputM.value < 8) || (inputM.value % 2 && inputM.value >= 8)) && inputD.value == 31)
                            {
                                inputD.value = 30
                            }
                        }
                        // Check leap year
                        else if (inputY.value != '' && inputD.value > 28)
                        {
                            if (((inputY.value % 4 == 0) && (inputY.value % 100 != 0)) || (inputY.value % 400 == 0))
                            {
                                inputD.value = 29
                            }
                            else
                            {
                                inputD.value = 28
                            }
                        }
                    }
                    // Check if past
                    if (inputY.value == todayYear)
                    {
                        if (inputM.value < todayMonth)
                        {
                            inputM.value = todayMonth
                            if (inputD.value < todayDay)
                            {
                                inputD.value = todayDay
                            }
                        }
                        else if (inputM.value == todayMonth && inputD.value < todayDay)
                        {
                            inputD.value = todayDay
                        }
                    }
                    else if (inputY.value < todayYear)
                    {
                        inputY.value = todayYear
                        if (inputM.value < todayMonth)
                        {
                            inputM.value = todayMonth
                            if (inputD.value < todayDay)
                            {
                                inputD.value = todayDay
                            }
                        }
                        else if (inputM.value == todayMonth && inputD.value < todayDay)
                        {
                            inputD.value = todayDay
                        }
                    }
                }, 250)
            }

            // Check date
            const checkDate = () =>
            {
                if ($content.classList.contains('active') && $boxBackground.classList.contains('active'))
                {
                    checkForm($inputAD, $inputAM, $inputAY)
                }
                if (isEditing)
                {
                    checkForm($inputED, $inputEM, $inputEY)
                }
            }

            // Events
            window.addEventListener('keydown', checkDate)
            window.addEventListener('click',   checkDate)

            // Touchscreen
            if (Modernizr.touchevents)
            {
                window.addEventListener('touchstart', checkDate)
            }
        }
    }
}
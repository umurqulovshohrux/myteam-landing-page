const elBtn = [...document.querySelectorAll('.team-about__more')]
const teamCardContent = [...document.querySelectorAll('.team-card__content ')]

for (let i = 0; i < elBtn.length; i++) {



    elBtn[i].addEventListener('mouseover', () => {
        elBtn[i].style.background = '#79c8c7'
    })

    elBtn[i].addEventListener('mouseout', () => {
        elBtn[i].style.background = '#f67e7e'
    })

    elBtn[i].addEventListener('click', () => {
        elBtn[i].classList.toggle('active')
        for (let k = 0; k < teamCardContent.length; k++) {
            // teamCardContent[k].addEventListener('click'),() =>{} 
            teamCardContent[k].classList.add('active-content')
            teamCardContent[k].classList.remove('active-content')

        }
    })

}



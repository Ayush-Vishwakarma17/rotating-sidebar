

const rotateCircle = document.getElementById('open')
const rotateCircleBack = document.getElementById('close')
const container = document.getElementById('container')
const option1 = document.getElementById('option')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')

const circle = document.getElementById('circle')


rotateCircle.addEventListener('click' , () => {

    option1.classList.add('closeoption')
    option2.classList.add('closeoption')
    option3.classList.add('closeoption')
    circle.classList.remove('rotateBack')
    circle.classList.add('rotate')
    container.classList.add('shownav')
    container.classList.remove('closenav')

})
rotateCircleBack.addEventListener('click' , () => {

    circle.classList.remove('rotate')
    circle.classList.add('rotateBack')
    option1.classList.remove('closeoption') 
    option2.classList.remove('closeoption') 
    option3.classList.remove('closeoption') 
    container.classList.add('closenav')
    container.classList.remove('shownav')

})
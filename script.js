const rotateCircle = document.getElementById('open')
const rotateCircleBack = document.getElementById('close')
const container = document.getElementById('container')

const circle = document.getElementById('circle')


rotateCircle.addEventListener('click' , () => {
    circle.classList.remove('rotateBack')
    circle.classList.add('rotate')
    container.classList.add('shownav')
    container.classList.remove('closenav')
})
rotateCircleBack.addEventListener('click' , () => {
    circle.classList.remove('rotate')
    circle.classList.add('rotateBack')
    container.classList.add('closenav')
    container.classList.remove('shownav')
})
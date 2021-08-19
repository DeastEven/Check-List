const popup = document.getElementById('popup-1')
const closePopup = document.getElementById('popup__close')
const popupBody = document.getElementById('popup__body')
const pupupBtn = document.getElementById('popup_btn')
const headBtn = document.getElementById('header-btn')
const headBtnWrap = document.getElementById('header-btn__wrrapper')
const video = document.getElementById('video')
const burgerBtn = document.getElementById('burger')
const burgerBg = document.getElementById('burger-bg')


closePopup.addEventListener('click', () => {
    popup.classList.toggle('close')
    popupBody.classList.toggle('close')
    video.pause()

})
pupupBtn.addEventListener('click', (event) => {
    event.preventDefault()
    popup.classList.add('close')
    popupBody.classList.add('close')

})

headBtn.addEventListener('click', (event) => {
    event.preventDefault()
    headBtn.classList.toggle('active')
    headBtnWrap.classList.toggle('active')
})

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    burgerBg.classList.toggle('active')
})
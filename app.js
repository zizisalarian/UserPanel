let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let firstDashboardCards = document.querySelector('.firstCards')
let firstDashboardCard = firstDashboardCards.querySelector('.card')


nextBtn.addEventListener('click', () => {
    let cardWidth = firstDashboardCard.getBoundingClientRect().width
    let cardMargin = window.getComputedStyle(firstDashboardCard).marginLeft.slice(0, -2)
    cardMargin = parseInt(cardMargin, 10)
    let scrollableValue = cardWidth + cardMargin
    let scrollLeftA = firstDashboardCards.scrollLeft
    console.log('scrollLeftA', scrollLeftA, scrollLeftA + scrollableValue)
    firstDashboardCards.scrollTo(scrollLeftA + scrollableValue, 0)
})
prevBtn.addEventListener('click', () => {
    let cardWidth = firstDashboardCard.getBoundingClientRect().width
    let cardMargin = window.getComputedStyle(firstDashboardCard).marginLeft.slice(0, -2)
    cardMargin = parseInt(cardMargin, 10)
    let scrollableValue = cardWidth + cardMargin
        let scrollLeftA = firstDashboardCards.scrollLeft
        console.log('scrollLeftA', scrollLeftA, scrollLeftA - scrollableValue)
    firstDashboardCards.scrollTo(scrollLeftA - scrollableValue, 0)

})



let nextBtnLast = document.querySelector('.next-btn')
let prevBtnLast = document.querySelector('.prev-btn')

let finishTestsCards = document.querySelector('.finish-tests')
let finishTestsCard = finishTestsCards.querySelector('.card')


nextBtnLast.addEventListener('click', () => {
    let cardWidth = finishTestsCard.getBoundingClientRect().width
    let cardMargin = window.getComputedStyle(finishTestsCard).marginLeft.slice(0, -2)
    cardMargin = parseInt(cardMargin, 10)
    let scrollableValue = cardWidth + cardMargin
    let scrollLeftA = finishTestsCards.scrollLeft
    console.log('scrollLeftA', scrollLeftA, scrollLeftA + scrollableValue)
    finishTestsCards.scrollTo(scrollLeftA + scrollableValue, 0)
})
prevBtnLast.addEventListener('click', () => {
    let cardWidth = finishTestsCard.getBoundingClientRect().width
    let cardMargin = window.getComputedStyle(finishTestsCard).marginLeft.slice(0, -2)
    cardMargin = parseInt(cardMargin, 10)
    let scrollableValue = cardWidth + cardMargin
        let scrollLeftA = finishTestsCards.scrollLeft
        console.log('scrollLeftA', scrollLeftA, scrollLeftA - scrollableValue)
    finishTestsCards.scrollTo(scrollLeftA - scrollableValue, 0)

})
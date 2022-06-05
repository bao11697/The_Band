const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const closeModal =  document.querySelector('.js-modal-close')

//Hàm hiển thị Modal mua ve
function showBuyTickets(){
    modal.classList.add('open')
}
// Ẩn modal mua vé 
function closeBuyTickets(){ 
    modal.classList.remove('open')
}

// Lặp qua từng button buy
for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showBuyTickets)
}
// Nghe hành vi click bút close
closeModal.addEventListener('click',closeBuyTickets)

modal.addEventListener('click',closeBuyTickets)

modalContainer.addEventListener('click', function (event){
    console.log(event.target)
    event.stopPropagation()
})

//  
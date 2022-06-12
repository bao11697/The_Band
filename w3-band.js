

const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const closeModal =  document.querySelector('.js-modal-close')
var header = document.getElementById('header');
var mobileMenu = document.querySelector('.mobile-menu-btn')
var  headerHeight = header.clientHeight;
var menuItems =document.querySelectorAll('#nav li a[href*="#"]')




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

// Hàm click show menu//
  mobileMenu.onclick = function(){
     var isClose = header.clientHeight === headerHeight;
     if(isClose){
         header.style.height = 'auto';
     }
    else{
        header.style.height = null;
    }
  }

//Tự động đóng khi chọn phần tử trong menu
for (var i = 0; i< menuItems.length ; i++){
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(event){
        var isParentmenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');

        if(isParentmenu){
            event.preventDefault(); 
        } else {
            header.style.height = null;
        }
        
    }
    
}

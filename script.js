const header_menu = document.querySelector('.header_menu')
const left_item = document.querySelector('.left_item')

header_menu.onclick = function(event){
    event.stopPropagation();
    left_item.classList.remove('close')
}
document.querySelector('body').onclick = function(){
    left_item.classList.add('close')
}


var container = document.querySelector('.trending_novel');
    var scrollAmount = 200; 

    function scrollLeft() {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    }

    function scrollRight() {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    var scrollLeftBtn = document.createElement('button');
    scrollLeftBtn.innerHTML = '<';
    scrollLeftBtn.addEventListener('click', scrollLeft);

    var scrollRightBtn = document.createElement('button');
    scrollRightBtn.innerHTML = '>';
    scrollRightBtn.addEventListener('click', scrollRight);

    document.body.insertBefore(scrollLeftBtn, container);
    document.body.appendChild(scrollRightBtn);

const account_manager= document.querySelector('.account_manager');
const novel_manager= document.querySelector('.novel_manager');
const add_slider= document.querySelector('.add_slider');

account_manager.onclick = function (event) {
    event.preventDefault();
const crUrl = window.location.href.substring(0, window.location.href.lastIndexOf("/"));

    window.location.href = `${crUrl}/accountmanager`
}
novel_manager.onclick = function (event) {
    event.preventDefault();
const crUrl = window.location.href.substring(0, window.location.href.lastIndexOf("/"));

    window.location.href = `${crUrl}/auhtormanager`
}

add_slider.onclick = function (event) {
    event.preventDefault();
const crUrl = window.location.href.substring(0, window.location.href.lastIndexOf("/"));

    window.location.href = `${crUrl}/addslider`
}




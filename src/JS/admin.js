
const account_manager= document.querySelector('.account-manager');
const novel_manager= document.querySelector('.novel_manager');

account_manager.onchange = function () {
    const crUrl = window.location.href.substring(0, window.location.href.lastIndexOf("/"));

    window.location.href = `${crUrl}//accountmanager`
}
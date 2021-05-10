let modalBg = document.querySelector('.modal-bg');
let modalClose = document.querySelector('.fa-times');

window.addEventListener('DOMContentLoaded', function() {
	modalBg.classList.add('modal-active');
});

modalClose.addEventListener('click', function() {
	modalBg.classList.remove('modal-active');
});

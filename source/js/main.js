window.onload = function() {
	var mainNav = document.querySelector('.main-nav');
	var mainNavToggle = document.querySelector('.main-nav__toggle');

	mainNavToggle.onclick = function() {
		if (mainNav.classList.contains('main-nav--closed')) {
			mainNav.classList.remove('main-nav--closed');
			mainNav.classList.add('main-nav--opened');
		} else {
			mainNav.classList.remove('main-nav--opened');
			mainNav.classList.add('main-nav--closed');
		}
	};
}
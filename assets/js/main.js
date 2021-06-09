// document.addEventListener('DOMContentLoaded', () => {
// });
$(document).ready(() => {
	$("body #header").load("header.html");
	$("body #footer").load("footer.html");

	$(document).on('click', '.nav__mobile', function () {
		let navBtn = $('.nav__mobile');
		if (navBtn.hasClass('nav__mobile_active')) {
			$('body').removeClass('fixed');
			$('.nav__list').removeClass('nav__list_active');
			$('.nav__mobile').removeClass('nav__mobile_active');
		} else {
			$('body').addClass('fixed');
			$('.nav__list').addClass('nav__list_active');
			$('.nav__mobile').addClass('nav__mobile_active');
		}

	})
})

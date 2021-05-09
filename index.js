const navSlide = () => {
	const menu = document.querySelector(".menu"),
		close = document.querySelector(".close"),
		nav = document.querySelector(".nav__links");

	menu.addEventListener("click", () => {
		nav.classList.add("active");
	});

	close.addEventListener("click", () => {
		nav.classList.remove("active");
	});
};

window.onload = navSlide();

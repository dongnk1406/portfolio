const menuButton = document.querySelector('.menu-btn');
const menuIcons = document.querySelectorAll('.menu-btn i');
const mobileMenu = document.querySelector('.nav-list ul');
const menuItems = document.querySelectorAll('.nav-list ul li a');
const header = document.querySelector('#header');



let isShowMenu = false;
let isClickMenuItem = false;

menuButton.addEventListener('click', () => {
	isShowMenu = !isShowMenu;
	if (isShowMenu) {
		menuIcons[0].classList.remove('active');
		menuIcons[1].classList.add('active');
		mobileMenu.classList.add('active');
	} else {
		menuIcons[1].classList.remove('active');
		menuIcons[0].classList.add('active');
		mobileMenu.classList.remove('active');
	}
});

document.addEventListener('scroll', () => {
	if (window.scrollY > 100) {
		header.style.backgroundColor = '#000';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menuItems.forEach((item) => {
	item.addEventListener('click', () => {
		isShowMenu = false;
		menuIcons[1].classList.remove('active');
		menuIcons[0].classList.add('active');
		mobileMenu.classList.remove('active');
	})
});

// const navMobile = document.querySelector('.nav-mobile')
// const navBtn = document.querySelector('.hamburger')
// const allNavLinks = document.querySelectorAll('.nav__link')
// const footerYear = document.querySelector('.footer__year')
// const footer = document.querySelector('.footer')

// const handleNav = () => {
// 	navBtn.classList.toggle('is-active')

// 	navMobile.classList.toggle('nav-mobile--active')

// 	if (navMobile.classList.contains('nav-mobile--active')) {
// 		footer.style.display = 'none'
// 	} else {
// 		footer.style.display = 'block'
// 	}

// 	allNavLinks.forEach(item => {
// 		item.addEventListener('click', () => {
// 			navMobile.classList.remove('nav-mobile--active')
// 			navBtn.classList.remove('is-active')
// 			footer.style.display = 'block'
// 			document.body.classList.remove('sticky-body')
// 		})
// 	})

// 	document.body.classList.toggle('sticky-body')
// }

// navBtn.addEventListener('click', handleNav)

// const handleCurrentYear = () => {
// 	const year = new Date().getFullYear()
// 	footerYear.innerText = year
// }

// handleCurrentYear()

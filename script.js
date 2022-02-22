const navbarToggler = document.querySelector('.navbar-toggler')
const navMenu = document.querySelector('.navbar ul')
const navList = document.querySelectorAll('.navbar a')

navbarToggler.onclick = () => {
  navMenu.classList.toggle('open')
  navbarToggler.classList.toggle('open-navbar-toggler')
}

// navList.forEach(navItem => {
//   navItem.addEventListener('click', (e) => {
//     handleScroll(e)
//     if (navMenu.classList.contains('open')) {
//       navbarToggler.click()
//     }
//   })
// })

for (var i = 0; i < navList.length; i++) {
  navList[i].addEventListener('click', (e) => {
    handleScroll(e)
    if (navMenu.classList.contains('open')) {
      navbarToggler.click()
    }
  })
}


function handleScroll(e) {
  const href = e.currentTarget.getAttribute('href')
  const startPosition = window.scrollY
  const endPosition = href === '#' ? 0 : document.querySelector(`${href}`).offsetTop

  let start = null
  const duration = 1000

  const scrollStep = (timestamp) => {
    if (!start) start = timestamp
    let progress = timestamp - start
    const distance = endPosition - startPosition
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration))
    if (progress < duration) window.requestAnimationFrame(scrollStep);
  }
  requestAnimationFrame(scrollStep)
}

// easing function
function easeLinear (t, b, c, d) {
  return c * t / d + b;
}

function easeInOutQuad (t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t + b;
  return -c / 2 * ((--t) * (t - 2) - 1) + b;
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};
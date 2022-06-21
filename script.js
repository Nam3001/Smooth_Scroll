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

// t = Time - Amount of time that has passed since the beginning of the animation. Usually starts at 0 and is slowly increased using a game loop or other update function.
// b = Beginning value - The starting point of the animation. Usually it's a static value, you can start at 0 for example.
// c = Change in value - The amount of change needed to go from starting point to end point. It's also usually a static value.
// d = Duration - Amount of time the animation will take. Usually a static value aswell

// easing function
function easeLinear (t, b, c, d) {
  return c * t / d + b;
}

function easeInQuad (t, b, c, d) {
    return c * (t /= d) * t + b;
}

function easeOutQuad (t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
}

function easeInSine (t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
}

function easeOutSine (t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
}

function easeInOutSine (t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
}

function easeInExpo (t, b, c, d) {
    return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
}

function easeOutExpo (t, b, c, d) {
    return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
}

function easeInOutExpo (t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
}

function easeInCirc (t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
}

function easeOutCirc (t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
}

function easeInOutCirc (t, b, c, d) {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
}

function easeInCubic (t, b, c, d) {
    return c * (t /= d) * t * t + b;
}

function easeOutCubic (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
}

function easeInOutCubic (t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
}

function easeInQuart (t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
}

function easeOutQuart (t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
}

function easeInOutQuart (t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
}

function easeInQuint (t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
}

function easeOutQuint (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}

function easeInOutQuint (t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
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

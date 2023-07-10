function scrollToSection(sectionName) {
  document
    .getElementById(String(sectionName))
    .scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateScrollbar(e) {
  const navBarPost = document.querySelector('.nav-bar-post');
  let scrollYPos = this.scrollY;
  if (scrollYPos > 200) {
    navBarPost.classList.add('shown');
  } else {
    navBarPost.classList.remove('shown');
  }
}

window.addEventListener('scroll', updateScrollbar);

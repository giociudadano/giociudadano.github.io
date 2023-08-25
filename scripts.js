/*
 * Name: scripts.js
 * Author: Gio Carlo Ciudadano
 * Description:
 * A collection of Javascript functions for the portfolio website
 * giociudadano.github.io.
 */

/* updateNavigationBar(event)
 * - Listens for the position of the scrollbar in the viewport and updates the
 *   visibility of the navigation bar.
 */

function updateNavigationBar(e) {
  const navBarPost = document.querySelector('.nav-bar-sticky');
  let scrollYPos = this.scrollY;
  if (scrollYPos > 200) {
    navBarPost.classList.add('shown');
  } else {
    navBarPost.classList.remove('shown');
  }
}

window.addEventListener('scroll', updateNavigationBar);

/* scrollToSection(sectionName)
 * - Listens for the position of the scrollbar in the viewport and updates the
 *   visibility of the navigation bar if the user scrolls above or below 200px.
 */

function scrollToSection(sectionName) {
  document
    .getElementById(String(sectionName))
    .scrollIntoView({ behavior: 'smooth', block: 'start' });
}

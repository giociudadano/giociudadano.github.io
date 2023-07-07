function navigateAboutMe() {
  document
    .getElementById('about-me')
    .scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function navigateEducation() {
  document
    .getElementById('education')
    .scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function navigateExperience() {
  document
    .getElementById('experience')
    .scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function navigateSkills() {
  document
    .getElementById('skills')
    .scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function navigateProjects() {
  document
    .getElementById('projects')
    .scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function navigateContact() {
  document
    .getElementById('contact')
    .scrollIntoView({ behavior: 'smooth', block: 'start' });
}

window.addEventListener('scroll', event => {
  let scroll = this.scrollY;
  console.log(scroll);
});

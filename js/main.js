
function includeHTML() {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(el => {
      const file = el.getAttribute('data-include');
      fetch(file)
          .then(response => {
              if (response.ok) {
                  return response.text();
              } else {
                  throw new Error(`Error loading ${file}: ${response.statusText}`);
              }
          })
          .then(data => {
              el.outerHTML = data;
          })
          .catch(error => {
              console.error('Error including HTML:', error);
          });
  });
}

document.addEventListener('DOMContentLoaded', includeHTML);

// JavaScript to change header transparency on scroll

document.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
ß

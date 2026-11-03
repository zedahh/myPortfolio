// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

// Close the menu after choosing a link
links.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Certificate preview (lightbox)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.cert-open').forEach((button) => {
  button.addEventListener('click', () => {
    const thumb = button.querySelector('img');
    lightboxImg.src = button.dataset.full;
    lightboxImg.alt = thumb.alt;
    lightbox.showModal();
  });
});

lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());

// Clicking the dark area outside the image also closes it
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});

// Current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();
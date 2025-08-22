// Function to fetch and display stats from data.json
async function loadStats() {
  try {
    const response = await fetch('Assets/data/data.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    const setText = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    // Hero section
    setText('latest-addon-downloads', data.latestAddonDownloads);
    setText('latest-addon-rating', data.latestAddonRating);

    // About section
    setText('about-published-assets', data.publishedAssets);
    setText('about-total-downloads', `${data.totalDownloads} downloads`);
    setText('quick-fact-published-assets', data.publishedAssets);
    setText('quick-fact-total-downloads', data.totalDownloads);
  } catch (error) {
    console.error('Failed to load portfolio stats:', error);
  }
}
loadStats();

document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = a.getAttribute('href');
    if(target.startsWith('#')){
      e.preventDefault();
      const el = document.querySelector(target);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    }
  })
})

// Intersection Observer for section animations
const sections = document.querySelectorAll('.hero, .section');
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    } else {
      entry.target.classList.remove('is-visible');
    }
  });
}, observerOptions);

sections.forEach(section => { observer.observe(section); });
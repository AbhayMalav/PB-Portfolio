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

// --- Back to Top Button Logic ---

const backToTopButton = document.getElementById("back-to-top-btn");

// Throttles a function to limit how often it can be called.
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const context = this;
    const args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

const handleScroll = () => {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
};

// Add a throttled scroll event listener for better performance
window.addEventListener('scroll', throttle(handleScroll, 250));

// When the user clicks on the button, scroll to the top smoothly
backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// --- Contact Modal Logic ---

const contactModal = document.getElementById('contact-modal');
const openModalBtns = document.querySelectorAll('.open-contact-modal');
const closeModalBtn = document.querySelector('.modal-close-btn');

const openModal = (e) => {
  e.preventDefault();
  contactModal.classList.add('show');
};

const closeModal = () => {
  contactModal.classList.remove('show');
};

openModalBtns.forEach(btn => {
  btn.addEventListener('click', openModal);
});

closeModalBtn.addEventListener('click', closeModal);

// Close modal when clicking on the overlay
contactModal.addEventListener('click', (e) => {
  if (e.target === contactModal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && contactModal.classList.contains('show')) {
    closeModal();
  }
});

// --- AJAX Contact Form Submission ---

const contactForm = document.getElementById('contact-form');
const contactSectionContent = document.getElementById('contact-section-content');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    const json = JSON.stringify(object);

    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.innerHTML = "Sending...";
    submitButton.disabled = true;

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      })
      .then(async (response) => {
        let jsonResponse = await response.json();
        if (response.status == 200) {
          contactSectionContent.innerHTML = `<div class="form-success-message"><h3>Thank You!</h3><p>Your message has been sent successfully. We'll get back to you soon.</p></div>`;
        } else {
          contactSectionContent.innerHTML = `<div class="form-error-message"><h3>Oops!</h3><p>${jsonResponse.message}</p><p>Please try again.</p></div>`;
        }
      })
      .catch(error => {
        console.log(error);
        contactSectionContent.innerHTML = `<div class="form-error-message"><h3>Oops!</h3><p>Something went wrong. Please check your connection and try again.</p></div>`;
      });
  });
}
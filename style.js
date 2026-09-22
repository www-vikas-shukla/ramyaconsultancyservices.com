// Theme toggle: persists in localStorage
(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  const stored = localStorage.getItem('ramaya-theme');

  function applyTheme(theme){
    if(theme === 'dark'){
      document.documentElement.setAttribute('data-theme','dark');
      icon.textContent = '☀️';
    } else {
      document.documentElement.removeAttribute('data-theme');
      icon.textContent = '🌙';
    }
  }

  // Initialize
  if(stored){
    applyTheme(stored);
  } else {
    // Respect system preference as default
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  // Toggle handler
  toggle && toggle.addEventListener('click', function(){
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('ramaya-theme', next);
  });
})();







$(document).ready(function(){
  // Smooth scroll
  $("a.nav-link").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 70
      }, 800);
    }
  });
 
  // Contact form validation
  $("#contactForm").on("submit", function(e){
    e.preventDefault();
    alert("Thank you! We’ll get back to you soon.");
    $(this).trigger("reset");
  });
});

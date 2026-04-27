function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Simulate submission — wire to a real backend/formspree later
  setTimeout(() => {
    form.reset();
    btn.textContent = 'Send Enquiry';
    btn.disabled = false;
    document.getElementById('formSuccess').style.display = 'block';
    setTimeout(() => {
      document.getElementById('formSuccess').style.display = 'none';
    }, 5000);
  }, 1000);
}

document.getElementById('year').textContent = new Date().getFullYear();

// Replace the email below with your real email
const MY_EMAIL = 'ejrsracaoga@pcu.edu.ph';

const emailLink = document.getElementById('emailLink');
emailLink.href = 'mailto:' + MY_EMAIL;
emailLink.textContent = MY_EMAIL;

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent('Message from ' + name);
  const body = encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')');
  window.location.href = 'mailto:' + MY_EMAIL + '?subject=' + subject + '&body=' + body;
  document.getElementById('msg').textContent = 'Thanks, ' + name + '! Opening your email app.';
});
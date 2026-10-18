document.getElementById('y').textContent = new Date().getFullYear();
var menu = document.getElementById('menu');
document.getElementById('burger').addEventListener('click', function () { menu.classList.toggle('open'); });
menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') menu.classList.remove('open'); });

var io = new IntersectionObserver(function (es) {
  es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  var msg = document.getElementById('msg');
  var ok = ['name', 'email', 'have', 'want'].every(function (id) { return document.getElementById(id).value.trim(); });
  msg.style.display = 'block';
  if (!ok) { msg.style.background = '#fdecec'; msg.style.color = '#b42318'; msg.textContent = 'من فضلك املأ كل الخانات.'; return; }
  msg.style.background = '#e6f7ef'; msg.style.color = '#127a4d';
  msg.textContent = 'تم تسجيلك بنجاح! هنتواصل معاك قريبًا 🎉';
  this.reset();
});

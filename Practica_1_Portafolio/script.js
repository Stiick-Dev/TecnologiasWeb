document.getElementById('menu-btn').addEventListener('click', function () {
  var menu = document.getElementById('menu');
  menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
});

document.addEventListener('click', function (event) {
  var menu = document.getElementById('menu');
  var menuBtn = document.getElementById('menu-btn');
  
  if (event.target !== menuBtn && event.target.parentNode !== menu && menu.style.display === 'block') {
      menu.style.display = 'none';
  }
});

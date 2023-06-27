//barra de navegação do menu
const menuItems = document.querySelectorAll('.menu-item a');
let clickedItem = null;

if (menuItems.length > 0) {
  currentURL = window.location.href;
  menuItems.forEach((item) => { 
    if (item.href == currentURL) {
      item.classList.add('active');
      clickedItem = item;
    }

    item.addEventListener('mouseover', function(e) {
      if (this !== clickedItem) {
        menuItems.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        clickedItem = this;
      }
    });

    item.addEventListener("click", function(e) {
      clickedItem = this;
    });
  });
}

// busca
 const searchContainer = document.querySelector('.search-container');
 const searchInput = document.getElementById('search-input');
 const searchIcon = document.querySelector('.search-icon');
 
 if (searchInput && searchIcon) {
   searchIcon.addEventListener('click', function() {
     searchInput.type = 'text';
     searchContainer.classList.toggle('active');
     if (searchContainer.classList.contains('active')) {
       searchInput.focus();
   } else {
       searchInput.blur();
   }
     
 });

 searchInput.addEventListener('blur', function() {
   searchInput.type = 'hidden';
   searchContainer.classList.remove('active');
 });

 document.addEventListener('click', function(event) {
  if (event.target !== searchIcon && event.target !== searchInput) {
    searchInput.type = 'hidden';
    searchContainer.classList.remove('active');
  }
});
}

//scrollreveal para animações
document.addEventListener('DOMContentLoaded', function() {
  const sr = ScrollReveal();
  sr.reveal('.icone, .button', {
    origin: "top",
    duration: 1000,
    distance: '50px',
    interval: 200,
    scale: 0.5,
    reset: true
  });

  sr.reveal('.item', {
    origin: 'right',
    duration: 1500,
    distance: '100px',
    interval: 300,
    scale: 1.2,
    reset: true
  });
});



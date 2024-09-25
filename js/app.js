$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let mobileNavLinks = document.querySelectorAll('.mobile-nav ul li a');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
  });
});

});
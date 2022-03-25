let burgerOpen = document.querySelector('.header-right > a');
console.log(burgerOpen);

let burgerMenu = document.querySelector('.hamburger-menu');
console.log(burgerMenu);

let burgerCloser = document.querySelector('.close');
console.log(burgerCloser);

burgerOpen.addEventListener('click', function(){
    document.querySelector('.hamburger-menu').classList.add("active");
});

burgerCloser.addEventListener('click', function(){
    document.querySelector('.hamburger-menu').classList.remove("active");
});



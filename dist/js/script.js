// Navbar Fixed

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}


// Humberger

const humberger = document.querySelector('#humberger');
const navmenu = document.querySelector('#nav-menu');


humberger.addEventListener('click',  function () {
    humberger.classList.toggle('humberger-active');
    navmenu.classList.toggle('hidden');
});

window.addEventListener('click', function (e) {
    if (e.target != humberger && e.target != navmenu){
     humberger.classList.remove('humberger-active');
     navmenu.classList.add('hidden');   
    }
});
const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.header__overlay');
const header = document.querySelector('.header');
const fadeElement = document.querySelector('.has-fade');
const headerh1 = document.querySelector('.headerh1');
const arrow = document.querySelector('.arrow');


btnHamburger.addEventListener('click', () => {
console.log('open ham');
if(header.classList.contains('open') 
 
//&&overlay.classList.contains('has-fade')
)
 {
    header.classList.remove('open');
    overlay.style.visibility = 'hidden';
    headerh1.style.opacity = '1';
    arrow.style.opacity = '1';
  /*  fadeElement.forEach = (element) => {
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    }*/
}
else 
{
    header.classList.add('open');
    overlay.style.visibility = 'visible'
    headerh1.style.opacity = '0';
    arrow.style.opacity = '0';
  /*  fadeElement.forEach = (element) => {
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
};*/
}
})
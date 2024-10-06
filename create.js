const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navList');
const navbar = document.getElementById('navbar');

// Toggle the navList open/close and change the icon
menuIcon.addEventListener('click', () => {
    navList.classList.toggle('open');
    menuIcon.classList.toggle('bx-x');  // Toggle the close icon
});

// Optional: Close the navList when clicking outside and reset the icon
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navList.classList.contains('open')) {
        navList.classList.remove('open');
        menuIcon.classList.remove('bx-x');  // Reset to menu icon
    }
});

function fwd(){
     location.assign('./create.html')
 }
 function bwd(){
    location.assign('./java.html')
}



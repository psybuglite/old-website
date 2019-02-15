/**
  # Main JS File
  
  # @package  astute
  # @author   Tonye Dickson <itztonye@gmail.com>
*/


var mobileNav = document.querySelector(".mobile-nav");

function showmenu(x) {
    x.classList.toggle("change");
    mobileNav.classList.toggle("open-nav");
}


var dropdown = document.querySelector(".dropdown");

function showdrop() {
    dropdown.classList.toggle("open");
}

dropdown.addEventListener("click", showdrop);
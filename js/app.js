
/*
    Menu Toggler
    1. Listen for a click on .navbar-toggler
    2. Store the value of the attribute "data-target"
    3. Toggle the ".open" class for the navigation element
*/

let toggler = document.querySelector(".navbar-toggler");

toggler.onclick = function(){
    let attribute = this.getAttribute("data-target");
    let navigation = document.querySelector(attribute);
    navigation.classList.toggle("open");
}
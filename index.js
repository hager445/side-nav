let toggleButton = document.querySelector(".toggle-btn");
let headerText = document.querySelector(".h3_container");
let sideNav = document.querySelector(".side-nav");
let searchInput = document.querySelector(".search-input");
let listText = document.querySelectorAll(".list_text");


console.log(headerText);
toggleButton.addEventListener("click", ()=>{
    headerText.classList.toggle("h3_container-open");
    searchInput.classList.toggle("search-input-open");
    sideNav.classList.toggle("open");
    listText.forEach(el => {
        el.classList.toggle("list_text--open");
    });
  
})
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("product-dropdown").classList.toggle("show"); 
}
function myFunction2() {
  document.getElementById("resources-dropdown").classList.toggle("show"); 
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("header-dropdown");
    for (var i = 0;dropdowns[i]; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  // else if (!event.target.matches('.dropbtn2')) {
  //   var dropdowns = document.getElementsByClassName("header-dropdown");
  //   var i;
  //   for (i = 0; i < dropdowns.length; i++) {
  //     var openDropdown = dropdowns[i];
  //     if (openDropdown.classList.contains('show')) {
  //       openDropdown.classList.remove('show');
  //     }
  //   }
  // }
}

$(document).ready(function(){
  $(".header__icon-bar").click(function(e){
    $(".header-menu").toggleClass('is-open');
    e.preventDefault();
  });
  /*
  //Zoey
  //make tabs work
  
  $( "#tabs" ).tabs();
    $('.section-4-list a').on('click' , event =>{
      $('.section-4-list a').removeClass('active-tab');
    $(event.currentTarget).addClass('active-tab');
  }); */
});

let tabLink = document.getElementsByClassName('section-4-list__link');
let tabContent = document.getElementsByClassName('tab-content');

const openTab = (e) =>{
  for(let i=0; i<tabContent.length; i++){
    // remove active from button and tab-content
    tabLink[i].classList.remove('active-tab');
    tabContent[i].classList.remove('active-content');
    // if id of the button was equal to id of tab-content,make them active
    if(tabContent[i].id === e.target.id){
      tabContent[i].classList.add('active-content');
      tabLink[i].classList.add('active-tab');
    }
  }
}
// when a button is clicked, Tab associated with that button works
for(let i=0; i<tabLink.length; i++){
  tabLink[i].addEventListener('click', openTab);
}
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const toggleButton = document.getElementById('toggle-button');
const searchBar = document.getElementById('search2');
const takebackButton = document.getElementById('takeback');


toggleButton.addEventListener('click', () => {
    div1.classList.add('hidden');
    div2.classList.remove('hidden');
});

takebackButton.addEventListener('click', () => {
     div1.classList.remove('hidden');
     div2.classList.add('hidden');
 });

searchBar.addEventListener('blur', () => {
    div1.classList.remove('hidden');
    div2.classList.add('hidden');
});

const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const toggleButton2 = document.getElementById('toggle-button2');
const searchBar3 = document.getElementById('search3');
const takebackButton2 = document.getElementById('takeback2');


toggleButton2.addEventListener('click', () => {
    div3.classList.add('hidden');
    div4.classList.remove('hidden');
});

takebackButton2.addEventListener('click', () => {
     div3.classList.remove('hidden');
     div4.classList.add('hidden');
 });

searchBar3.addEventListener('blur', () => {
    div3.classList.remove('hidden');
    div4.classList.add('hidden');
});



// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
         for (var i = 0; i < burger.length; i++) {
               burger[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                         menu[j].classList.toggle('hidden');
                    }
               });
         }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
         for (var i = 0; i < close.length; i++) {
               close[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                         menu[j].classList.toggle('hidden');
                    }
               });
         }
    }

    if (backdrop.length) {
         for (var i = 0; i < backdrop.length; i++) {
               backdrop[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                         menu[j].classList.toggle('hidden');
                    }
               });
         }
    }
});


// Side Burger menus
document.addEventListener('DOMContentLoaded', function() {
     // open
     const burger = document.querySelectorAll('.side-navbar-burger');
     const menu = document.querySelectorAll('.side-navbar-menu');
 
     if (burger.length && menu.length) {
          for (var i = 0; i < burger.length; i++) {
                burger[i].addEventListener('click', function() {
                     for (var j = 0; j < menu.length; j++) {
                          menu[j].classList.toggle('hidden');
                     }
                });
          }
     }
 
     // close
     const close = document.querySelectorAll('.side-navbar-close');
     const backdrop = document.querySelectorAll('.side-navbar-backdrop');
 
     if (close.length) {
          for (var i = 0; i < close.length; i++) {
                close[i].addEventListener('click', function() {
                     for (var j = 0; j < menu.length; j++) {
                          menu[j].classList.toggle('hidden');
                     }
                });
          }
     }
 
     if (backdrop.length) {
          for (var i = 0; i < backdrop.length; i++) {
                backdrop[i].addEventListener('click', function() {
                     for (var j = 0; j < menu.length; j++) {
                          menu[j].classList.toggle('hidden');
                          menu.classList.toggle("fade-in");
                     }
                });
          }
     }
 });

 // Right Burger menus
document.addEventListener('DOMContentLoaded', function() {
     // open
     const burger = document.querySelectorAll('.right-navbar-burger');
     const menu = document.querySelectorAll('.right-navbar-menu');
 
     if (burger.length && menu.length) {
          for (var i = 0; i < burger.length; i++) {
                burger[i].addEventListener('click', function() {
                     for (var j = 0; j < menu.length; j++) {
                          menu[j].classList.toggle('hidden');
                     }
                });
          }
     }
 
     // close
     const close = document.querySelectorAll('.right-navbar-close');
     const backdrop = document.querySelectorAll('.right-navbar-backdrop');
 
     if (close.length) {
          for (var i = 0; i < close.length; i++) {
                close[i].addEventListener('click', function() {
                     for (var j = 0; j < menu.length; j++) {
                          menu[j].classList.toggle('hidden');
                     }
                });
          }
     }
 
     if (backdrop.length) {
          for (var i = 0; i < backdrop.length; i++) {
                backdrop[i].addEventListener('click', function() {
                     for (var j = 0; j < menu.length; j++) {
                          menu[j].classList.toggle('hidden');
                     }
                });
          }
     }
 });


 const header = document.querySelector("#header");
 let prevScrollpos = window.pageYOffset;
 
 if (screen.width <= 414) {
     let prevScrollpos = window.pageYOffset;
   
     window.onscroll = function() {
       let currentScrollPos = window.pageYOffset;
       if (prevScrollpos > currentScrollPos) {
         header.style.transform = "translateY(0)";
       } else {
         header.style.transform = "translateY(-150px)";
       }
       prevScrollpos = currentScrollPos;
     };
   }


  function toggleText() {
     var dots = document.getElementById("dots");
     var moreText = document.getElementById("more");
     var button = document.getElementById("button");

     if (dots.classList.contains("hidden")) {
         // Show the dots
         dots.classList.remove("hidden");

         // Hide the more text
         moreText.classList.add("hidden");

         // change text of the button
         button.innerHTML = "Read more";
     } else {
         // Hide the dots
         dots.classList.add("hidden");

         // hide the more text
         moreText.classList.remove("hidden");

         // change text of the button
         button.innerHTML = "Read less";
     }
 }





 document.getElementById("search").addEventListener("input", function() {
     // Get search input value
     var searchTerm = this.value.trim().toLowerCase();
     console.log('searchTerm:', searchTerm);
     
     // Get all video cards
     var videoCards = document.querySelectorAll(".videoCard");
     console.log('videoCards:', videoCards);
   
     // Loop through video cards and hide/show based on search term
     videoCards.forEach(function(videoCard) {
       var title = videoCard.querySelector(".titles").textContent.trim().toLowerCase();
       console.log('title:', title);
       var description = videoCard.querySelector(".description").textContent.trim().toLowerCase();
       console.log('description:', description);
       
       if (title.includes(searchTerm) || description.includes(searchTerm)) {
         videoCard.style.display = "block";
       } else {
         videoCard.style.display = "none";
       }
     });
   });

   document.getElementById("search2").addEventListener("input", function() {
     // Get search input value
     var searchTerm = this.value.trim().toLowerCase();
     console.log('searchTerm:', searchTerm);
     
     // Get all video cards
     var videoCards = document.querySelectorAll(".videoCard");
     console.log('videoCards:', videoCards);
   
     // Loop through video cards and hide/show based on search term
     videoCards.forEach(function(videoCard) {
       var title = videoCard.querySelector(".titles").textContent.trim().toLowerCase();
       console.log('title:', title);
       var description = videoCard.querySelector(".description").textContent.trim().toLowerCase();
       console.log('description:', description);
       
       if (title.includes(searchTerm) || description.includes(searchTerm)) {
         videoCard.style.display = "block";
       } else {
         videoCard.style.display = "none";
       }
     });
   });

   document.getElementById("search3").addEventListener("input", function() {
     // Get search input value
     var searchTerm = this.value.trim().toLowerCase();
     console.log('searchTerm:', searchTerm);
     
     // Get all video cards
     var videoCards = document.querySelectorAll(".videoCard");
     console.log('videoCards:', videoCards);
   
     // Loop through video cards and hide/show based on search term
     videoCards.forEach(function(videoCard) {
       var title = videoCard.querySelector(".titles").textContent.trim().toLowerCase();
       console.log('title:', title);
       var description = videoCard.querySelector(".description").textContent.trim().toLowerCase();
       console.log('description:', description);
       
       if (title.includes(searchTerm) || description.includes(searchTerm)) {
         videoCard.style.display = "block";
       } else {
         videoCard.style.display = "none";
       }
     });
   });
   
   
   

 


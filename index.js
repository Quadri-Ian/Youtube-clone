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
 
 if (screen.width <= 375) {
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

   var searchBar = document.getElementById("search-bar");
   
   searchBar.addEventListener("input", function() {
     var searchTerm = searchBar.value.toLowerCase();
     var textContent = document.body.innerText.toLowerCase();
     if (textContent.indexOf(searchTerm) !== -1) {
        var regex = new RegExp(searchTerm, "g");
        document.body.innerHTML = document.body.innerHTML.replace(regex, "<span class='highlight'>" + searchTerm + "</span>");
     }
  });
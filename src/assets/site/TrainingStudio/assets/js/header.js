'use strict';

document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('scroll', function(e){
        
        const header = document.querySelector(".headergeneral");

        if(window.scrollY > 850){
            header.removeAttribute("id", "header");
            header.setAttribute("id", "fixed-header");
        } else {
            header.removeAttribute("id", "fixed-header");
            header.setAttribute("id", "header");
        }
    });
});
        

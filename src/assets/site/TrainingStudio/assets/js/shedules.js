'use strict';

document.addEventListener('DOMContentLoaded', function () {
    console.log("Shedules charger");

    document.getElementById("btnMonday").addEventListener('click', function(envent){
        schedules(1)
    });

    document.getElementById("btnTuesday").addEventListener('click', function(envent){
        schedules(2)
    });

    document.getElementById("btnWednesday").addEventListener('click', function(envent){
        schedules(3)
    });

    document.getElementById("btnThursday").addEventListener('click', function(envent){
        schedules(4)
    });

    document.getElementById("btnFriday").addEventListener('click', function(envent){
        schedules(5)
    });

    

    function schedules(day) {
        const tableMonday = document.querySelectorAll(".monday");
        const tableTuesday = document.querySelectorAll(".tuesday");
        const tableWednesday = document.querySelectorAll(".wednesday");
        const tableThursday = document.querySelectorAll(".thursday");
        const tableFriday = document.querySelectorAll(".friday");

        switch (day){
            case 1:
                console.log("Monday");
                for (let i = 0; i < tableMonday.length; i++) {
                    tableMonday[i].classList.remove("none");
                    tableTuesday[i].classList.add("none");
                    tableWednesday[i].classList.add("none");
                    tableThursday[i].classList.add("none");
                    tableFriday[i].classList.add("none");
                };
                break;
            case 2:
                console.log("Tuesday");
                for (let i = 0; i < tableMonday.length; i++) {
                    tableMonday[i].classList.add("none");
                    tableTuesday[i].classList.remove("none");
                    tableWednesday[i].classList.add("none");
                    tableThursday[i].classList.add("none");
                    tableFriday[i].classList.add("none");
                };
                break;
            case 3:
                console.log("Wednesday");
                for (let i = 0; i < tableMonday.length; i++) {
                    tableMonday[i].classList.add("none");
                    tableTuesday[i].classList.add("none");
                    tableWednesday[i].classList.remove("none");
                    tableThursday[i].classList.add("none");
                    tableFriday[i].classList.add("none");
                };
                break;
            case 4:
                console.log("Thursday");
                for (let i = 0; i < tableMonday.length; i++) {
                    tableMonday[i].classList.add("none");
                    tableTuesday[i].classList.add("none");
                    tableWednesday[i].classList.add("none");
                    tableThursday[i].classList.remove("none");
                    tableFriday[i].classList.add("none");
                };
                break;
            case 5:
                console.log("Friday");
                for (let i = 0; i < tableMonday.length; i++) {
                    tableMonday[i].classList.add("none");
                    tableTuesday[i].classList.add("none");
                    tableWednesday[i].classList.add("none");
                    tableThursday[i].classList.add("none");
                    tableFriday[i].classList.remove("none");
                };
                break;
            default:
                console.log("cpt")
    
        }
    }

});
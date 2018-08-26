/*
 * Click menu function
*/
function scrollto(div)
{
 $('html,body').animate(
 {
  scrollTop: $("#"+div).offset().top
 },'slow');
}

/*
 * Real time
*/

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}

function start(){
    startTime();

    myFunction();
}

/*
 * Progress Bar
*/
$(document).ready(function () {
        var small={width: "80%",height: "auto"};
        var large={width: "120%",height: "auto"};
        var count=1; 
        $("#block").css(small).on('mouseover',function () { 
            $(this).animate((count==1)?large:small);
            count = 1-count;

        });
    });

/*
 * First Input
*/
function myFunction() {
    var txt;
    var person = prompt("Please enter your name:", " ");
    if (person == null || person == "") {
        txt = " ";
    } else {
        txt = person;
    }
    document.getElementById("name").innerHTML = txt;
}




/*
 * Open the drawer when the menu icon is clicked.
*/
var menu = document.querySelector('#menu');
var main = document.querySelector('.container');
var drawer = document.querySelector('.navbar');

menu.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
});
main.addEventListener('click', function() {
    drawer.classList.remove('open');
});
//hides all content on page load
$("#table2").hide();
   $("#continue1").hide();
   $("#hideAll").hide();

//Function that is called on page load
function animate() {

   setTimeout(() => {
      $("#exitButton").hide();
      let table = document.getElementById("table");
      table.classList.add('animate__animated', 'animate__bounceOutLeft');
      let stand = document.getElementById('scoreboard');
      stand.classList.add('animate__animated', 'animate__bounceOutRight');
      $('#table').remove();

   }, 2000)

   setTimeout(() => {
      $("#table2").show();
      $("#continue1").show();
      $("#hideAll").show();

      let second = document.getElementById("table2");
      second.classList.add('animate__animated', 'animate__bounceInLeft');
      let cont1 = document.getElementById("continue1");
      cont1.classList.add('animate__animated', 'animate__backInDown');


   }, 2500)
   setTimeout(() => {
      let cont1 = document.getElementById("continue1");
      cont1.classList.remove('animate__animated', 'animate__backInDown');

      cont1.classList.add('animate__animated', 'animate__tada');
   }, 5000)
}

animate();


//Buttons that when clicked, scroll to the said part of page
$("#continue1").click(function () {
   $('html,body').animate({
      scrollTop: $("#techStack").offset().top
   },
      'slow');
});

$("#continue2").click(function () {
   $('html,body').animate({
      scrollTop: $("#projects").offset().top
   },
      'slow');
});

$("#continue3").click(function () {
   $('html,body').animate({
      scrollTop: $("#aboutMe").offset().top
   },
      'slow');
});

$("#continue4").click(function () {
   $('html,body').animate({
      scrollTop: $("#contactMe").offset().top
   },
      'slow');
});

//functions that copies the phone and email address to clipboard.
function copyText() {
   var Text = document.getElementById("textbox");
   Text.select();
   navigator.clipboard.writeText(Text.value);
   document.getElementById("clipboard")
      .innerHTML = Text.value;
}

function copyText2() {


   var Text2 = document.getElementById("textbox2");
   Text2.select();
   navigator.clipboard.writeText(Text2.value);
   document.getElementById("clipboard2")
      .innerHTML = Text.value;
}










$('#collapseThree').click(function ($e) {
   $e.preventDefault();

});



var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
   myInput.focus()
})






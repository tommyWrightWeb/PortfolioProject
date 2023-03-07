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


function copyText() {

   /* Select text area by id*/
   var Text = document.getElementById("textbox");


   /* Select the text inside text area. */
   Text.select();

   /* Copy selected text into clipboard */
   navigator.clipboard.writeText(Text.value);

   /* Set the copied text as text for 
   div with id clipboard */
   document.getElementById("clipboard")
      .innerHTML = Text.value;
}

function copyText2() {

   /* Select text area by id*/
   var Text2 = document.getElementById("textbox2");


   /* Select the text inside text area. */
   Text2.select();

   /* Copy selected text into clipboard */
   navigator.clipboard.writeText(Text2.value);

   /* Set the copied text as text for 
   div with id clipboard */
   document.getElementById("clipboard2")
      .innerHTML = Text.value;
}





$("#table2").hide();
$("#continue1").hide();
$("#hideAll").hide();

function animate() {


   setTimeout(() => {
      document.getElementById('piece1').style.background = "burlywood"
   }, 500);
   setTimeout(() => {
      document.getElementById('piece2').style.background = "burlywood"
   }, 1000);
   setTimeout(() => {
      document.getElementById('piece3').style.background = "burlywood"
   }, 1500);
   setTimeout(() => {
      document.getElementById('piece4').style.background = "burlywood"
   }, 2000);
   setTimeout(() => {
      document.getElementById('piece5').style.background = "burlywood"
   }, 2500);
   setTimeout(() => {
      document.getElementById('piece6').style.background = "burlywood";

      document.getElementById('score').innerHTML = "11";

      let p6 = document.getElementById("piece6");
      p6.classList.add('animate__animated', 'animate__flash');
      let score = document.getElementById("score");
      score.classList.add('animate__animated', 'animate__flash');
   }, 3000);
   setTimeout(() => {
      document.getElementById('piece7').style.background = "burlywood"
      score.classList.remove('animate__animated', 'animate__flash');
   }, 5500);
   setTimeout(() => {
      document.getElementById('piece8').style.background = "burlywood"
   }, 6000);
   setTimeout(() => {
      document.getElementById('piece9').style.background = "burlywood"
   }, 6500);
   setTimeout(() => {
      document.getElementById('piece10').style.background = "burlywood"
   }, 7000);
   setTimeout(() => {
      document.getElementById('piece11').style.background = "burlywood"
      let p11 = document.getElementById("piece11");
      p11.classList.add('animate__animated', 'animate__flash');
      document.getElementById('score').innerHTML = "24";
      let score = document.getElementById("score");
      score.classList.add('animate__animated', 'animate__flash');

   }, 7500);
   setTimeout(() => {
      document.getElementById('piece12').style.background = "burlywood"
      score.classList.remove('animate__animated', 'animate__flash');
   }, 10000);
   setTimeout(() => {
      document.getElementById('piece13').style.background = "burlywood"
      let p13 = document.getElementById("piece13");
      p13.classList.add('animate__animated', 'animate__flash');
      document.getElementById('score').innerHTML = "32";
      let score = document.getElementById("score");
      score.classList.add('animate__animated', 'animate__flash');
   }, 10500);
   setTimeout(() => {
      document.getElementById('piece14').style.background = "burlywood"
      score.classList.remove('animate__animated', 'animate__flash');
   }, 12000);
   setTimeout(() => {
      document.getElementById('piece15').style.background = "burlywood"
   }, 12500);
   setTimeout(() => {
      document.getElementById('piece16').style.background = "burlywood"
   }, 13000);
   setTimeout(() => {
      document.getElementById('piece17').style.background = "burlywood"
   }, 13500);
   setTimeout(() => {
      document.getElementById('piece18').style.background = "burlywood"
   }, 14000);
   setTimeout(() => {
      document.getElementById('piece19').style.background = "burlywood"
   }, 14500);
   setTimeout(() => {
      document.getElementById('piece20').style.background = "burlywood"
      let p20 = document.getElementById("piece20");
      p20.classList.add('animate__animated', 'animate__flash');
      document.getElementById('score').innerHTML = "47";
      let score = document.getElementById("score");
      score.classList.add('animate__animated', 'animate__flash');
   }, 15000);
   setTimeout(() => {
      document.getElementById('piece21').style.background = "burlywood"
   }, 15500);
   setTimeout(() => {
      document.getElementById('piece22').style.background = "burlywood"
      score.classList.remove('animate__animated', 'animate__flash');
   }, 16000);
   setTimeout(() => {
      document.getElementById('piece23').style.background = "burlywood"
   }, 16500);
   setTimeout(() => {
      document.getElementById('piece24').style.background = "burlywood"
   }, 17000);
   setTimeout(() => {
      document.getElementById('piece25').style.background = "burlywood"
      let p25 = document.getElementById("piece25");
      p25.classList.add('animate__animated', 'animate__flash');
      document.getElementById('score').innerHTML = "57";
      let score = document.getElementById("score");
      score.classList.add('animate__animated', 'animate__flash');
   }, 17500);
   setTimeout(() => {
      document.getElementById('piece26').style.background = "burlywood"
   }, 18500);
   setTimeout(() => {
      document.getElementById('piece27').style.background = "burlywood"
      score.classList.remove('animate__animated', 'animate__flash');
   }, 19000);
   setTimeout(() => {
      document.getElementById('piece28').style.background = "burlywood"
   }, 19500);
   setTimeout(() => {
      document.getElementById('piece29').style.background = "burlywood"
   }, 20000);
   setTimeout(() => {
      document.getElementById('piece30').style.background = "burlywood"
   }, 20500);
   setTimeout(() => {
      document.getElementById('piece31').style.background = "burlywood"
   }, 21000);
   setTimeout(() => {
      document.getElementById('piece32').style.background = "burlywood"
      let p32 = document.getElementById("piece32");
      p32.classList.add('animate__animated', 'animate__flash');
      document.getElementById('score').innerHTML = "71";
      let score = document.getElementById("score");
      score.classList.add('animate__animated', 'animate__flash');
   }, 21500);







   setTimeout(() => {
      $("#exitButton").hide();
      let table = document.getElementById("table");
      table.classList.add('animate__animated', 'animate__bounceOutLeft');
      let stand = document.getElementById('scoreboard');
      stand.classList.add('animate__animated', 'animate__bounceOutRight');
      $('#table').remove();

   }, 25000)

   setTimeout(() => {
      $("#table2").show();
      $("#continue1").show();
      $("#hideAll").show();

      let second = document.getElementById("table2");
      second.classList.add('animate__animated', 'animate__bounceInLeft');
      let cont1 = document.getElementById("continue1");
      cont1.classList.add('animate__animated', 'animate__backInDown');


   }, 27000)
   setTimeout(() => {
      let cont1 = document.getElementById("continue1");
      cont1.classList.remove('animate__animated', 'animate__backInDown');
      cont1.classList.add('animate__animated', 'animate__tada');
   }, 28000)


}

animate();


$('#collapseThree').click(function ($e) {
   $e.preventDefault();

});



var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
   myInput.focus()
})

function Exit() {
   $("#table").hide();
   $("#table2").show();
   $("#continue1").show();
   $("#hideAll").show();
   $("#scoreboard").hide();
   $("#exitButton").hide();




}




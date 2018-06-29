$(document).ready(function() {

  $("form").submit(function(e) {
      e.preventDefault();
  });

  const form = $('.resForm');

  $('#reserve').on('click', function(){
    form.animate({ opacity: "1" }, 1000);
  });

  $('#submit').on('click',function(){
    alert("Thank you for making a reservation!");
    $('#reserve').hide();
    form.hide();
    $('.resTxt').html('Congratulations!');
  });



});

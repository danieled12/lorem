

$(document).ready(function(){

  var text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque nibh tempus justo molestie imperdiet. Vestibulum imperdiet venenatis iaculis. Mauris varius sit amet leo sed placerat. In lorem risus, sollicitudin id consectetur eu, euismod tincidunt felis. Quisque elementum leo et pharetra convallis. Aenean vestibulum felis eget dapibus auctor. In at turpis commodo, blandit justo vitae, dignissim libero. Etiam sagittis urna dictum orci interdum sodales. Integer finibus ultricies consectetur. Fusce hendrerit maximus egestas. Etiam convallis quis augue vitae fermentum.";

  $('#button1').click(function(){
    $('#lorem').append('<p class="blue">'+text+ '</p>');
  });

  $('#button2').click(function(){
    $('#lorem').append('<p class="green">'+text+ '</p>');
  });

  $('#button3').click(function(){
    $('#lorem').append('<p class="orange">'+text+ '</p>');
  });

  $('#button4').click(function(){
    $('.blue').show();
  });

  $('#button5').click(function(){
    $('.green').show();
  });

  $('#button6').click(function(){
    $('.orange').show();
  });

  $('#button7').click(function(){
    $('.blue').hide();
  });

  $('#button8').click(function(){
    $('.green').hide();
  });

  $('#button9').click(function(){
    $('.orange').hide();
  });

});

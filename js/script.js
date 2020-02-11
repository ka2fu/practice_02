$(function(){
  $('#modal').hide();

  $('header').on('click', '#open', function(){
    $('#open').fadeOut(1, function(){
      $('#modal').slideDown();
    });
  });

  $('#modal').on('click', '#close', function(){
    $('#modal').slideUp(function(){
      $('#open').show();
    });
  });
});

$('button').on('click', function(){
                 
    var lang = $(this).data('lang'); 
      
    $('html').prop('lang', lang);
      
  });

/*FAQ 영역*/
$(document).ready(function(){
    $('.question > a').click(function(){
        if ( $(this).parent().hasClass('active') ){
          $(this).parent().removeClass('active');
          $(this).next().slideUp();
        }else {
          $('.question').removeClass('active');
          $('.answer').slideUp();
          $(this).parent().addClass('active');
          $(this).next().slideDown();
        }
        return false;
    });
 });


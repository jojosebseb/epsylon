

setTimeout(
  function()
  {
    $('.asset').addClass('active');
}, 100);

$('.asset').each(function(i){
    $(this).css({
        'transition-delay': i/10+'s'
    })
})

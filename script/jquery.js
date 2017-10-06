$('#indexSlider').slick({
    arrows: false,
    dots: true,
    fade: true,
});

$('.dropdown-handle').on('click', function(){
    $(this).parent().parent().find('.dropdown-parent').removeClass('active');
    $(this).parent().toggleClass('active');
});

$('.mobile-handle').on('click', function(){
    $(this).toggleClass('active');
    $('.nav-ul').toggleClass('active');
});


$('.testimonial-slide').slick({
  dots: true,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(window).on('scroll', function(){
    $('#navbar').addClass('white');
})

setTimeout(function(){
     $('#navbar').removeClass('entry');
 }, 300);
 setTimeout(function(){
      $('#indexSlider').removeClass('entry');
}, 500);
// setTimeout(function(){
//      $('#indexSection-1').removeClass('entry');
// }, 200);

$('#indexSection-1').waypoint(function() {
    $('#indexSection-1').removeClass('entry');
},{offset: '50%'});

$('#indexProductHighlight').waypoint(function() {
    $('.product-module').each(function(i){
        $(this).css({
            'transition-delay': i/10+'s'
        })
    });
    $('#indexProductHighlight').removeClass('entry');
},{offset: '50%'});



$('#indexSection-2').waypoint(function() {
    $('#indexSection-2 .flex-module').each(function(i){
        $(this).css({
            'transition-delay': i/10+'s'
        })
    });
    $('#indexSection-2').removeClass('entry');
},{offset: '50%'});

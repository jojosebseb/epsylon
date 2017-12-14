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
},{offset: '90%'});

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
},{offset: '70%'});

$('#moduleBelt').waypoint(function() {
    setTimeout(function(){
        $('#moduleBelt .flex-module').css({
            'transition': 'all .3s ease'
        });
   }, 2000);

    $('#moduleBelt .flex-module').each(function(i){
        $(this).css({
            'transition': 'all .5s ease '+i/10+'s'
        });
    });
    $('#moduleBelt').removeClass('entry');

},{offset: '70%'});

$('#featureBelt').waypoint(function() {
    setTimeout(function(){
        $('#featureBelt .flex-module').css({
            'transition': 'all .3s ease'
        });
   }, 2000);

    $('#featureBelt .flex-module').each(function(i){
        $(this).css({
            'transition': 'all .5s ease '+i/10+'s'
        });
    });
    $('#featureBelt').removeClass('entry');

},{offset: '70%'});

$('#conceptBelt').waypoint(function() {
    setTimeout(function(){
        $('#conceptBelt .flex-module').css({
            'transition': 'all .3s ease'
        });
   }, 2000);

    $('#conceptBelt .flex-module').each(function(i){
        $(this).css({
            'transition': 'all .5s ease '+i/10+'s'
        });
    });
    $('#conceptBelt').removeClass('entry');

},{offset: '70%'});

$('#mainBelt').waypoint(function() {
    $('#mainBelt').removeClass('entry');
},{offset: '0%'});

$('#supportBanner').waypoint(function() {
    $('#supportBanner .flex-module').each(function(i){
        $(this).css({
            'transition-delay': i/10+'s'
        })
    });
    $('#supportBanner').removeClass('entry');
},{offset: '70%'});

$('#aboutSection-1').waypoint(function() {
    $('#aboutSection-1').removeClass('entry');
},{offset: '70%'});

$('#aboutSection-2').waypoint(function() {
    $('#aboutSection-2').removeClass('entry');
},{offset: '70%'});

$('#aboutSection-3').waypoint(function() {
    $('#aboutSection-3').removeClass('entry');
},{offset: '70%'});

$('#contactSection').waypoint(function() {
    $('#contactSection').removeClass('entry');
    $('#contactSection div').each(function(i){
        $(this).css({
            'transition-delay': i/5+'s'
        })
    });
    $('#contactSection .form-input').each(function(i){
        $(this).css({
            'transition-delay': ((i/5)+1)+'s'
        })
    });
},{offset: '70%'});

$('#clientSection-1').waypoint(function() {
    $('#clientSection-1').removeClass('entry');
    $('#clientSection-1 div').each(function(i){
        $(this).css({
            'transition-delay': i/10+'s'
        })
    });
},{offset: '70%'});



$('#indexSection-2 .flex').slick({
  dots: true,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        // variableWidth: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});

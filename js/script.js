$(document).ready(function(){
    //menu-responsive
    $('.nav-icon').click(function() {
        $('.nav-holder').toggleClass('active');
        return false;
    });
    //scroll
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });
    //owl-carousel
    $(".owl-carousel").owlCarousel({
        items:1,
        autoplay: true,
        loop:true,
        responsive:{ 
            0:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:1
            }
        }
    });  
});
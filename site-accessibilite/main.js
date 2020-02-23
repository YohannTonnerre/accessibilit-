$(window).scroll(function() {
    var top_of_presentation = $("#presentation").offset().top;
    var bottom_of_presentation = $("#presentation").offset().top + $("#presentation").outerHeight();

    var top_of_auditifs = $("#handicaps-auditifs").offset().top;
    var bottom_of_auditifs = $("#handicaps-auditifs").offset().top + $("#handicaps-auditifs").outerHeight();

    var top_of_visuels = $("#handicaps-visuels").offset().top;
    var bottom_of_visuels = $("#handicaps-visuels").offset().top + $("#handicaps-visuels").outerHeight();

    var top_of_cognitifs = $("#handicaps-cognitifs").offset().top;
    var bottom_of_cognitifs = $("#handicaps-cognitifs").offset().top + $("#handicaps-cognitifs").outerHeight();

    var top_of_moteurs = $("#handicaps-moteurs").offset().top;
    var bottom_of_moteurs = $("#handicaps-moteurs").offset().top + $("#handicaps-moteurs").outerHeight();

    var top_of_vestibulaires = $("#handicaps-vestibulaires").offset().top;
    var bottom_of_vestibulaires = $("#handicaps-vestibulaires").offset().top + $("#handicaps-vestibulaires").outerHeight();


    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_presentation) && (top_of_screen < bottom_of_presentation)){
        $('.presentation-link').addClass('active');
        $('.auditif-link').removeClass('active');
        $('.visuel-link').removeClass('active');
        $('.cognitif-link').removeClass('active');
        $('.moteur-link').removeClass('active');
        $('.vestivulaire-link').removeClass('active');
    }
    else{
    	$('a').removeClass('active');
    }

    if ((bottom_of_screen > top_of_auditifs) && (top_of_screen < bottom_of_auditifs)){
        $('.presentation-link').removeClass('active');
        $('.auditif-link').addClass('active');
        $('.visuel-link').removeClass('active');
        $('.cognitif-link').removeClass('active');
        $('.moteur-link').removeClass('active');
        $('.vestivulaire-link').removeClass('active');
    }

    if ((bottom_of_screen > top_of_visuels) && (top_of_screen < bottom_of_visuels)){
        $('.presentation-link').removeClass('active');
        $('.auditif-link').removeClass('active');
        $('.visuel-link').addClass('active');
        $('.cognitif-link').removeClass('active');
        $('.moteur-link').removeClass('active');
        $('.vestivulaire-link').removeClass('active');
    }

    if ((bottom_of_screen > top_of_cognitifs) && (top_of_screen < bottom_of_cognitifs)){
        $('.presentation-link').removeClass('active');
        $('.auditif-link').removeClass('active');
        $('.visuel-link').removeClass('active');
        $('.cognitif-link').addClass('active');
        $('.moteur-link').removeClass('active');
        $('.vestivulaire-link').removeClass('active');
    }

    if ((bottom_of_screen > top_of_moteurs) && (top_of_screen < bottom_of_moteurs)){
        $('.presentation-link').removeClass('active');
        $('.auditif-link').removeClass('active');
        $('.visuel-link').removeClass('active');
        $('.cognitif-link').removeClass('active');
        $('.moteur-link').addClass('active');
        $('.vestivulaire-link').removeClass('active');
    }

    if ((bottom_of_screen > top_of_vestibulaires) && (top_of_screen < bottom_of_vestibulaires)){
        $('.presentation-link').removeClass('active');
        $('.auditif-link').removeClass('active');
        $('.visuel-link').removeClass('active');
        $('.cognitif-link').removeClass('active');
        $('.moteur-link').removeClass('active');
        $('.vestibulaire-link').addClass('active');
    }
});



$('.li-button').click(function(){
    $('.li-button').removeClass('active');
    $(this).toggleClass('active');
})

$('.li-button:nth-child(1)').click(function(){
    $('.slide:nth-child(1)').toggleClass('active');
    $('.slide:nth-child(2)').removeClass('active');
    $('.slide:nth-child(3)').removeClass('active');
    $('.slide:nth-child(4)').removeClass('active');
    $('.slide:nth-child(5)').removeClass('active');
})

$('.li-button:nth-child(2)').click(function(){
    $('.slide:nth-child(1)').removeClass('active');
    $('.slide:nth-child(2)').toggleClass('active');
    $('.slide:nth-child(3)').removeClass('active');
    $('.slide:nth-child(4)').removeClass('active');
    $('.slide:nth-child(5)').removeClass('active');
})

$('.li-button:nth-child(3)').click(function(){
    $('.slide:nth-child(1)').removeClass('active');
    $('.slide:nth-child(2)').removeClass('active');
    $('.slide:nth-child(3)').toggleClass('active');
    $('.slide:nth-child(4)').removeClass('active');
    $('.slide:nth-child(5)').removeClass('active');
})

$('.li-button:nth-child(4)').click(function(){
    $('.slide:nth-child(1)').removeClass('active');
    $('.slide:nth-child(2)').removeClass('active');
    $('.slide:nth-child(3)').removeClass('active');
    $('.slide:nth-child(4)').toggleClass('active');
    $('.slide:nth-child(5)').removeClass('active');
})

$('.li-button:nth-child(5)').click(function(){
    $('.slide:nth-child(1)').removeClass('active');
    $('.slide:nth-child(2)').removeClass('active');
    $('.slide:nth-child(3)').removeClass('active');
    $('.slide:nth-child(4)').removeClass('active');
    $('.slide:nth-child(5)').toggleClass('active');
})



$('.li-button2').click(function(){
    $('.li-button2').removeClass('active');
    $(this).toggleClass('active');
})


$('.li-button2:nth-child(1)').click(function(){
    $('.slide2:nth-child(1)').toggleClass('active');
    $('.slide2:nth-child(2)').removeClass('active');
    $('.slide2:nth-child(3)').removeClass('active');
    $('.slide2:nth-child(4)').removeClass('active');
    $('.slide2:nth-child(5)').removeClass('active');
})

$('.li-button2:nth-child(2)').click(function(){
    $('.slide2:nth-child(1)').removeClass('active');
    $('.slide2:nth-child(2)').toggleClass('active');
    $('.slide2:nth-child(3)').removeClass('active');
    $('.slide2:nth-child(4)').removeClass('active');
    $('.slide2:nth-child(5)').removeClass('active');
})

$('.li-button2:nth-child(3)').click(function(){
    $('.slide2:nth-child(1)').removeClass('active');
    $('.slide2:nth-child(2)').removeClass('active');
    $('.slide2:nth-child(3)').toggleClass('active');
    $('.slide2:nth-child(4)').removeClass('active');
    $('.slide2:nth-child(5)').removeClass('active');
})

$('.li-button2:nth-child(4)').click(function(){
    $('.slide2:nth-child(1)').removeClass('active');
    $('.slide2:nth-child(2)').removeClass('active');
    $('.slide2:nth-child(3)').removeClass('active');
    $('.slide2:nth-child(4)').toggleClass('active');
    $('.slide2:nth-child(5)').removeClass('active');
})

$('.li-button2:nth-child(5)').click(function(){
    $('.slide2:nth-child(1)').removeClass('active');
    $('.slide2:nth-child(2)').removeClass('active');
    $('.slide2:nth-child(3)').removeClass('active');
    $('.slide2:nth-child(4)').removeClass('active');
    $('.slide2:nth-child(5)').toggleClass('active');
})



function oui(){
    $('.non').addClass('faux');
}

function transcription1(){
    $('.hidden').toggleClass('active');
}

function transcription2(){
    $('.hidden2').toggleClass('active');
}


function transcription3(){
    $('.hidden3').toggleClass('active');
}
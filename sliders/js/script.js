$(document).ready(function(){
    $('.slider').slick({
        'slidesToShow': 3,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>left-arrow</title><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="none" stroke="#565656"><polyline points="23,30 9,16 23,2 " transform="translate(0, 0)"></polyline></g></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>right-arrow</title><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="none" stroke="#565656"><polyline points="9,2 23,16 9,30 " transform="translate(0, 0)"></polyline></g></svg></button>',
        dots: true,
        responsive: [
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
        }] 
    });
});
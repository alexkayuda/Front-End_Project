

$(document).ready(function(){

    /* To Test if it actually works
    if(jQuery)
        alert("yes");
    else
        alert("No");
    */

    //------------------------------------------------------------------------------------------------------------------------------//
                /*NAVIGATION BAR: Adds sticky class to nav element in the header when we are approaching section-features */
    $(".js--section-features").waypoint(function(direction){    /* direction detects where the used is scrolling up or down */
        if(direction == "down"){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
    }, {
        /*This allows us to show something BEFORE we get to the point we need.
        Specifically, 60px before */
        offset: "60px;"
    });

    $(".js--section-features").waypoint(function(direction){
        if(direction == "down"){
            $(".js--scroll-top").css("display", "block");
        }else{
            $(".js--scroll-top").css("display", "none");
        }
    }, {
        /*This allows us to show something BEFORE we get to the point we need.
        Specifically, 60px before */
        offset: "60px;"
    });

     //------------------------------------------------------------------------------------------------------------------------------//
                                                        /* Scrolling buttons */

    //When we click on "I'm Hungry!", it redirects us to the meal section plan. Takes 1000ms = 1s.
    $(".js--scroll-to-meal-plans").click(function(){
        $("html , body").animate({scrollTop: $(".js--section-meal-plans").offset().top}, 1000);
    });

    $(".js--scroll-to-features").click(function(){
        $("html, body").animate({scrollTop: $(".js--section-features").offset().top}, 1000);
    });

    $(".js--scroll-top").click(function(){
        $("html , body").animate({scrollTop: $("header").offset().top}, 1000);
    });


     //------------------------------------------------------------------------------------------------------------------------------//
                                                        /*  This is for navigation bar 
    1) Google: smooth scrolling snippets (https://css-tricks.com/snippets/jquery/smooth-scrolling/)
    2) In html, give each section that you want to be scrooled to a unique ID.
    2) in html, each link has href="#". Concat id into href string => href="#features"
        Done, it should work based on code below*/

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            };
            });
        }
        }
    });

    //------------------------------------------------------------------------------------------------------------------------------//
                            /* Animations on scroll */
    //https://daneden.github.io/animate.css/

    //This is for "food delivery" section
    $(".js--animation-waypoint-1").waypoint(function(direction){
        $(".js--animation-waypoint-1").addClass("animated fadeIn");
    },{
        offset: "70%;"
    });

    //This is for "How it works" section
    $(".js--animation-waypoint-2").waypoint(function(direction){
        $(".js--animation-waypoint-2").addClass("animated fadeInUp");
    },{
        offset: "70%;"
    });

    //This is for "Cities" section
    $(".js--animation-waypoint-3").waypoint(function(direction){
        $(".js--animation-waypoint-3").addClass("animated fadeIn");
    },{
        offset: "70%;"
    });

    //This is for "Plans" section
    $(".js--animation-waypoint-4").waypoint(function(direction){
        $(".js--animation-waypoint-4").addClass("animated pulse");
    },{
        offset: "70%;"
    });

    $(".js--mobile-navigation-bar").click(function(){
        var nav = $(".js--main-nav");
        var icon = $(".js--mobile-navigation-bar i");

        nav.slideToggle(200);
        if(icon.hasClass("ion-navicon-round")){

            icon.removeClass("ion-navicon-round");
            icon.addClass("ion-close-round");

        }else{
            icon.addClass("ion-navicon-round");
            icon.removeClass("ion-close-round");
        }

    });

//------------------------------------------------------------------------------------------------------------------------------//
                            /* GOOGLE MAPS */
    //https://hpneo.github.io/gmaps/

    var map = new GMaps({
        div: ".map",
        lat: 40.7139667,
        lng: -73.9915138,
        zoom: 15
    });

    map.addMarker({
    lat: 40.7128953,
    lng: -74.0037463,
    title: '1 Centre St.',
    infoWindow: {
        content: "<p>That's where I am! COOOOOL!</p>"
        }
    });

//------------------------------------------------------------------------------------------------------------------------------//
                            /* Try */
   


});

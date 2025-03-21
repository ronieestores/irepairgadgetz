(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').scrollTop(0); // Instantly move to the top
        return false;
    });
    

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

$(document).ready(function(){
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 600,
        margin: 30,
        autoHeight: false,
        mouseDrag: false, // Prevent mouse drag issues
        touchDrag: true,  // Enable touch gestures
        pullDrag: true, 
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 }
        }
    }).on("drag.owl.carousel", function(event) {
        // When user touches the slider, pause autoplay
        $(this).trigger("stop.owl.autoplay");
    }).on("translated.owl.carousel", function(event) {
        // Restart autoplay after user interaction
        $(this).trigger("play.owl.autoplay", [5000]);
    });
    

    // Function to equalize the heights of all items
    function equalizeHeights() {
        let maxHeight = 0;
        $('.testimonial-item').each(function() {
            let thisHeight = $(this).outerHeight();
            if (thisHeight > maxHeight) {
                maxHeight = thisHeight;
            }
        });
        $('.testimonial-item').css('height', maxHeight + 'px');
    }

    // Run height adjustment after carousel initializes and resizes
    $(".testimonial-carousel").on('initialized.owl.carousel resized.owl.carousel', function() {
        setTimeout(equalizeHeights, 500);
    });

    // Run height adjustment on page load
    $(window).on('load', equalizeHeights);
});


document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".lazy-video").forEach(el => {
        el.addEventListener("click", function() {
            const videoId = this.getAttribute("data-yt");
            this.innerHTML = `<iframe width="100%" height="315"
                src="https://www.youtube.com/embed/${videoId}?autoplay=1"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        });
    });
});

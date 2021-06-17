const index = {};

index.$menu = $('#sideMenu');
index.$navItem = $('.navItem');
index.$navItemName = $('.navItemName')
index.$home = $('#home');
index.$about = $('#about');
index.$skills = $('#skills');
index.$projects = $('#projects');
index.$projects = $('#testimonials');
index.$contact = $('#contact');
index.$menuButton = $('#menuButton');
index.$scrollDown = $('#scrollDown');
index.$loading = $('.loading');
index.isOpen = false;



// Scroll function
index.scroll = function(target) {
    $('html,body').animate({ scrollTop: $(target).offset().top }, 500);
}

// Menu button function
index.showHideMenu = function() {
    index.$menu.toggleClass('sideMenuHide sideMenuShow');
    index.isOpen = !index.isOpen;
}
$('.mobile-menu-btn').on('click', function() {
    if ($(this).hasClass('active')) {
        $('.mobile-menu-btn').removeClass('active');
    } else {
        $('.mobile-menu-btn').addClass('active');
    }
});


// Mobile class changes on initial load
if ($(window).width() <= 990) {
    index.$menu.addClass('sideMenuHide').removeClass('sideMenuShow');
    index.$scrollDown.hide();
}

index.eventListeners = function() {
    // when windox resizes between large and small displayes
    $(window).on('resize', function() {
        if ($(window).width() > 990) {
            index.$menu.removeClass('sideMenuHide').addClass('sideMenuShow')
            index.$scrollDown.show();
            index.isOpen = false;
        } else {
            index.$menu.removeClass('sideMenuShow').addClass('sideMenuHide');
            index.isOpen = false;
            index.$scrollDown.hide();
        }
    });

    // Nav menu click events for scroll function
    $('a[href*=\\#]').on('click', function() {
        index.scroll(this.hash);
    });

    // Menu button click event
    index.$menuButton.on('click', index.showHideMenu);

    // Hide menu when clicking a link
    index.$navItem.on('click', function() {
        if (index.isOpen) { // Hide menu when clicking a link
            index.showHideMenu();
        }
    });

    // Menu button ENTER key event
    index.$menuButton.on('keypress', function(e) {
        if (e.which === 13) {
            $(this).trigger('click');
        }
    })
}

// init method
index.init = function() {
    index.eventListeners();
}


$(window).on('load', function() {
    /*    fadeOutTime = 500; */
    index.$loading.fadeOut(500);

});


//OWl Carousel 

$(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    });
    // Document Ready
    $(function() {
        index.init();
    })
});
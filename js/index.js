const index = {};

index.$menu = $('#sideMenu');
index.$navItem = $('.navItem');
index.$navItemName = $('.navItemName')
index.$home = $('#home');
index.$about = $('#about');
index.$skills = $('#skills');
index.$projects = $('#projects');
index.$testimonials = $('#testimonials');
index.$contact = $('#contact');
index.$menuButton = $('#menuButton');
index.$scrollDown = $('#scrollDown');
index.$loading = $('.loading');
index.$scrollTop = $('.scroll-top');
index.$viewMore = $('#view-more')
index.$inActive = $('.inactive')


index.isOpen = false;



// Scroll function
/* index.scroll = function(target) {
    $('html,body').animate({ scrollTop: $(target).offset().top }, 500);
} */

/* let scrollTop = document.querySelector(".scroll-top")

document.addEventListener("scroll", function() {
    if (window.scrollY > 550) {
        scrollTop.classList.add("active")
    } else {
        scrollTop.classList.remove("active")
    }
})
 */


$(document).scroll(function() {
    if (window.scrollY > 650) {
        index.$scrollTop.addClass("active")
    } else {
        index.$scrollTop.removeClass("active")
    }
})


// Scroll top
index.$scrollTop.on('click', function() {
    $(document).scrollTop(0);
});


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
    /* $('a[href*=\\#]').on('click', function() {
        index.scroll(this.hash);
    }); */

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

/* Blog view more */
index.$viewMore.on('click', function() {
    index.$inActive.toggleClass('inactive')
})


$(window).on('load', function() {
    /*    fadeOutTime = 500; */
    index.$loading.fadeOut();
});



AOS.init({
    duration: 2000,
})

// Document Ready
$(function() {
    index.init();
})
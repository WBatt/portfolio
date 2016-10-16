var pageBottom = $('.home').offset().top + $('.home').height();

window.onscroll = function() {
    
    var stop = Math.round(window.scrollTop());
    console.log(stop);
    console.log(pageBottom);
    if (stop > pageBottom) {
        $('.topbar').addClass('headerHeight');
    } else {
        $('.topbar').removeClass('headerHeight');
    }
    
};
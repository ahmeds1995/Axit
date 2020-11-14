$(function(){

    // prevent outline from any button when clicking
    $('button, .header form input[type="submit"]').click(function(){

        $(this).css('outline', 'none');
    });

    // add and remove scrolled class to the navbar when scrolling
    let navBar = $('.navbar');
    $(window).scroll(function(){

        $(window).scrollTop() >= navBar.height() ? navBar.addClass('scrolled') : navBar.removeClass('scrolled');
    });

    // deal with tabs
    $('.tabs-switch li').click(function(){

        $(this).addClass('selected').siblings().removeClass('selected');

        // hide all othe tabs and display only the selected
        $('.tabs .tabs-content > div').hide();

        $($(this).data('tab')).show();
    });
});
// --------------------------------------------------
// demo.js by ThemeModern 2016
// --------------------------------------------------

jQuery(document).ready(function($) {
    'use strict';

    jQuery(".color1").click(function() {
        jQuery("#colors").attr("href", "switcher/colors/aqua.css");
    });

    jQuery(".color2").click(function() {
        jQuery("#colors").attr("href", "switcher/colors/blue.css");
        $('.logo img').attr('src', 'images/Header/logo.png');
        $('.header-v2 .logo img').attr('src', 'images/Header/logo-invest.png');
        $('.footer-col-1 img').attr('src', 'images/Header/logo-invest.png');
    });

    jQuery(".color3").click(function() {
        jQuery("#colors").attr("href", "switcher/colors/green.css");
        $('.logo img').attr('src', 'images/Header/logo-green.png');
        $('.header-v2 .logo img').attr('src', 'images/Header/logo-green-invest.png');
        $('.footer-col-1 img').attr('src', 'images/Header/logo-green-invest.png');
    });

    jQuery(".color4").click(function() {
        jQuery("#colors").attr("href", "switcher/colors/grey.css");
    });

    jQuery(".color5").click(function() {
        jQuery("#colors").attr("href", "switcher/colors/orange.css");
        $('.logo img').attr('src', 'images/Header/logo-orange.png');
        $('.header-v2 .logo img').attr('src', 'images/Header/logo-orange-invest.png');
        $('.footer-col-1 img').attr('src', 'images/Header/logo-orange-invest.png');
    });

    jQuery(".color6").click(function() {
        jQuery("#colors").attr("href", "switcher/colors/pink.css");
    });

    jQuery(".color7").click(function() {
        jQuery("#colors").attr("href", "switcher/colors/purple.css");
    });

    jQuery(".color8").click(function() {
        jQuery("#colors").attr("href", "switcher/colors/red.css");
        $('.logo img').attr('src', 'images/Header/logo-red.png');
        $('.header-v2 .logo img').attr('src', 'images/Header/logo-red-invest.png');
        $('.footer-col-1 img').attr('src', 'images/Header/logo-red-invest.png');
    });

    jQuery(".color9").click(function() {
        jQuery("#colors").attr("href", "switcher/colors/yellow.css");
        $('.logo img').attr('src', 'images/Header/logo-yellow.png');
        $('.header-v2 .logo img').attr('src', 'images/Header/logo-yellow-invest.png');
        $('.footer-col-1 img').attr('src', 'images/Header/logo-yellow-invest.png');
    });

    jQuery(".color10").click(function() {
        jQuery("#colors").attr("href", "switcher/colors/lime.css");
    });

    jQuery(".color11").click(function() {
        jQuery("#colors").attr("href", "switcher/colors/main-blue-2.css");
        $('.logo img').attr('src', 'images/Header/logo-blue.png');
        $('.header-v2 .logo img').attr('src', 'images/Header/logo-blue-invest.png');
        $('.footer-col-1 img').attr('src', 'images/Header/logo-blue-invest.png');
    });




    jQuery(".custom-show").hide();

    jQuery(".custom-close").click(function() {
        jQuery(this).hide();
        jQuery(".custom-show").show();
        jQuery('#switcher').animate({
            'left': '+=240px'
        }, 'medium');
    });

    jQuery(".custom-show").click(function() {
        jQuery(this).hide();
        jQuery(".custom-close").show();
        jQuery(this).parent().animate({
            'left': '-=240px'
        }, 'medium');
    });

    jQuery('#tm-layout-switch').on('change', function() {
        if ($('#tm-layout-switch').val() == 'wide') {
            $('body').removeClass('finance-boxed-bg');
        } else if ($('#tm-layout-switch').val() == 'boxed') {
            $('body').addClass('finance-boxed-bg');
            $('.finance-boxed-bg').css('background-image', 'url(switcher/images/patern01.png)');
        }
    });

    jQuery('#tm-boxed-bg li').click(function() {
        if ($('#tm-layout-switch').val() != "boxed") {
            alert('Please select boxed layout first.');
        }
    });

    $('#switcher ul [class*="bg"]').click(function() {
        $('.finance-boxed-bg').css('background-image', 'url(switcher/images/patern' + $(this).attr('data-value') + '.png)');
    });

});
// ==================================================
// Project Name  :  Hello Porto portfolio
// File          :  JS Base
// Version       :  1.0.0
// Last change   :  10 January 2019
// Author        :  HtmlMate
// ==================================================




(function($) {
  "use strict";





  // mobile menu - start
  // --------------------------------------------------
  $(document).ready(function () {
    // $("#sidebar").mCustomScrollbar({
    //   theme: "minimal"
    // });

    $('#dismiss, .overlay').on('click', function () {
      // hide sidebar
      $('#sidebar').removeClass('active');
      // hide overlay
      $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
      // open sidebar
      $('#sidebar').addClass('active');
      // fade in the overlay
      $('.overlay').addClass('active');
      // $('.collapse.in').toggleClass('in');
      // $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
  });
  // mobile menu - end
  // --------------------------------------------------




  
  // back to top - start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $(".scroll").on('click', function() {
      $("html,body").animate({
        scrollTop: $("#thetop").offset().top
      }, "slow");
      return false
    })
  });
  // back to top - end
  // --------------------------------------------------




  
  // preloader - start
  // --------------------------------------------------
  $(window).on('load', function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });
  // preloader - end
  // --------------------------------------------------




  
  // sidebar-menu - start
  // --------------------------------------------------
  $(document).ready(function () {
    // $("#sidebar-menu").mCustomScrollbar({
    //   theme: "minimal"
    // });

    $('.dismiss-sidebar-menu, .overlay').on('click', function () {
      $('#sidebar-menu').removeClass('active');
      $('.overlay').removeClass('active');
    });

    $('#sidebar-menu-btn').on('click', function () {
      $('#sidebar-menu').addClass('active');
      $('.overlay').addClass('active');
      $('.collapse.in').toggleClass('in');
    });
  });
  // sidebar-menu - end
  // --------------------------------------------------



  // carousel-three - start
  // --------------------------------------------------
  $("#carousel-three").owlCarousel({
    items: 1,
    margin:30,
    loop:true,
    nav: true,
    dots: true,
    autoplay:true,
    smartSpeed:1000
  });
  // carousel-three - end
  // --------------------------------------------------




  
  // rev slider - start
  // --------------------------------------------------
  $(document).ready(function () {
    var tpj=jQuery;
    tpj.noConflict();

    tpj(document).ready(function() {

      if (tpj.fn.cssOriginal!=undefined)
        tpj.fn.css = tpj.fn.cssOriginal;

      tpj('#slider-section').revolution(
      {
        delay:9000,
        startwidth:960,
        startheight:500,
        fullscreen:"on",

        touchenabled:"on",
        onHoverStop:"off",

        hideThumbs:200,

        thumbWidth:100,
        thumbHeight:50,
        thumbAmount:1,

        // navigationType:"thumb",
        // navigationArrows:"none",

        navigationType:"none",
        navigationArrows:"verticalcentered",
        navigationStyle:"round",

        navigationHAlign:"left",
        navigationVAlign:"bottom",
        navigationHOffset:30,
        navigationVOffset:30,

        soloArrowLeftHalign:"left",
        soloArrowLeftValign:"center",
        soloArrowLeftHOffset:20,
        soloArrowLeftVOffset:0,

        soloArrowRightHalign:"right",
        soloArrowRightValign:"center",
        soloArrowRightHOffset:20,
        soloArrowRightVOffset:0,

        touchenabled:"on",

        stopAtSlide:-1,
        stopAfterLoops:-1,

        // hideCaptionAtLimit:0,
        // hideAllCaptionAtLilmit:0,
        // hideSliderAtLimit:0,

        fullWidth:"on",
        fullScreen:"on",

        shadow:0

      });

    });
  });
  // rev slider - end
  // --------------------------------------------------





  // slider-section-nine - start
  // --------------------------------------------------
  $('.main-slider-nine').slick({
    loop: true,
    fade: true,
    speed: 1000,
    arrows: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    asNavFor: '.main-slider-nine-nav'
  });
  $('.main-slider-nine-nav').slick({
    loop: true,
    dots: false,
    arrows: false,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.main-slider-nine',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // slider-section-nine - end
  // --------------------------------------------------





  // main-slider-ten - start
  // --------------------------------------------------
  $('#main-slider-ten').slick({
    fade: true,
    dots: false,
    speed: 1000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    cssEase: 'linear',
    autoplaySpeed: 3000
  });
  // main-slider-ten - end
  // --------------------------------------------------




  
  // slider 11 - start
  // --------------------------------------------------
  $(".slider-items-container").slick({
    fade: true,
    speed: 500,
    arrows: false,
    autoplay:true,
    slidesToShow: 1,
    cssEase: "linear",
    slidesToScroll: 1,
    autoplaySpeed: 6000,
    asNavFor: ".slider-items-nav"
  });
  $(".slider-items-nav").slick({
    speed: 500,
    dots: false,
    arrows: true,
    slidesToShow: 1,
    centerMode: false,
    slidesToScroll: 1,
    autoplaySpeed: 6000,
    focusOnSelect: true,
    asNavFor: ".slider-items-container"
  });
  // slider 11 - end
  // --------------------------------------------------




  
  // partner-carousel - start
  // --------------------------------------------------
  $('#partner-carousel').owlCarousel({
    items:6,
    nav:false,
    loop:true,
    margin:30,
    dots:false,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      300:{
        items:2
      },
      600:{
        items:3
      },
      800:{
        items:4
      },
      1000:{
        items:6
      },
      1200:{
        items:6
      },
      1920:{
        items:6
      }
    }
  });
  // partner-carousel - end
  // --------------------------------------------------





  // related-posts-carousel - end
  // --------------------------------------------------
  $('#related-posts-carousel').owlCarousel({
    nav:false,
    loop:true,
    margin:30,
    center: true,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:4500,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1,
        dots: true
      },
      800:{
        items:1,
        dots: true
      },
      1000:{
        items:1,
        dots: true
      },
      1200:{
        items:2,
        dots: false
      },
      1920:{
        items:2,
        dots: false
      }
    }
  });
  // related-posts-carousel - end
  // --------------------------------------------------





  // shop details - end
  // --------------------------------------------------
  $('#big-image-carousel').slick({
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '#small-image-carousel'
  });
  $('#small-image-carousel').slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '#big-image-carousel'
  });
  // shop details - end
  // --------------------------------------------------





  // search box - start
  // --------------------------------------------------
  $('.toggle-overlay').on('click', function() {
    $('.search-body').toggleClass('search-open');
  });
  // search box - end
  // --------------------------------------------------




  
  // masonry grid layout - start
  // --------------------------------------------------
  var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry({
      percentPosition: true,
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer'
    }); 
  });
  // masonry grid layout - end
  // --------------------------------------------------




  
  // masonry filter gallery - start
  // --------------------------------------------------
  var $grid = $(".grid").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows"
  });
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this)
      .find(".number")
      .text();
      return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this)
      .find(".name")
      .text();
      return name.match(/ium$/);
    }
  };
  // bind filter button click
  $(".button-group").on("click", "button", function() {
    var filterValue = $(this).attr("data-filter");
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $(".button-group").each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function() {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");
    });
  });
  // masonry filter gallery - end
  // --------------------------------------------------





  // header-section (auto-hide) - Start
  // --------------------------------------------------
  var mainHeader = $('.auto-hide'),
  secondaryNavigation = $('.cd-secondary-nav'),
    //this applies only if secondary nav is below intro section
    belowNavHeroContent = $('.sub-nav-hero'),
    headerHeight = mainHeader.height();

    //set scrolling variables
    var scrolling = false,
    previousTop = 0,
    currentTop = 0,
    scrollDelta = 10,
    scrollOffset = 150;

    $(window).on('scroll', function(){
      if( !scrolling ) {
        scrolling = true;
        (!window.requestAnimationFrame)
        ? setTimeout(autoHideHeader, 250)
        : requestAnimationFrame(autoHideHeader);
      }
    });

    $(window).on('resize', function(){
      headerHeight = mainHeader.height();
    });

    function autoHideHeader() {
      var currentTop = $(window).scrollTop();

      ( belowNavHeroContent.length > 0 ) 
      ? checkStickyNavigation(currentTop) // secondary navigation below intro
      : checkSimpleNavigation(currentTop);

      previousTop = currentTop;
      scrolling = false;
    }

    function checkSimpleNavigation(currentTop) {
    //there's no secondary nav or secondary nav is below primary nav
    if (previousTop - currentTop > scrollDelta) {
        //if scrolling up...
        mainHeader.removeClass('is-hidden');
      } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
        //if scrolling down...
        mainHeader.addClass('is-hidden');
      }
    }

    function checkStickyNavigation(currentTop) {
    //secondary nav below intro section - sticky secondary nav
    var secondaryNavOffsetTop = belowNavHeroContent.offset().top - secondaryNavigation.height() - mainHeader.height();
    
    if (previousTop >= currentTop ) {
        //if scrolling up... 
        if( currentTop < secondaryNavOffsetTop ) {
          //secondary nav is not fixed
          mainHeader.removeClass('is-hidden');
          secondaryNavigation.removeClass('fixed slide-up');
          belowNavHeroContent.removeClass('secondary-nav-fixed');
        } else if( previousTop - currentTop > scrollDelta ) {
          //secondary nav is fixed
          mainHeader.removeClass('is-hidden');
          secondaryNavigation.removeClass('slide-up').addClass('fixed'); 
          belowNavHeroContent.addClass('secondary-nav-fixed');
        }
        
      } else {
        //if scrolling down...  
        if( currentTop > secondaryNavOffsetTop + scrollOffset ) {
          //hide primary nav
          mainHeader.addClass('is-hidden');
          secondaryNavigation.addClass('fixed slide-up');
          belowNavHeroContent.addClass('secondary-nav-fixed');
        } else if( currentTop > secondaryNavOffsetTop ) {
          //once the secondary nav is fixed, do not hide primary nav if you haven't scrolled more than scrollOffset 
          mainHeader.removeClass('is-hidden');
          secondaryNavigation.addClass('fixed').removeClass('slide-up');
          belowNavHeroContent.addClass('secondary-nav-fixed');
        }

      }
    };
  // header-section (auto-hide) - end
  // --------------------------------------------------





  // sticky menu - start
  // --------------------------------------------------
  var headerId = $(".sticky-header");
  $(window).on('scroll' , function() {
    var amountScrolled = $(window).scrollTop();
    if ($(this).scrollTop() > 250) {
      headerId.removeClass("not-stuck");
      headerId.addClass("stuck");
    } else {
      headerId.removeClass("stuck");
      headerId.addClass("not-stuck");
    }
  });
  // sticky menu - end
  // --------------------------------------------------





  // google map - start
  // --------------------------------------------------
  function isMobile() { 
    return ('ontouchstart' in document.documentElement);
  }

  function init_gmap() {
    if ( typeof google == 'undefined' ) return;
    var options = {
      center: [1.2960841, 103.8458455],
      zoom: 14,
      styles: [
      {elementType: 'geometry', stylers: [{color: '#eaeaea'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#ffffff'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '$pure-black'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#61605e'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#cbe99f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#98786d'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#ffffff'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#ffffff'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#39c2f8'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#fedd96'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#eeca83'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#965c28'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#fef5b6'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f1e0ca'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#a1cafe'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '$pure-black'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#ffffff'}]
      }
      ],
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      },
      navigationControl: true,
      scrollwheel: false,
      streetViewControl: true,
    }

    if (isMobile()) {
      options.draggable = false;
    }

    $('#google-map').gmap3({
      map: {
        options: options
      },
      marker: {
        latLng: [1.2960841, 103.8458455],
        // options: { icon: 'assets/img/map.png' }
      }
    });
  }
  init_gmap();
  // google map - end
  // --------------------------------------------------



  
})(jQuery);
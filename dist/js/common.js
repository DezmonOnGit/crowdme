$(document).ready(function(){

// ---SLIDER---

  $(".owl-carousel").owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: true,
  	nav: true,
  	autoplaySpeed: 3000,
  	navSpeed: 1000,
  	autoplayTimeout: 10000
  });

  // ---TABS---

  function commonSwitchTab (selector) {
    var getAttr = $(this).attr('data-tabControl');
    $(selector + ' [data-tabControl]').removeClass('tab-navigation_active')
    $(this).addClass('tab-navigation_active')
    $(selector).attr('data-tab', '')
    $(selector + '[data-tab]').attr('data-tab', getAttr)
    $(selector + ' [data-tabContent]').removeClass('tab-content_active');
    $(selector + ' [data-tabContent="'+ getAttr + '"]').addClass('tab-content_active')
  }
  function tabCall(selector) {
      $(selector + ' [data-tabControl]').on('click', function () {
          commonSwitchTab.call(this, selector);
      });
  }

  tabCall('.tab__js')

  $('.tab-navigation').viewportChecker({
    classToAdd: 'tab-navigation_visible', // Class to add to the elements when they are visible,
    repeat: false, // Add the possibility to remove the class if the elements are not visible
  });

  $('.content-our-work').viewportChecker({
    classToAdd: 'content-our-work_visible', // Class to add to the elements when they are visible,
    repeat: false, // Add the possibility to remove the class if the elements are not visible
  });

  $('.content-project__header').viewportChecker({
    classToAdd: 'content-project__header_visible', // Class to add to the elements when they are visible,
    repeat: false, // Add the possibility to remove the class if the elements are not visible
  });

  $('.content-project__item').viewportChecker({
    classToAdd: 'content-project__item_visible', // Class to add to the elements when they are visible,
    repeat: false, // Add the possibility to remove the class if the elements are not visible
  });

  $('.content-find-blue').viewportChecker({
    classToAdd: 'content-find-blue_visible', // Class to add to the elements when they are visible,
    repeat: false, // Add the possibility to remove the class if the elements are not visible
  });

  $('.content-find-yellow').viewportChecker({
    classToAdd: 'content-find-yellow_visible', // Class to add to the elements when they are visible,
    repeat: false, // Add the possibility to remove the class if the elements are not visible
  });
  $('.content-community__animation').viewportChecker({
    classToAdd: 'content-community__animation_visible', // Class to add to the elements when they are visible,
    repeat: false, // Add the possibility to remove the class if the elements are not visible
  });
  $('.community-header').viewportChecker({
    classToAdd: 'community-header_visible', // Class to add to the elements when they are visible,
    repeat: false, // Add the possibility to remove the class if the elements are not visible
  });
  $('.community-comments').viewportChecker({
    classToAdd: 'community-comments_visible', // Class to add to the elements when they are visible,
    repeat: false, // Add the possibility to remove the class if the elements are not visible
  });
  $('.partners__wrapper').viewportChecker({
    classToAdd: 'partners__wrapper_visible', // Class to add to the elements when they are visible,
    repeat: false, // Add the possibility to remove the class if the elements are not visible
  });

  $('.menu-burger').on('click', function() {
    $(this).toggleClass('menu-burger_active')
  });
});
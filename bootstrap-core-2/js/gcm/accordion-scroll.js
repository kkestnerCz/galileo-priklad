accordionScroll = {
  init: function () {
    jQuery('.accordion').on('shown.bs.collapse', function(event) {
      var staticOffset = skinStaticOffset || 0;
      var offsetElements = skinOffsetElements || [];
      offsetElements.forEach(function(elementId){
        staticOffset += jQuery('#' + elementId).height();
      })
      jQuery('html, body').animate({
          scrollTop: jQuery(event.target).parent().offset().top - staticOffset
          //scrollTop: 300
      }, 400);
    });
  }
}

accordionScroll = {
  init: function () {
    jQuery('.accordion').on('shown.bs.collapse', function(event) {
      var staticOffset = 0;
      var offsetElements = skinOffsetElements || [];
      console.log(offsetElements.length);
      offsetElements.forEach(function(elementId){
        staticOffset += jQuery('#' + elementId).height();
      })
      console.log(staticOffset);
      jQuery('html, body').animate({
          scrollTop: jQuery(event.target).parent().offset().top - staticOffset
          //scrollTop: 300
      }, 400);
    });
  }
}

function getCookie(sKey) {
	if (!sKey) { return null; }
	return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}

jQuery(document).ready(function() {
    var $first_submenus = jQuery('#menu').children('ul').children('.subitems');

    //Sustitute hover with click
    var touched = false;
    $first_submenus.on({
        touchstart: function (e) {
            touched = true;
        },
        click: function (e) {
            if (touched) {
                if (jQuery(this).data('touch')) {
                    return true;
                } else {
                    $first_submenus.data('touch', false);
                    e.preventDefault();
                    jQuery(this).data('touch', true);
                    jQuery(this).trigger('hover');
                }
            }
        }
    });
}
);

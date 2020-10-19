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

(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    var older = jimUtil.loadScrollBars;
    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
        	if (older != undefined)
        		older();
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:false, backgroundColor:'#a3a3a3', opacity:'0.75', thickness:'4', scrollSpacing:'0'});
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Panel_1 .layoutWrapper:first-child").overscroll({ showThumbs:false, direction:'vertical', roundCorners:false, backgroundColor:'#a3a3a3', opacity:'0.75', thickness:'4', scrollSpacing:'0'});
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Panel_2 .layoutWrapper:first-child").overscroll({ showThumbs:false, direction:'vertical', roundCorners:false, backgroundColor:'#a3a3a3', opacity:'0.75', thickness:'4', scrollSpacing:'0'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);
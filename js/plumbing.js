

//Reliable and Affordable Popup
  $( function() {
    $( "#reliable" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 10
      },
      hide: {
        effect: "clip",
        duration: 10
      }
    });
    var timer;
    $( "#open_reliable" ).on( "click", function() {
		timer = setTimeout(function () {
      $( ".scroll_images" ).slickGoTo( parseInt(slideIndex));
    }, 400);})
    $( "#open_reliable" ).on( "click", function() {
      $( "#reliable" ).dialog( "close" );
    });
  } );
  
//Core Drilling Popup
  $( function() {
    $( "#coredrill" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 10
      },
      hide: {
        effect: "clip",
        duration: 10
      }
    });
    var timer;
    $( "#open_coredrill" ).on( "mouseenter", function() {
		timer = setTimeout(function () {
      $( "#coredrill" ).dialog( "open" );
    }, 400);})
    $( "#open_coredrill" ).on( "mouseleave", function() {
      $( "#coredrill" ).dialog( "close" );
    });
  } );
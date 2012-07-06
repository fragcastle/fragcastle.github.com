var fragcastle = {
  positionThings: function() {
    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();

    $('.sky').css({ height: viewportHeight, width: viewportWidth});
    $('.grass').css({ top: "315px", left: 0, height: viewportHeight - 300, width: viewportWidth});
    $('.mountains').css({ top: "274px", left: 0, width: viewportWidth });
    $('.grass-fg').css({ top: "50px", left: 0, width: viewportWidth })
    $('.entity').each(function() {
      var $this = $(this),
          data = $this.data(),
          position = { top: data.y, left: data.x, "z-index": data.layer };

      if( typeof(data.x) === "string" ) {
        var offset = parseInt( data.x.replace('%', ''), 10 ) / 100;
        position.left = (viewportWidth * offset) - ($this.width() / 2);
      }

      if(!$this.is(':animated')) {
        // only move things that are not being animated...
        $(this).css(position);
      }
    });
  },
  animateCloud: function(elem, startPos) {
    var $cloud = $(elem),
        data = $cloud.data();
    if(startPos) {
      $cloud.css(startPos);
    }

    // every "step" is 1pps (pixels per second)
    var pps = data.layer;

    console.log( "level: " + data.layer + ", pixels per second: " + pps );

    // calculate the disance (in pixels)
    // between where this cloud is and where
    // we want it to animate to
    var current_x = $cloud.offset().left;
    var distance = $(window).width(); // send each cloud the same distance

    var duration = distance/pps * 1000;

    console.log("it will take [" + $cloud.attr("class") + "] " + duration + "ms to reach its endpoint");

    $cloud.animate({ left: "-=" + distance + "px" }, duration, 'linear',
      function complete() {
        var viewportWidth = $(window).width();
        animateCloud($cloud, { left: viewportWidth + 100, top: $cloud.offset().top });
      });
  }
};

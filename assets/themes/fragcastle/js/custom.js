(function($) {
  $(function(){
    var url = window.location.href.replace(/^http.?:\/\//, '').split('/')[1] || '';
    var $nav = $( '.navigation ul li' );

    if( !url || url === 'index.html' ) {
      $nav.eq(0).addClass('active');
    } else if( url === 'games.html' ) {
      $nav.eq(2).addClass('active');
    } else {
      $nav.eq(1).addClass('active');
    }
  });
})(jQuery);

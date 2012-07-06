---
layout: default
title: Frag Castle Games!
---

<link rel="stylesheet" href="/assets/themes/fragcastle/css/home.css" />

<div class="sky" data-layer="0" data-x="0" data-y="0">
<div class="entity cloud4" data-layer="1" data-x="85%" data-y="140"></div>
<div class="entity cloud3" data-layer="3" data-x="95%" data-y="160"></div>
<div class="entity cloud1" data-layer="5" data-x="25%" data-y="80"></div>
<div class="entity cloud5" data-layer="8" data-x="30%" data-y="50"></div>
<div class="entity cloud6" data-layer="2" data-x="65%" data-y="90"></div>
<div class="entity cloud2" data-layer="10" data-x="70%" data-y="100"></div>

<div class="entity sun" data-layer="1" data-x="24%" data-y="50"></div>
<div class="mountains" data-layer="9"></div>
<div class="grass">
  <div class="entity logo" data-layer="13" data-x="50%" data-y="-190"></div>
  <div class="grass-fg" data-layer="20"></div>
</div>
</div>
<div class="entity menu" data-layer="30" data-x="50%" data-y="400">
  <div class="left"></div>
  <ul class="items">
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/about/">About Us</a>
    </li>
    <li>
      <a href="/games/index.html">Games</a>
    </li>
    <li>
      <a href="/contact/">Contact Us</a>
    </li>
    <li><a href="#"></a></li>
  </ul>
  <div class="right"></div>
</div>


<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="/assets/themes/fragcastle/js/main.js"></script>
<script type="text/javascript">
  (function($) {
    $(function() {
      fragcastle.positionThings();
      $(window).resize(fragcastle.positionThings);
      $('.entity[class*="cloud"]').each(function(){
        fragcastle.animateCloud(this);
      });
    });
  })(jQuery);
</script>
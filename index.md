---
layout: home
title: Welcome
tagline: Supporting tagline
---
{% include JB/setup %}

<!--start: Wrapper-->
<div id="wrapper">
    <!--start: Container -->
    <div class="container">
        <!-- start: Slider -->
        <div class="slider-wrapper">
            <a href="http://fragcastle.com/rock-kickass" onclick="_gaq.push(['_trackEvent', 'Hero Actions', 'Play', 'Play Rock Kickass']);">
                <img src="/assets/site/img/slide1.png" />
            </a>
        </div>
        <!-- end: Slider -->
        <div class="hero-social">
          <div class="container">
            <ul class="social-buttons">
              <li class="follow-btn">
                <iframe allowtransparency="true" frameborder="0" scrolling="no" src="http://platform.twitter.com/widgets/follow_button.1354761327.html#_=1355114446272&amp;id=twitter-widget-1&amp;lang=en&amp;screen_name=fragcastle&amp;show_count=true&amp;show_screen_name=true&amp;size=m" class="twitter-follow-button" style="width: 242px; height: 20px;" title="Twitter Follow Button" data-twttr-rendered="true"><!-- --></iframe>
              </li>
              <li class="tweet-btn">
                <iframe allowtransparency="true" frameborder="0" scrolling="no" src="http://platform.twitter.com/widgets/tweet_button.1354761327.html#_=1355114446269&amp;count=horizontal&amp;id=twitter-widget-0&amp;lang=en&amp;original_referer=http%3A%2F%2Ffragcastle.com%2F&amp;related=mdo%3ACreator%20of%20Rock%20Kickass&amp;size=m&amp;text=Frag Castle Games&amp;url=http%3A%2F%2fragcastle.com%2F&amp;via=fragcastle" class="twitter-share-button twitter-count-horizontal" style="width: 110px; height: 20px;" title="Twitter Tweet Button" data-twttr-rendered="true"><!-- --></iframe>
              </li>
            </ul>
          </div>
        </div>
        <!-- start: Row -->
        <div class="row">
            <div class="span8">
                <h3>About Us</h3>
                <p>
                    Frag Castle Games got its start in July of 2012. It's an incredibly small (2 guys, loud music and a lot of computers) game developer startup based around Boston, MA.
                </p>
                <p>
                    We're working hard on launching our first two games, Rock Kickass, and Final Frontier: First Contact. Rock Kickass is entered in the <a href="https://github.com/blog/1303-github-game-off">Github Game-off</a> and you can play it <a href="http://fragcastle.com/rock-kickass" onclick="_gaq.push(['_trackEvent', 'Home Actions', 'Play', 'Play Rock Kickass']);">here</a>.
                </p>
            </div>
            <div class="span4">
                <h3>Our Latest Blog Posts</h3>
                <div>
                    {% for post in site.posts limit:3 %}
                        <h4><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h4>
                        <p>{{post.content | strip_html | truncatewords 20}}</p>
                    {% endfor %}
                </div>
            </div>
        </div>
        <!-- end: Row -->
        <hr class="clean" />
    </div>
    <!--end: Container-->
</div>
<!-- end: Wrapper  -->

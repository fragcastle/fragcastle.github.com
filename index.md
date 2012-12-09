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
            <a href="http://fragcastle.com/rock-kickass">
                <img src="/assets/site/img/slide1.png" />
            </a>
        </div>
        <!-- end: Slider -->

        <hr class="clean">

        <!-- start: Row -->
        <div class="row">

            <div class="span8">
                <h3>About Us</h3>
                <p>
                    Frag Castle Games got its start in July of 2012. It's an incredibly small (2 guys, loud music and a lot of computers) game developer startup based around Boston, MA.
                </p>
                <p>
                    We're working hard on launching our first two games, Rock Kickass, and Final Frontier: First Contact. Rock Kickass is entered in the <a href="https://github.com/blog/1303-github-game-off">Github Game-off</a> and you can play it <a href="http://fragcastle.com/rock-kickass">here</a>.
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

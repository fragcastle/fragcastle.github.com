---
layout: home
title: Welcome
tagline: Supporting tagline
---
{% include JB/setup %}
<h3>Our Latest Blog Posts</h3>
<div>
    {% for post in site.posts limit:3 %}
        <h4><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h4>
        <p>{{post.content | strip_html | truncatewords 20}}</p>
    {% endfor %}
</div>

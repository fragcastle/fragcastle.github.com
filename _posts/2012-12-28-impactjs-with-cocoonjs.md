---
layout: post
category : tech
tags : [impactjs, cocoonjs, rock-kickass]
author: john
published: false
---

If you haven't heard, [we completed v1 of our first game](http://fragcastle.com/games/2012/12/18/rock-kickass-post-mortem/), [Rock Kickass](fragcastle.com/rockkickass).  So far it's only been deployed to our website and is still under active development.  While we're still ironing out the game mechanics and story, we're also venturing into uncharted territory for us: App Stores!  While we don't have anything ready yet, we've started some preliminary work to get a feel for the options that we have.

## What can we do?

Since Rock Kickass is a JavaScript / Canvas based game, we can't deploy it straight to Apple's App Store, Google Play, or possibly other stores.  We'll need to use a wrapper that ideally will give us access to the native features and performance as well as nice-to-have features like monetization and other integrations.

Some of the tools we've found are:

- [CocoonJS](http://www.ludei.com/tech/cocoonjs)
- [AppMobi](http://www.appmobi.com/)
- [Ejecta](http://impactjs.com/ejecta)
- WebView/browser controls for each platform

## Our first attempt

![ImpactJS](/assets/site/img/posts/impactjs-with-cocoonjs/impact.png)

![CocoonJS](/assets/site/img/posts/impactjs-with-cocoonjs/cocoonjs.png)

To start with, we've picked CocoonJS.  I'd heard the [Lost Decade Games](http://www.lostdecadegames.com/) guys talk about it before so it seemed as good a place to start as any.  (FYI, we are not affiliated with CocoonJS)

According to Ludei:

> CocoonJS is a platform that allows developers to deploy, accelerate, and monetize their JavaScript HTML5 games on the App store and Google Play.

The way it works is that you zip up your JS app and CocoonJS will act as a translation layer that converts canvas operations to native GPU calls on the respective platforms.  There are two main servics that they offer; their [Launcher](http://wiki.ludei.com/cocoonjs:launcherapp) mobile apps and their [Cloud Compiler](http://wiki.ludei.com/cocoonjs:cloud).  The Launcher apps run on your android or iOS devices, will download your app via FTP and compile it on-the-fly.  The Cloud Compiler is the real deal that does the same thing as the launcher, but the result is an APK for Android and an XCode project for iOS.

## The bad

Trying to get up and running with CocoonJS, I struggled a bit to find the links to their actual Cloud Compiler service [located here](https://cocoonjsservice.ludei.com/cloud/login/) (I would bookmark that!).  Also, their documentation has the basics about how to use the service, but doesn't appear to list detailed information about supported features and current issues with the platform.  However, I was able to find some blog posts that talked about various features.

Ludei also claims that you can run your app with no changes.  This is *almost* true.  I had to tweak the way the canvas object gets initialized in order for RK to run.  Also, I had a major issue that broke the ImpactJS font system.  For some reason the ImpactJS font system garbles the text when it runs inside CocoonJS.  I tried investigating the issue a little but I was unable to find the root cause.  However, I was able to work around the issue using the [ImpactJS native font plugin](https://github.com/quidmonkey/Canvas-Native-Fonts-Plugin) by [quidmonkey](https://github.com/quidmonkey).

The last knock against the service is that they are currently free, but their pricing structure has yet to be announced.  Supposedly that will change in 2013.

## The good

Despite the confusing website and sparse documentation, I was able to get a complete version of our game working with both their Launcher and Cloud Compiler!  While we haven't released the game yet, take my word that the technology is very impressive and the game performs well on an iPhone 5 and Nexus 7.  It is a wonderful feeling to see your app installed on your tablet, and be able to demo your game to your friends and family anytime, anywhere!

## Can I try too?

[If John can do, so can you](http://en.wikipedia.org/wiki/Yan_Can_Cook)!  Lucky for your we've created [an open source boilerplate project on GitHub](https://github.com/fragcastle/ImpactJS-CocoonJS-Example) for using ImpactJS with CocoonJS.  Currently it contains a sample that demonstrates initialization, sound, touch input, and the font workaround.  Please feel free to send us a pull request if you're able to add more to the example or fix the font issue!

## Time will tell

So the real question is whether or not CocoonJS is a viable solution for deploying our/your apps.  Unfortunately, the verdict is still out on that one until we know more about pricing.  Also, we haven't actually deployed anything yet, so that is the real test!  We'll be sure to be you posted on any progress we make.  Our goal is to ship in the next month or two, but make sure to [follow us for periodic updates](https://twitter.com/fragcastle)!
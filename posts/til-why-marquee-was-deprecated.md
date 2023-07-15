---
title: TIL Why Marquee Was Deprecated
description: Learning about the much-hated marquee tag and why it's a crime to use it.
date: "November 8, 2022"
---

My older sibling and I are both web developers, so we often swap developer horror stories over coffee. This morning, they mentioned that their boss had told the dev team he wanted a kind of "slideshow banner" at the top of their company's new website. My sibling and the senior dev apparently just looked at each other and laughed, and had to explain to their boss that what he wanted is basically illegal by web development standards.

Yes, what their boss had asked for was, essentially, a `<marquee>` tag. As someone who is pretty young and just over a year into my career as a developer, I've heard the jokes about the infamous marquee, but I never actually bothered to learn why using it is frowned upon. I've also recently decided to start learning more about [semantic HTML](https://www.w3schools.com/html/html5_semantic_elements.asp), especially around bad practices to avoid. So, post-coffee conversation, I decided to do some reading.

## What is a marquee?

If you don't write code for a living, the word "marquee" probably conjures up a mental image of a colourful canopy, perhaps in front of a building's entrance or protecting a stallholder and their goods at your local craft fair. I'm an internet nerd, so I don't care about these marquees (and chances are if you're reading this, you're an internet nerd too).

For the more technologically inclined, a marquee is a deprecated element tag that displays a scrolling area of text. Using various attributes, a developer can control what happens when the text reaches the edge of the content area. [Kaspar Due's Medium article](https://kasp9023.medium.com/what-happened-to-the-marquee-html-element-6ec6782f42ce) has a few examples of marquees implemented in various ways, including the entertaining-but-horrible example of what it looks like when you nest a marquee inside another marquee.

If you used the internet in the late 90s/early 2000s, you probably associate marquees with annoying, usually highly suspicious web advertisements telling you that you've won a prize for being the 10,000th visitor to a web page. They're flashy, they're obnoxious, and they're generally pretty unsightly. Of course, the same could be said about NFTs, but they're still tolerated in (some) online spaces. So, why is the marquee the black sheep of HTML tags?

## HTML is for layouts

It's in the name - HTML tags are concerned with markup. They exist to provide structure to your document, like a skeleton. Marquees, on the other hand, don't serve any structural purpose - they're purely about how content is presented visually. Saying a marquee is a HTML element is kind of like declaring that your new fancy hairdo is part of your skeleton.

## The king of terrible UX

Not only does any animation that can't be disabled by the user break the [Web Content Accessibility Guidelines](https://www.webmasterworld.com/r-v6.cgi?f=21&d=5186&url=http://www.w3.org/TR/WAI-WEBCONTENT/#gl-movement), marquees also generally provide a terrible experience for the end user.

In a [post on StackExchange](https://ux.stackexchange.com/a/8314), Vitaly Mijiritsky explains the pitfalls of the marquee tag perfectly:

> On the occasions when they are noticed, it's usually because some specific text caught the eye of the user. Then the text scrolls out of view before the user had a chance to finish reading, and the user needs to sit and wait an unknown amount of time for it to come back.

TL;DR - if you care about your users, don't use a marquee.

## There are better options out there

Both CSS and JavaScript allow us to replicate the functionality of a marquee without destroying the user experience or breaking any accessibility guidelines. Hafsah Emekoma's [post on blogrocket](https://blog.logrocket.com/deprecated-html-elements-and-what-to-use-instead/) has a fantastic example of how you can build a fully accessible marquee-like experience that doesn't expect the user to have lightning fast reflexes to interact with the page content.

If you'd rather use JavaScript, there are a [whole bunch of plugins and libraries](https://www.jqueryscript.net/blog/best-marquee-content-scrolling.html) that you can use instead!

## TL;DR

Don't use the marquee tag. You're better than that.

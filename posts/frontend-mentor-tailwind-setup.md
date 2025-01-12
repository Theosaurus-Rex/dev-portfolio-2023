---
title: How I set up my Frontend Mentor projects with Tailwind CSS
description: A quick setup guide for adding Tailwind to the default Frontend Mentor starter code downloads.
date: "2025/01/12"
imageUrl: "https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Flogo-desktop.svg&w=640&q=75"
---

Recently at work there has been a shift in our workload that means I'm not in my usual happy place as a developer - that is to say, there are no front end features to be built. To remedy this, I've hopped back into the projects provided on [Frontend Mentor](https://www.frontendmentor.io/), a platform that provides beautiful UI mockups that developers can turn into real projects. I started on their platform about a year ago, and I've been super impressed, not only by the quality of the projects, but also by the focus on community building and particularly on educating developers on accessibility best practices. It's a fantastic resource that I highly recommend for any developer looking to hone their frontend skills on realistic projects - there are varying degrees of difficulty, starting from very simple blog card components that only require HTML and CSS to build, so there's something for every skill level!

One of the great things about the platform is they simply provide a design and some very very basic starter code in the form of an `index.html` with the required copy for the given design, so you're free to choose whatever combination of technologies you'd like to complete the project with. For me personally, I'm on a bit of a journey of minimising framework usage[^1] and focusing on writing semantic HTML, with plain JS sprinkled in for interactivity, so that's primarily what my solutions will look like moving forward.

Having said that, I do still far and away prefer Tailwind as my styling solution for side projects. I've been using it professionally for around three years now, and I find it strikes a nice balance between useful default utility classes and a pleasant DX when it comes to expanding its base capabilties. I'm not suggesting that beginners should build with Tailwind straight away - definitely go learn CSS first! But as someone who is very comfortable with how CSS itself works, Tailwind is a productivity boon for me, personally, as I understand what its utility classes are doing under the hood.

Therefore, as I've worked through several of Frontend Mentor's challenges, I've had to add Tailwind to the provided project starter code quite a few times now. I figured it may be helpful to other developers who are newer to the platform, but who would also like to utilise Tailwind in their own projects, to document my workflow for installing and configuring Tailwind on a typical starter project[^2].

## Footnotes

[^1]: If this is something you're interested in, I highly recommend checking out the [Lean Web Club by Chris Ferdinandi](https://members.gomakethings.com/)
[^2]: As is the way with many things in dependency management, there's about a million different ways to do this. This is simply my preferred method, so your mileage may vary.

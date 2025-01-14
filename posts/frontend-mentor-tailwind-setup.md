---
title: How I set up my Frontend Mentor projects with Tailwind CSS
description: A quick setup guide for adding Tailwind to the starter code for projects on Frontend Mentor.
date: "2025/01/12"
imageUrl: "https://images.unsplash.com/photo-1634055598720-9ff0db7352d7?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
---

Recently at work there has been a shift in our workload that means I'm not in my usual happy place as a developer - that is to say, there are no front end features to be built. To remedy this, I've hopped back into the projects provided on [Frontend Mentor](https://www.frontendmentor.io/), a platform that provides beautiful UI mockups that developers can turn into real projects. I started on their platform about a year ago, and I've been super impressed, not only by the quality of the projects, but also by the focus on community building and particularly on educating developers on accessibility best practices. It's a fantastic resource that I highly recommend for any developer looking to hone their frontend skills on realistic projects - there are varying degrees of difficulty, starting from very simple projects that only require HTML and CSS to build, so there's something for every skill level!

One of the great things about the platform is they simply provide a design along with some basic starter code, so you're free to choose whatever combination of technologies you'd like to complete the project with. For me personally, I'm on a bit of a journey of minimising framework usage[^1] and focusing on writing semantic HTML, with plain JS sprinkled in for interactivity, so that's primarily what my solutions will look like moving forward.

Having said that, I do still far and away prefer [Tailwind](https://tailwindcss.com/) as my styling solution for side projects. I've been using it professionally for around three years now, and I find it strikes a nice balance between useful default utility classes and a pleasant developer experience when it comes to expanding its base capabilties (which we cover in detail below). I'm not suggesting that beginners should build with Tailwind straight away - definitely go learn CSS first! But as someone who is very comfortable with how CSS itself works, Tailwind is a productivity boon for me, personally, as I understand what its utility classes are doing under the hood.

Therefore, as I've worked through several of Frontend Mentor's challenges, I've had to add Tailwind to the provided project starter code quite a few times now. I figured it may be helpful to other developers who are newer to the platform, but who would also like to utilise Tailwind in their own projects, to document my workflow for installing and configuring Tailwind on a typical starter project. As is the way with many things in dependency management, there's about a million different ways to do this. This is simply my preferred method, so your mileage may vary.

## Installing Tailwind

### Package Installation

First, you'll want to navigate to the root directory of the starter code you've downloaded from Frontend Mentor, and run the following command to install Tailwind and its dependencies:

`npm install -D tailwindcss postcss autoprefixer`

Some notes on dependencies:

- Tailwind CSS uses PostCSS to process your CSS. PostCSS is a tool for transforming CSS with JavaScript plugins, and Tailwind CSS itself is a PostCSS plugin[^2].
- Autoprefixer is a PostCSS plugin that adds vendor prefixes to your CSS rules using values from [Can I Use](https://caniuse.com/). It ensures that your CSS works across different browsers.

These technically aren't required to install Tailwind in your project, but I've generally found things run smoother when using them.

### Initialise TailwindCSS

Next, we want to generate the `tailwind.config.js` and `postcss.config.js` files using the following command:

`npx tailwindcss init -p`

### Configure Source Paths

Next, navigate to `tailwind.config.js` and add `index.html` to the `content` array - this will ensure that unneccessary styles get purged. You can read a bit more about how this works in practice in [Tailwind's Content Config docs](https://tailwindcss.com/docs/content-configuration).

Note that if you create multiple HTML files for your project that are going to be styled with Tailwind utility classes, you'll have to add their paths to this array as well.

```javascript
module.exports = {
  content: ["index.html"],
  theme: {},
  plugins: [],
};
```

### Include Tailwind in your CSS

Create a CSS file (I typically just name mine `styles.css`) in your project root and add the following to it:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Adding and Running a Build Script

In your `package.json` file, add a script to build your CSS. This will create an `output.css` files with the styles that are built. The `--watch` flag lets us observe CSS changes in realtime, meaning we don't have to restart our script every time we update our styles.

Note that you can name this command whatever you'd like - I'm just following convention here.

```javascript
"scripts": {
  "build:css": "tailwindcss build styles.css -o output.css --watch"
}
```

Now you can compile your CSS by running the script like so:

`npm run build:css`

### Linking the Stylesheet

Finally, you'll want to include a `link` tag inside the `head` of your `index.html` file (and any other HTML files you want your styles to apply to):

```html
<link href="output.css" rel="stylesheet" />
```

You should now be able to test that Tailwind is working in this file. I typically add something like `class="text-red-600"` to the `body` tag inside `index.html` and confirm that the text does indeed turn red.

## Installing Project Fonts

When you download the starter code for a project from Frontend Mentor, they include font files for the fonts used in the design you'll be building. This usually includes a combination of both variable and static font files. For our purposes, we'll be using the files provided in `./assets/fonts/static`.

I'd recommend taking a look at these files as well as the `style-guide.md` file provided in the project root to get an idea of which fonts are used, and which font weights are required.

### Adding `@font-face` Rules

Once you've gotten your bearings, you'll want to create another new CSS file in the root of the project (I typically call this file `fonts.css`), and then define `@font-face` rules for each of the font files provided in the starter code:

```css
@font-face {
  font-family: "Inter";
  font-weight: 400;
  src: url("assets/fonts/static/Inter-Regular.ttf") format("ttf");
}

@font-face {
  font-family: "Inter";
  font-weight: 600;
  src: url("assets/fonts/static/Inter-SemiBold.ttf") format("ttf");
}

@font-face {
  font-family: "Inter";
  font-weight: 700;
  src: url("assets/fonts/static/Inter-Bold.ttf") format("ttf");
}
```

The example above is from my solution to the [Social Links Profile Challenge](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ), which uses the Inter font in 3 different weights.

Once you've defined your font faces, you'll want to link the stylesheet in your HTML document as we did with `output.css` earlier:

```html
<link href="fonts.css" rel="stylesheet" />
```

### Extending Tailwind Config

Now, we need to extend our `theme` inside `tailwind.config.js` to add some utility classes to apply our project fonts where we need them:

```javascript
module.exports = {
  purge: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

Note that if your project has multiple custom fonts, you can define as many properties as you need inside the `fontFamily` object. You can name these properties whatever you like, but I typically just kebab-case the name of the font to align with how most Tailwind utilities are written out of the box, e.g. `comic-sans`.

Now, you should be able to add the `font-inter` class to your HTML and see your new font applied to your markup! You can also use the different font weights that we've set up, e.g. `font-semibold` to apply the font at a 600 weight.

```html
<p class="font-inter font-semibold">Hello World</p>
```

## Setting Up Project Colour Palette

Earlier, when you were taking a look at the `style-guide.md` file provided with the starter code, you may have noticed that the challenge creators have helpfully noted all of the different colours used to create the final design. Neat!

We can now use this information to set up some more `theme` extensions, this time to the `color` property, in our `tailwind.config.js` file. This will allow us to set up utility classes for the colours we'll need to build our project.

If we take a look at the colours provided in the starter code for the [Recipe Page Challenge](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm), we'll see the following:

```markdown
## Colors

- White: hsl(0, 0%, 100%)

- Stone 100: hsl(30, 54%, 90%)
- Stone 150: hsl(30, 18%, 87%)
- Stone 600: hsl(30, 10%, 34%)
- Stone 900: hsl(24, 5%, 18%)

- Brown 800: hsl(14, 45%, 36%)

- Rose 800: hsl(332, 51%, 32%)
- Rose 50: hsl(330, 100%, 98%)
```

This is awesome - the colours are already named for us (naming is hard), and they've been given number values indicating how light or dark they are, just like the base colours that Tailwind provides us with!

We can now add these colours to our `tailwind.config.js` file like so:

```javascript
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        stone: {
          100: "hsl(30, 54%, 90%)",
          150: "hsl(30, 18%, 87%)",
          600: "hsl(30, 10%, 34%)",
          900: "hsl(24, 5%, 18%)",
        },
        brown: {
          800: "hsl(14, 45%, 36%)",
        },
        rose: {
          50: "hsl(330, 100%, 98%)",
          800: "hsl(332, 51%, 32%)",
        },
      },
    },
  },
  plugins: [],
};
```

Now we can use these custom colours just as we would with the base colours provided by Tailwind!

```html
<button class="bg-rose-800 text-stone-100">Click me!</button>
```

If you'd like to learn more about how you can customise colours in your Tailwind config, I'd recommend checking out Tailwind's [docs on Customizing Colors](https://tailwindcss.com/docs/customizing-colors#customizing).

## Final Thoughts

That's about all you'll need to get up and running and ready to start coding your Frontend Mentor solution with Tailwind!

While initially I kind of felt like installing several packages in a small challenge project was overkill, in my case, I find the tradeoff worth it when considering the productivity benefits I get from using Tailwind. Ultimately, the purpose of these challenges is for learning, so using a framework I know well for styling is allowing me to focus on other areas, such as HTML semantics and trying out the occasional front end framework. I know this won't be the case for everyone, and that's okay! I'd encourage you to find a workflow that best addresses your needs and learning goals.

If you ever want to get some feedback on a challenge solution, feel free to [hit me up on FEM!](https://www.frontendmentor.io/profile/Theosaurus-Rex)

## Footnotes

[^1]: If this is something you're interested in, I highly recommend checking out the [Lean Web Club by Chris Ferdinandi](https://members.gomakethings.com/)
[^2]: Zev Averbach [writes about Tailwind and PostCSS](https://dev.to/zev/how-do-postcss-tailwind-work-part-1-shrinking-the-build-4a0d) in more detail

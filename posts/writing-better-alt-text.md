---
title: "Writing Better Alt Text: A Guide for the Web"
description: Why text alternatives are important and how you can use them to make the web a better place.
date: "2024/07/11"
imageUrl: "https://images.unsplash.com/photo-1574887427561-d3d5d58c9273?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
---

If you’ve been writing HTML for any amount of time, it’s more than likely you’ve come across the `<img>` tag, and its related attribute `alt` . Many sources of documentation simply outline the `alt` attribute as “text that is displayed if the image cannot be loaded”. You may have experienced this first-hand when browsing the web and coming across a broken image, where, instead of the expected asset, you’re greeted with a [small icon of a torn page and a description](https://codepen.io/makaroni4/pen/WLzgpN) of what the image should look like.

While this use case is a valid example of what alt text can provide for us, there’s so much more to how it works. Having an image description also helps users with visual impairments, some of who may use assistive technologies such as screen readers to have website content described for them verbally. Image alt text is also used by search engines to improve your website’s SEO. By giving them better alt text to work with, search engines are able to ascertain more information about your page and rank it higher in search results. Coming back to the broken image example, in cases where you want to hyperlink your image, alt text will be used as the anchor text in cases where a linked image fails to load.

Given these use cases, it’s clear that good alt text on images is beneficial, which is why the `alt` attribute is always required on an `<img>` tag. However, bad alt text can be sometimes be just as bad as no alt text at all, so learning to write image descriptions that benefit everyone is a key skill for anyone writing HTML or managing webpage content. With that said, here are some guidelines for ensuring you’re providing quality image descriptions.

## Describe the image accurately

The key purpose of alt text is to accurately describe an image in cases where it may not be visible. Therefore, you should try to be as accurate as possible with your text description. For example, take the following image:

![A photo of a cat in a yellow bandana meowing at the camera.](https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

_Image Credit: [Jae Park on Unsplash](https://unsplash.com/photos/brown-tabby-cat-7GX5aICb5i4)_

A lot of the time, I’ll see developers add alt text such as `alt="A cute cat"` . While technically true (this cat _is_ very cute), we can be a little more descriptive and give our user more to work with. For example, we could say `alt="A cat sitting on a wooden floor, wearing a yellow bandana and meowing at the camera"` .

A good way to think about how to describe your images is to imagine that you were describing your image to someone over the phone, and write your text based on that description.

## Be succinct

Ideally, we want to balance giving the user something descriptive that isn't the length of Pride and Prejudice. This is not only to save our user from reading or listening to an entire paragraph, but also due to the way that assistive technology functions. Some screen readers may stop reading alt text at around the 125 character mark, so keeping things short and to the point, while providing an adequate amount of detail, is key.

## Don’t stuff it full of keywords!

When it comes to thinking about alt text as a tool for better SEO rankings, it can be tempting to use the alt attribute like the tags section on an instagram post. Keywords are useful, but should not be the priority - always focus on accurately describing the image first and foremost.

Take the following image for example:

![A stack of pancakes with syrup, blueberries and bananas.](https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

_Image Credit: [nickldn on Unsplash](https://unsplash.com/photos/baked-pancake-with-blueberry-and-slice-of-banan-qp7WA8AV2x0)_

Keyword-stuffing may look something like:

`alt="pancakes blueberry banana recipe breakfast cooking healthy food yummy"`

Don’t do this! There are keywords that make sense here, such as “pancakes”, “blueberries”, and “bananas”, but we can work those into an accurate description:

`alt="A stack of pancakes with syrup, blueberries and bananas"`

This not only includes those key phrases, but is much for readable for our end users.

## Don’t include the word “picture”

Frequently on the web, I’ll see alt text starting with “A picture of” or “An image of”. Given that the alt attribute is always used in an image tag, this is unnecessary, and doesn’t provide any additional useful information to either our users or search engines (which can identify that it is an image based on the semantic tag).

Having said that, it can be useful to describe the _type_ of image that is being displayed. For example, you might have `alt="A headshot of a person with glasses and short black hair"` or `alt="A hand-drawn illustration of a bowl of fruit"` . This comes back to our initial rule of describing an image as accurately as possible.

## Convey nuance where relevant

If you’ve read this far, you might be under the impression that alt text needs to be dry and objective, however, this is not always the case. The same image may be described differently depending on the surrounding page context. Take the following image, for example:

![An oil painting of King Henry VII.](https://www.rmg.co.uk/sites/default/files/styles/large_no_alt/public/2022-10/Henry%20VIII%2C%201491-1547%20by%20Hans%20Holbein%2C%20BHC2763.jpg?itok=9iFIFNQi)

_Image Credit: [Royal Museums Greenwich](https://www.rmg.co.uk/stories/topics/royal-portraits-royal-museums-greenwichs-collection)_

If this image was being used in an article about the history of the Royal Family, the alt text may simply read as `alt="An oil painting of King Henry VII"` . However, if it was to be included in an article about the history of royal fashion, the appearance of Henry’s clothes becomes much more important to the reader. In this case, we may include more information about his outfit, for example, `alt="An oil painting of King Henry VII, depicted wearing an embroidered gold doublet, black bejewelled hat and fur-trimmed coat".` Think about the relevant information at the image is conveying in context of the rest of the content on the page, and try to communicate that visual information to the reader when writing alt text.

## Special use cases

While the above rules apply to the majority of use cases, there are some cases where we need to be a little more thoughtful about the purpose of our images and how we can best communicate their purpose through alt text. The following are some specific use cases where we may see exceptions to the standard rules defined above.

### QR Codes

A QR code, or Quick Response code, is a type of barcode that can be scanned by a camera (usually on a mobile device) to quickly access a web link or other digital content. There are a few best practices to follow when providing a QR code on the web:

- Have more than one way to access the content - an easy way to do this is to add an anchor tag above or below the QR code that links to the same content.
- In terms of alt text, make sure that the description informs the user that the image is a QR code, and provide the target of the link, e.g. `alt="QR Code: Writing Alt Text for Images article"`
- If you have multiple QR codes on a page, ensure that the alt text is unique for each individual image, and explicitly references the content it is targeting

### Charts and Graphs

When providing images of a chart or graph in a webpage, alt text must include the data points represented by the image. When the image is sufficiently complicated or includes a lot of data points, best practice is to include an [accessible data table](https://help.illinoisstate.edu/accessibility/website-and-digital/accessible-content-overview/page-structure/tables) with the same data shown in the image. In cases where the data is provided externally like this, alt text should mention that this data is available in the accompanying table.

### Images with Text

Where possible, it is recommended to avoid images with text inside them unless it is absolutely necessary, for example, when using a logo or word mark. In these cases, the alt text for the image should match the text in the image, as the text is the important information. In the case of logos, it is also common to explicitly identify the image as a logo. For example, we could take the following logo:

![UNSW Sydney Logo](https://www.inside.unsw.edu.au/sites/default/files/inline-images/crest.jpg)

_Image Credit: [UNSW Sydney](https://www.unsw.edu.au/)_

The alt text for this would look something like `alt="UNSW Sydney Logo"` . Given that UNSW is an acronym, we could also spell out the name in full for additional context, e.g. `alt="University of New South Wales Sydney Logo"`

Remember that outside of logos and word marks, text should always be provided in the markup itself rather than as part of an image or graphic where possible to minimise the number of accessibility barriers in your content.

### Purely Decorative Images

While the alt tag is always required when using an img tag in your markup, there are times where the image itself is purely for aesthetic purposes and will not detract from the main page content if it is not accurately described to users who cannot see it.

![A UI design for a car sales website, with categories for Sedans, SUVs and Luxury cars with links to learn more about these types of vehicles.](https://res.cloudinary.com/dz209s6jk/image/upload/v1617293350/Challenges/ofrkupd8a9wh1wenvr8c.jpg)

_Image Credit: [Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-)_

In this image from [Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-), the images of the cars in each panel are purely decorative. In cases like this, it is better to keep the alt tag empty, i.e. `alt=""`, so that these images are not announced by assistive technology.

If you’re having trouble figuring out whether or not an image can be considered purely decorative in nature, W3C has created [a handy flow chart](https://www.w3.org/WAI/tutorials/images/decision-tree/) that will give you some guidance.

## Remember: Something is always better than nothing

If you’re new to considering your code from the angle of accessibility, it can be overwhelming to find out about the many rules and criteria that should be followed to provide accessible web browsing experiences for everyone. However, trying is always better than not trying. Even if your alt text isn’t completely perfect, you should always do your best to describe non-decorative images in your page in a way that makes sense for users who may not be able to see your visuals, whether that is due to network failure, vision impairment, or various other reasons. By adding descriptors to your visuals, you’re actively making the web a better and more inclusive place for everyone.

## More Resources

- [Write helpful Alt Text to describe images | Harvard University](https://accessibility.huit.harvard.edu/describe-content-images)

- [Writing Alt Text for Images | Illinois State University](https://help.illinoisstate.edu/accessibility/website-and-digital/accessible-content-overview/page-content/images/writing-alt-text-for-images)

- [How To: Write Good Alt Text | Supercool](https://supercooldesign.co.uk/blog/how-to-write-good-alt-text)

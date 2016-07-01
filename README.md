# encyclopedia-browser-support-component
##Team: Astonishing-Nile-Crocodile [Jennifer Chiang, Jake Tom]

#[Github Pages Site](http://srsjake.github.io/encyclopedia-browser-support-component/)

As the teams were reduced to two members, we thought this would be a good opportunity to capitalize on the benefits of pair programming. We had 2-3 hour sessions every couple of days and implemented the layout via screenshare on Skype. While more time consuming than attacking the project on our own time, there were indeed many great aspects to this approach . The benefits included:

- Going back and forth about how to approach sections and voicing all our internalized knowledge was helpful in refining our understanding of fundamental concepts.
- We got to watch our partner's coding style and picked up efficiency tips in the form of keyboard shortcuts and plugins.
- We got to directly communicate, debate and have a more engaging experience working on the project.

## Coding Approach

We employed a top-down approach, first breaking down the layout into its largest functional pieces and laying them out in the markup. The four identified areas were:

1. Content on the right of the layout
2. Sidebar
3. Browser support component
4. Footer

After laying out these sections, we proceeded to go into them individually and match them to the provided design.

CSS was organized by following a content-area-prefixed naming style to avoid an overlap of the namespace between different sections. After finishing the initial version of the layout, we optimized the CSS by assigning common properties like background colors, font colors and border-radius to separate classes in themselves. This made our styles easier to read and modify.

## Encyclopedia Entries

We split them evenly, Jennifer took care of the articles on `<dt>`, `box-sizing` and `Number.prototype.toExponential()`.
Jake took care of the articles on `<var>`, `text-overflow` and `window.print()`. 


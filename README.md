# This repo will hold my HTML, CSS and JS exercies as I go through the book.

## Continue with:

https://stackoverflow.com/questions/29972396/how-can-i-customize-the-tab-to-space-conversion-factor?noredirect=1&lq=1
http://html5doctor.com/downloads/h5d-sectioning-flowchart.png

Definitions: Selector = HTML tag, Style property = e.g. font-size, value = value of style property.

In CSS you create a style class by specifying a tag followed by a "." and descriptor (any name) followed by style properies and their values. For example:

```CSS
h2.emphasis {font-weight: bold;}
```

You can then assign that class to a tag in HTML:

```HTML
<h2 class="emphasis">Text</h2>
```

If you want to create a class that is not tied to one particular tag you can simply omit the tag in the CSS class definition allowing you to assign that class to any tag:

```CSS
.emphasis {font-weight: bold;}
```

Style class can be resued across pages and inifinite number of times within each page. Style Id's can also be resused across pages but only once with each page.

A style ID can be defined the same way a style class is defined except using "#" instead of ".":

```CSS
h2#emphasis {font-weight: bold;}
```

In HTML you use assign the style ID to a tag using id instead of class:

```HTML
<h2 id="emphasis">Text</h2>
```

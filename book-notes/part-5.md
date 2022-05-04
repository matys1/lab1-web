## LESSON 19:

- In web development, two types of scripting exist: server side and client side. Popular server-side scripting languages include: Perl, PHP, Python and Ruby. The book focuses on JavaScript for client-side scripting.

- Browser always accesses JS code through the use of `<script></script>` tag pairs regardless where the JS code lives. You can place the JS code in:
  - Its own external file with a .js extension
  - Directly in your HTML files:
    - In the `<body>` of the page
    - In the `<head>` of the page
    - Within an HTML tag, also known as Event Handler

- When you store your JavaScript in external files, place a link to that file in the `<head>` of the page and reference it in this manner:

```html
<script src="/path/to/script.js"></script>
```

- You can also enclose the code itself in the `<script></script>` tag pairs and place it in the `<head>` of the page and then refer to it (for example, by calling a function) later anywhere in the `<body>` of the page.

- See examples js-print-text.html and js-random-quote.html.

> Note, above examples are obtrusive JavaScript places behavior and interactivity within the HTML document itself.

### The Document Object Model (DOM)

- What you type into your text editor is marked up content. The markup uses a markup language like *Hypertext Markup Language* (HTML) or *Extensible Markup Language* (XML). When this is served to a browser, it is parsed. This parsing converts the marked up content to an internal, tree structured, object graph, called a `Document`. The browser provides a collection of standardized methods and properties through which this object graph can be read or manipulated called the Document Object Model (DOM) Application Programming Interface (API).

- Because the DOM API is the only collection of methods and properties natively available to scripting languages such as JavaScript in browsers for manipulating the object graph, the distinction between this collection and the internal object graph that it accesses is normally not relevant, so the term "DOM" is often used as if it were the object graph itself.

- The DOM represents a `Document` with a hierarchical tree of nodes. 

```html
<html>
  <head>
    <title>My Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <p>Paragraph</p>
  </body>
</html>
```

![dom-tree](imgs/dom-tree.jpg)  
*(DOM tree of the HTML code above)*

- Nodes may be strictly organizational, providing a means for grouping other nodes together or for providing a point at which a hierarchy can be constructed; other nodes may represent visible components of a document where each node represents a single object within the document (such as an element or text node).

> Note: Because the vast majority of code that uses the DOM revolves around manipulating HTML documents, it's common to refer to the nodes in the DOM as elements, although strictly speaking not every node is an element.

- The DOM represents the page so that programs can interact and change the document structure, style, and content. Without DOM scripting languages (such as JavaScript) wouldn't have any model or notion of web pages, HTML documents, SVG documents, and their component parts. The document as a whole and everything it contains are parts of the DOM for that document.

- As mentioned above, the DOM API is built using multiple APIs (standardized methods and properties) that work together. The DOM Core represents the functionality used for XML documents, and also serves as the basis for HTML DOM API. From there, it is expanded by other APIs as needed, such as, the SVG API for representing SVG documents to the DOM Core. The DOM defines the interfaces that describes documents and objects. These interfaces are a means of specifying a way to access and manipulate an application's internal representation of a document. 

- The `Document` interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree. However, there are other interfaces defined in the DOM specification, such as, `Window` and `Node`.

- The DOM API is used to build websites. The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API. Even if most web developers will only use the DOM through JavaScript, implementations of the DOM can be built for any language, such as Python.

- In very simple and incomplete terms the DOM is like the overarching framework. The overall container object is called the `document`. Any element that you create within the `document` to which you’ve given an `id` can be referenced by that `id`. For example, if you have a `<div>` with the `id` `wrapper`, then in the DOM that element is referenced as:

```js
document.wrapper
```

- If you wanted to change the style of the element you would change the style object associated with it, for example:

```js
document.wrapper.style.background-color="#ffffff"
```

### Rules to unobtrusive JavaScript

- It should be usable - without being noticed
- It should be easily degradable - no error messages, silently disappear
- Make it accessible - core site functions shouldn't rely on JS
- Keep it in separate files from structure and style  

See the unobtrusive version of js-random-quote.html here js-unobtrusive-random-quote.html. Some of the changes include:
- including a fallback text
- use of ids
- updating the DOM by using the `innerHTML` method
- moving the script just before the closing `</body>` tag, but ideally it should live in an external file

> I finished with reading and notes of this lesson, however, before moving on with the lesson 20 below perhaps try creating this image gallery described in "Changing Images Based on User Interaction". The book doesn't provide a complete code listing, but perhaps you can figure it out based on the other js exercises and some research if needed? Things you'll need to do:
>  - find your own images and have two versions of each - large and small (look into this free image software Gimp or whatever it was called)
>  - write some unique text for each image that will change when you select an image
>  - reuse some of the components from the previous js exercises from this lesson

## LESSON 20

Continue reading & notes. See above comment though!

---

**Links in the book:**

Official DOM specification: http://www.w3.org/DOM/  
Some JS library for image galleries: http://lokeshdhakar.com/projects/lightbox/   
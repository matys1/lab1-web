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

- The DOM represents a document with a hierarchical tree of nodes. 

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

- The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree. However, there are other interfaces defined in the DOM like `Window` and `Node`.

- The DOM API is used to build websites. The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API. Even if most web developers will only use the DOM through JavaScript, implementations of the DOM can be built for any language, such as Python.

Continue from "What Is Unobtrusive JavaScript?"
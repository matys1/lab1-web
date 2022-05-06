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

### Changing Images Based on User Interaction

- The book doesn't provide a complete code listing for this example, but I decided to take a couple of days to create, from scratch, a mini website like in the book to the best of my ability. See js-img-gallery.html.

- Overall it worked out great. I used both Grid and Flexbox extensively for the layouts. HTML was quite simple with the only exception being the JS event handlers embedded in the HTML that I borrowed from the book. The external JS file is solely for the chaning of the text that accompanies each picture with code partially lifted from previous projects in the book and some stackoverflow.

- Overall good example and can use it as basis for next projects. This was really my first "large" project I did completely from scratch.

---

**Links in the book:**

Official DOM specification: http://www.w3.org/DOM/  
Some JS library for image galleries: http://lokeshdhakar.com/projects/lightbox/  

## LESSON 20

Getting started with JavaScript Programming

### Basic concepts and terms:

- A **statement** is a section of code that performs a single action. A statement is typically a single line of JavaScript, though you can also break a statement across multiple lines or include more than one statement in a single line.

- A semicolon (`;`) marks the end of a statement, but you can also omit the semicolon if you start a new line after the statement. So you can separate statements by either using a semicolon or a new line or both.

- Below are four valid statements. Because they are each on a new line, the semicolon is optional, though if you were to but all on the same line, you would have to use semicolon.

```js
now = new Date();
hours = now.getHours();
mins = now.getMinutes();
secs = now.getSeconds();
```

- A **function** is a number of JavaScript statements that are treated as a single unit. A statement that uses a function is referred to as a function call. A function can accept a parameter and also return a value. A parameter is an expression inside the parentheses that tells the function what to do. A function can also return a value to a waiting variable.

- For example, the following function call prompts the user for a response and stores it in the text variable:

```js
text = prompt("Enter some text.")
```

- A **variable** is a container that can store a number, a string of text, or another value. For example:

```js
var fred = 27;
```

> Note, use single equality operator (`=`) for assignments. Use double or triple equality opeartor for comparisons (`==` or `===`), like for example, in a conditional statement.
>
> When choosing between a double or tripe equality operator for comparisons, the best practice suggests it's always better to use the triple equality operator.

- An **object** is a collection of related data and/or functionality. Where a variable stores a single piece of information, an object can store two or more pieces of data at once. Objects usually consist of several variables (which inside an object are called *properties*) and functions (inside an object called *methods*). 

- *Properties* are the variables that store the objects data. For example, an object might represent an individual person with properties like name, address and telephone number providing the information about this person. For example, `Bob.address` or `Bob.phone`.

- *Methods* are functions that work with an object's data. For example, our person object might include a `display()` method to display the person's information. In JavaScript terminology, the statement `Bob.display()` would display Bob’s details.

- JavaScript supports three kinds of objects:
  - Built-in objects like `Date`, `Array`, `String`, `Math`, `Boolean`, `Number`, and `RegExp`.
  - DOM objects. For example `alert()` function is a method of `window` object.
  - Customer objects that you build yourself, like the person object discussed above.

- A **conditional statement** checks for certain conditions when the script runs. For example, an `if` statement.

- A **loop** is a group of statements that repeat a certain number of times. For example, the `for` statement is one of several stements used for loops. 

- An **event handler** is a script that tells the browser what to do when a certain event occurs. For example, events such as when the mouse button is pressed or when a page is finished loading. You specify the event handler as an attribute within the HTML tag and include the JavaScript statement to handle the event within the quotation marks. You can define your own functions to act as event handlers, for example: 

```js
<img src="button.gif" onmouseover="highlight();">
```

> Note, Using an attribute on the HTML tag is not unobtrusive. You’ll learn how to make event handlers unobtrusively in later lessons.

### Order of script execution

Any number `<script>` tag pairs, external JavaScript files and event handlers can be used within a single document. Below describes scripts in which areas of the document execute first. If there are multiple scrits specified within the same area, they are evaluated in the order that they are written in.

1. Sets of `<script>` tags within the `<head>`.
2. Sets of `<script>` tags within the `<body>` while the page loads and displays.
3. Event handlers are executed when their events occur.

> It’s important to know that every time the browser encounters a `<script>` tag, it stops concurrent downloading to download and parse just that script. All other HTML tags and elements are threaded, which means browsers can download several at a time. This is why it’s important to have as few `<script>` tags in your document as possible, and, whenever possible, to load them last in the HTML.

- Remember than JavaScript is case sensitive. The basic rules are:
  - Keywords such as `for` and `if` are alaways lower case.
  - Built-in objects such as `Math` and `Date` are always capitalized.
  - DOM object names such as `setAttribute` and `getElementById` are camel case with the first letter being in lower case.

- Variable, object and function names can include uppercase and lowercase letters, numbers and the underscore ( `_` ). They must begin with a letter or an underscore though. The names also must not be reserver keywords. See a full list of reserved keywords on MDN.

- JavaScript ignores whitespace. Use it as liberally as you wish.

- Two types of comments:

```js
// single line comment

/*
multi-line
comment
*/
```

- Two key points and reminders:
  - User external JavaScript files whenever possible, and as few as possible. This way the page loads faster and encourages the writing of modular scripts that can be reused.
  - Use a semicolon at the end of each statement and use only one statement per line. This improves readability and makes it easier to debug.

### Using JSON

- JSON-encoded data is expressed as a sequence of `parameter` and `value` pairs, with a colon separating each parameter and its value. These `"parameter":"value"` pairs are separated by commas. The whole sequence is enclosed in curly braces to form a JSON object.

- For example, the following creates a variable that stores a JSON object called `yourObject`:

```js
var yourObject = {
   "param1":"value1",
   "param2":"value2",
   "param3":"value3"
};
```

- JSON objects can have properties and methods accessed directly using the usual dot notation:

```js
alert(yourJSONObject.param1); // alerts 'value1'
```

- It is easy to convert a JSON object into a string through a process known as serialization; serialized data is convenient for storage or transmission around networks. JSON is used a lot in APIs.

---

**Links in the book:**

List of reserved keywords: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords  
JSON docs: http://www.json.org/  

## LESSON 21

Reading & Notes.
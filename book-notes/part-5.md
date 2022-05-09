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

- A **variable** is a container that can store a number, a text string, an object or another value. For example:

```js
var fred = 27;
```

> Note, use single equality operator (`=`) for assignments. Use double or triple equality opeartor for comparisons (`==` or `===`), like for example, in a conditional statement.
>
> When choosing between a double or tripe equality operator for comparisons, the best practice suggests it's always better to use the triple equality operator.

- An **object** is a collection of related data and/or functionality. Where a variable stores a single piece of information (a single entity), an object can store two or more pieces of data at once. Objects usually consist of several variables (which inside an object are called *properties*) and functions (inside an object called *methods*). Note that even though an object can consist of several variables, you can also assign an object to a variable.

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
  - DOM object names such as `setAttribute` and `getElementById` use "lower camel case" naming convention where you stick together multiple words, using lower case for the whole first word and then capitalize subsequent words.

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

### Understanding DOM

- JavaScript can change and manipulate documents in the browser even after the page has loaded. It can add or remove elements, change text and much more - all dynamically without requiring additional requests to a server.

- To work with the browser and documents, JavaScript uses the hierarchy of parent and child objects found within the DOM that represent all the content and components of a web document and the browser that renders it. When you refer to a DOM object, you use the parent object name followed by the child object name or names, separated by periods.

```js
window.document.getElementById("someElement")
```

> Note that in the book they refer to DOM interfaces as objects.

- The `window` object represents the browser window and is the parent object for other objects like `document`, `location`, `history` etc. Even though `window` is the parent object, in most situations you can omit it, for example: 

```js
document.getElementById("someElement")
```

### Working with the `document` object - getting information about a Document

- Some of the properties of the `document` object:
  - `document.URL` - returns document's URL; cannot be changed
  - `document.title` - returns the value of `<title>` tag; can be changed
  - `document.referrer` - returns the URL of the page the user was viewing before the current page - usually the page with a link to the curret page; cannot be changed
  - `document.lastModified` - returns the date the document was last modified
  - `document.cookie` - enables you to read or set a cookie used within the document
  - `document.images` - returns a collection of images used in the document

### Writing text in a Document

- `document.write()` method can write text as part of the HTML in a document

### Working with `link` and `anchor` object

- A document can contain, and very likley does, multiple links. A `link` object is a child of the `document` object and has a list of properties with the `href` property containing the entire URL, and other properties define other, smaller, portions of it.

- A `links` array contains all `link` objects in the current page. A property of the array, `document.links.length`, indicates the number of `link` ojects (and thus links) in the page.

For example, the following statement assigns the entire URL of the first link stored in the array to the variable `link1`:

```js
var link1 = links[0].href; //omits the document.
//below is just an illustration of points above
document.link
document.links
document.links.length
document.links[0].href
```

- Similarly, there's an `anchor` object, an `anchors` array and a `document.anchors.length` property. For example, you could use `anchors` array to loop through all the anchors on a given page to dynamically generate a table of contents at the top of the page.

### Working with the `history` object

- The `history` object is another child property of the `window` object. The object holds information about the locations (URLs) that have been visited before and after the current one, and it includes methods to go to previous or next locations.

- The `history` object has one property `history.length` which returns the number of different locations the user has visited.

- The `history` object has three methods you can use to move through the history list:
  - `history.go` - accepts positive and negative integers to open a specific URL from the history list. For example `history.go(-2)` is the same as clicking the back button twice.
  - `history.back` - loads the preceding URL in the history list (one step back)
  - `history.forward` - loads the next URL in the history list (one step forward)

- For an example on how to create your own navigation back and forth buttons see l21-back-forth-buttons.html

### Working with the `location` object

- The `location` object is another child property of the `window` object. The object holds information about the URL currently loaded in the browser window. You can also load a URL into the current window by assigning a value to the `href` property:

```js
window.location.href="http://www.google.com";
```

- The `location` object has the same set of properties as the `link` object. The following is the list of properties (prefix them with `location.` or `link.` as needed): `protocol`, `hostname`, `port`, `pathname`, `search`, `host` and `hash`.

> Although the `location.href` property usually contains the same URL as the `document.URL` property described earlier in this lesson. But you can’t change the `document.URL` property. Always use `location.href` to load a new page in a given window.

- The `location` object also has three methods:
  - `location.assign` - loads a new document e.g. `location.assign("https://www.google.com")`
  - `location.reload` - same as the refresh button in the browser
  - `location.replace` - replaces the current location with a new one, but unlike the properties above you cannot use the back button (good for temporary pages etc.).

### More about the DOM structure

- Reiterates on the DOM tree: the DOM adds objects under the document object for every element of a page. In the DOM, each container within the page and its contents are represented by an object. The objects are organized into a treelike structure, with the document object itself at the root of the tree and with individual elements such as the heading and paragraph of text at the leaves of the tree.

- Each container or element in a document is called a node in the DOM. You can refer to nodes by assigning an ID or by navigating the tree using the relationships between the nodes.

- The element and the text the element contains are treated as two separate nodes. The formed being refered to as node and the latter as text node. For example, the actual text in the paragraph is a node in itself and is a child of the `p` object rather than being a grandchild of the `body` object. Similarly, the text within the `<h1>` tags is a child of the `h1` object.

- The DOM uses another term for organization of objects: siblings. This refers to objects that have the same parent - in other words, objects at the same level in the DOM object tree.

### Working with DOM nodes

- Each node (object) in the DOM tree can be accessed in JavaScript. Basic node properties:
  - `nodeName` - The name of the node (not the ID). For nodes based on HTML tags, such as `<p>` or `<body>`, the name is the tag name: `p` or `body`. For the document node, the name is a special code: `#document`. Similarly, text nodes have the name `#text`. This is a read-only value.
  - `nodeType` - An integer describing the node’s type, such as `1` for normal HTML tags, `3` for text nodes, and `9` for the document node. This is a read-only value.
  - `nodeValue` - The actual text contained within a text node. This property returns `null` for other types of nodes.
  - `innerHTML` - The HTML content of any node. You can assign a value including HTML tags to this property and change the DOM child objects for a node dynamically.

> The `innerHTML` property is often the easiest way to change content in a page. The `innerHTML` property is not officially part of the standard but is supported by all major browsers and is safe to use. You can also accomplish this in a more standard way by deleting and creating nodes described below.

- Node relationship properties (as described in the DOM structure section above):
  - `firstChild` - The first child object for a node. For nodes that contain text, such as `h1` or `p`, the text node containing the actual text is the first child.
  - `lastChild` - The node’s last child object.
  - `childNodes` - An array that includes all of a node’s child nodes. You can use a loop with this array to work with all the nodes under a given node.
  - `previousSibling` - The sibling (node at the same level) previous to the current node.
  - `nextSibling` - The sibling after the current node.

### Document methods

- The `document` node itself has several very useful methods:
  - `getElementById(id)` - Returns the element with the specified `id` attribute.
  - `getElementsByTagName(tag)` - Returns an array of all the elements with a specified tag name. You can use the wildcard `*` to return an array containing all the nodes in the document.
  - `createTextNode(text)` - Creates a new text node containing the specified text, which you can then add to the document.
  - `createElement(tag)` - Creates a new HTML element for the specified tag. As with `createTextNode`, you need to add the element to the document after creating it. You can assign content within the element by changing its child objects or the `innerHTML` property.

### Node methods

- Each node within a page has a number of methods available. Which of them are valid depends on the node’s position in the page and whether it has parent or child nodes:
  - `appendChild(new)` - Appends the specified new node after all the object’s existing nodes.
  - `insertBefore(new, old)` - Inserts the specified new child node before the specified old child node, which must already exist.
  - `replaceChild(new, old)` - Replaces the specified old child node with a new node.
  - `removeChild(node)` - Removes a child node from the object’s set of children.
  - `hasChildNodes` - Returns the Boolean value `true` if the object has one or more child nodes or `false` if it has none.
  - `cloneNode` - Creates a copy of an existing node. If a parameter of `true` is supplied, the copy will also include any child nodes of the original node.

### Controlling positioning, visibility and text with JavaScript

- After learning about the structure of the DOM in sections above, you can start thinking about how you can control any element in a web page. You can group elements in a container elements and move all of the child objects by controlling just the container.
  - See an example of moving a object around the page using JavaScript and showing and hiding it l21-movable-layers.html

- An alternative to using `display: none` and `display: block` is to use the `visibility` property that every object has with possible values `"visible"` or `"hidden"`.
  - See an example of using `visibility` property in l21-hiding-showing.html.

- Modify the contents of any element using the `nodeValue` property. The `nodeValue` property of a text node contains its actual text, and the text node is the child of the element (node).
  - See an example of using the `nodeValue` property in l21-modify-text.html.

- To add new text to a page (instead of modifying existing text) you must first create a new text node using the `createTextNode()` method. Then you need to add the new text node to the document using the `appendChild` method.
  - See an example of using the above methods in l21-add-text.html.

- Bonus: did a bonus exercise see l21-bonus-hiding-showing.html.

---

**Links in the book:**

A complete list of all available properties and methods: http://www.w3.org/TR/DOM-Level-3-Core/  

## LESSON 22

- Key concepts in this lesson: variables, strings, arrays, functions (group code) and objects (group data)

### Using variables with `let` and constants with `const` (from MDN)

> Note that this book is using `var` for variable definitions. This is outdated and you should always use `let` or `const` instead of `var`. The `let` and `const` declarations also fix a number of issues that are present when using the `var` declaration.

- Declare variables using `let` like this:

```js
let myName;
let myAge;
```

- If you try to return them they will return a value of `undefined`. Don't confuse a variable that exists but has no defined value with a variable that doesn't exist at all - they are very different things. Returning a variable that doesn't exist will produce an error.

- Once you declare a variable, you can initialize it with a value. For example:

```js
myName = "Chris";
myAge = 37;
```

- As a shorthand, you can declare and initialize a variable at the same time. For example:

```js
let myName = "Chris";
let myAge = 37;
```

- If you want to update a variable (change the value it stores) you would use the same syntax as initializing a variable. For example:

```js
myName = "Tom";
myAge = 28;
```

> Note, you only use the `let` declaration once - when declaring a new variable for the first time. You don't use it when you want to initialize it with a value or update the value the variable stores (for example, when incrementing or decrementing it), attempting to redeclare the same variable will return an error.

- However, when you use `var` you can declare and initilize a variable and declare it again afterwards and it will still work. You can also redeclare variables using `var`. These and more confusing and inconsistent behaviours are fixed when using `let` to create a more consistent and predictable outcome. That's why you should always use `let` instead of `var`.

- In JavaScript you can also declare constants using `const`. Constants are like variables, except that:
  - You must initialize them at the same time as you declare them
  - You cannot update them (assign a new value) after you've initialized them

- Even though you cannot update constants, you can update the content of the value that the constant stores. For example, if you assign an object to a constant you can update, add, or remove properties of that object, because even though the content of the object has changed, the constant is still pointing to the same object. For example:

```js
const bird = { species : 'Kestrel'};
console.log(bird.species);  // "Kestrel"

bird.species = 'Striated Caracara';
console.log(bird.species);  // "Striated Caracara"
```

- Using constants is very useful because it tells anyone looking at your code that this name will never be assigned to a different value. Any time they see this name, they will know what it refers to. Therefore you should always use `const`, and only use `let` when you have to.

- Because JavaScript is a "dynamically typed language", which means that, unlike some other languages, you don't need to specify what data type a variable will contain, you can use the special operator `typeof` to return the data type of the variable. For example:

```js
typeof myName
```

- The differences between `var`, `let` and `const` make it so you always want to explicitly write your declarations using either `let` or `const` because if you omit them and declare and initialize using, for example, only `myName = "Chris";` it will default to functioning as `var`, which you don't want.

### Using variables with `var` (from book)

- Choosing a variable name:
  - Variable names can include both upper- and lowercase letters, digits (0-9) and an underscore ( _ )
  - The first character must be either a letter or an underscore (though it's recommended to not use an underscore as the first character)
  - And like everything in JavaScript variable names are case sensitive

- A variable’s scope is the area of the script in which that variable can be used. There are two types of variables:
  - **Global variables** have the entire script (and other scripts in the same HTML document) as their scope. They can be used anywhere, even within functions. To create a global variable you declare it in the main script outside of any functions. Using the `var` keyword when declaring global variables is optional, however, it's considered best practice to do it anyway to improve readability.
  - **Local variables** have a single function as their scope. They can be used only within the function they are created in. In addition, the variables in the function’s parameter list are always local variables. Using the `var` keyword when declaring local variables is mandatory. This forces JavaScript to create a local variable, even if there is a global variable with the same name, however, it's best practice to keep variable names distinct, even if you are using them in different scopes.  
  *(note that some of the above is obsolete due to `let` and `const`)*

- Use a single euqal sign (`=`) to assign a value to a variable.
  - For example `var a = 40`.
  - You can use any expression to the right of the equal sign, including other variables. For example to increment a variable by `1` you use `a = a + 1`.
  - A shorthand for incrementing and decrementing variables are `+=` and `-=` operators. For example `a += 1` and `a -= 1`. Note that you can also use the `+=` shorthand to concatenante text to a string, for example, this statement adds a period to the current contents of a string variable named `sentence` like `sentence += ".";`.
  - An even shorter way is to use the increment and decrement operators `++` and `--` which inrement and decrement by 1 by default. For example `a++` increments variable `a` by 1 and `a--` decrements variable `a` by 1.
  - You can also use the increment and decrement operators before the variable name, for example: `++a` and `--a`. However:
    - If the operator is after the variable name (`a++`), the increment or decrement happens after the current expression is evaluated. For example, `alert(a++)` will display an alert with value `40` and only then increment `a` to `41`.
    - If the operator is before the variable name (`++a`), the increment or decrement happens before the current expression is evaluated. For example, `alert(++a)` will first increment `a` to `41` and only then display an alert with value `41`.

> Note that ultimately it doesn't matter if you use the longhand or shorthand syntax, either way the value returned is the same. It's just there for convenience.

- The most popular (note this is not an exhaustive list) operators in JavaScript are: 
  - A `+` sign for string concatenation and numeric additon.
  - The usual arithmetic operators `-`, `*`, `/`, `%` (modulo), `++` (increment) and `--` (decrement).

- JavaScript uses the usual mathematical operator precedence to evaluate expressions. Meaning, parentheses are evaluated first, followed by multiplication and division, followed by addition and subtraction.

### Data Types in JavaScript

- JavaScript is a "dynamically typed language" so you don't need to specify the type of data a variable will store. 

- The basic JavaScript data types are:
  - Number - Both integers (e.g. `25`) and floating-point numbers (e.g. `1.4142138`).
  - Boolean - Either `true` or `false`.
  - String - Strings are actually `String` objects (e.g. `"Have a nice day"`)
  - Null - The null value, represented by the keyword `null`.

- You can change the value a variable holds and the values don't need to be the same data type. For example you can define a variable `var total = 31;` and then change it to `total = "albatross";`.

- JavaScript handles conversions between data types for you automatically whenever it can. For example if a variable `total` contains a numeric values of `40`, then `document.write("The total is " + total);` would return `"The total is 40"`. 

- In situations where you end up with a string containing a number and need to convert it to a regular numeric value you can use functions below. Both functions ignore the nonnumeric portion of the string, for example `var stringvar = "30 angry polar bears";` parsed like `var numvar = parseInt(stringvar);` would store only the number `30`.
  - `parseInt` - converts a string to an integer number
  - `parseFloat` - converts a string to a floating-point number

> Note, if a valid number is not found, the function returns the special value `NaN`, meaning not a number.

### Working with `String` objects

- JavaScript stores strings as `String` objects. There are common string manipulation techniques that use methods (built-in functions) of the `String` object.

- There are two ways you can create a `String` object and there is no difference in the strings created by the two methods. The former uses a variable and the latter uses a object-oriented syntax:
  - `var a = "this is a string";` (recommended, just use `let` instead)
  - `a = new String("this is a string");`

*(Note there's a small error in the book where it states "the following statement replaces the contents of the `stringtest` variable with a new string". It doesn't actually update the `stringtest` variable, it redeclares it because of the presence of `var`. This is why you should use `let` instead as this kind of behaviour is not allowed and would rightfully return an error.)*

- To find how many characters a string variable contains use the `length` property of the `String` object. For example, below will return integer value `15` which can be used in any numeric expression.

```js
var stringtest = "This is a test.";
console.log(stringtest.length);
```

- To convert the contents of a string to all uppercase or all lowercase use `toUpperCase` and `toLowerCase` methods. For example: 

```js
document.write(stringtest.toLowerCase());

//or if you want to change the stored string value itself
stringtest = stringtest.toLowerCase();
```

> Note that methods always use parentheses, even when there are no parameters. Properties don't.

- Understanding index parameters:
  - Index always starts with `0`. For example, 4th character will have an index of `3`.
  - The first index value is inclusive and the second is noninclusive. For example, a second index of `6` includes up to index `5` (the sixth character).
  - You can specify the two indexes in either order. The smaller one will be assumed to be the first index.

- The `substring()` method returns a portion of the original string between two index values, which you must specify in parentheses. For example:

```js
var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
alpha.substring(0,4) //returns ABCD.
alpha.substring(10,12) //returns KL.
alpha.substring(6,7) //returns G; 6 inclusive 7 exclusive leaves only 6.
alpha.substring(6,6) //returns the null value; 6 inclusive 6 exclusive leaves nothing.
alpha.substring(6,5) //returns F; 5 is assumed to be the first index (inclusive) 6 exclusive.
```

- The `charAt()` method returns a single character from a specified index position within a string. For example:

```js
alpha.charAt(0) //returns A.
alpha.charAt(12) //returns M.
```

- To find a substring use the `indexOf` method to search for the substring beginning from left to right or the `lastIndexOf` method to search for the substring beginning from right to left. Both methods will return the **starting** (leftmost) index position of the substring. 

- Both methods accept one or two parameters. The first parameter specifies the substring you're searching for. The second parameter (inclusive) optionally specifies the starting position from which you want the search to start. Note that for `indexOf` the default starting positon is `0` but for `lastIndexOf` the default starting position is the max index value (which in below example is `10`). For example:

```js
var nums = "10100111001" //this is a string; 11 characters in total, last index of 10 
console.log(nums.indexOf("1")) //returns 0
console.log(nums.indexOf("1",1)) //returns 2
console.log(nums.lastIndexOf("1")) //returns 10
console.log(nums.lastIndexOf("1",9)) //returns 7
console.log(nums.lastIndexOf("11",9)) //returns 6
```

CONTINUE FROM "Using Numeric Arrays". Everything above is done.
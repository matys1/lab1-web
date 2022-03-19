reading & notes: start from lesson 5 (from top)

# HTML, CSS and JS Book notes

*OVERALL PROGRESS CONTINUE WITH LESSON 4 (from the top)*  
*NOTE PROGRESS CONTINUE WITH LESSON 3 (from the top) after finishing the TO DO*

## LESSON 1

### Key Points

- Hypertext Markup Language (HTML), Cascading Style Sheets (CSS) and JavaScript (JS).

- HTML generates the structure, CSS creates the look, and JavaScript controls the behavior of the pages.

- Web content delivery involves request(s) being made from the web browser to the web server and the server sending responses back to web browsers. Fewer calls to server the better performance.

- Web hosting providers (most established is Bluehost: www.bluehost.com).

- Testing with multiple browsers (Safari, Chrome, Firefox, Edge, Opera).

- File Transfer Protocol (FTP) Client to transfer web conetent to web server.

### Document Root

The document root of your web server is the directory that is designated as the top-level directory for your web content — the starting point of the directory structure (same way that Git has a document root). It's the trailing slash in the domain URL. 

> For example, if your domain is yourdomain.com and your URL is http://www.yourdomain.com/, the document root is the directory represented by the trailing slash (/) at the very end. It is the place where the web server begins looking for files requested by the web browser.

For a file to be accessible from the web server it has to be in the document root or any of it's sub-directries. If it's outside of the document root it will be unaccessible from any URL.

> For example if you place a sample.html file in the document root, you can access it from: http://www.yourdomain.com/sample.html. If you place the sample.html file in a subdirectory of document root you would access it from: http://www.yourdomain.com/newdirectory/sample.html

### Using an index.html file

- The index.html file is typically the default file for any directory in a web server. 
- It enables users to access http://www.yourdomain.com/newdirectory/ without using a trailing filename.

> For example, with an index file either will land on Apple’s iPhone informational page:
http://www.apple.com/iphone/  
http://www.apple.com/iphone/index.html

If there were no index.html page (the name of the index.html file was different) in the iphone directory and it dissallowed directory browsing then you would get a “Directory Listing Denied” error.

Make sure the document root and all its sub-directories contain an index.html file.

## LESSON 2

### Six tags every HTML page requires

```HTML
<!doctype html>
<html>
	<head>
		<meta>
		<title></title>
	</head>
	<body></body>
</html>
```

- Some HTML tags have two parts. An opening tag and a closing tag. For example, `<body>` Some Text `</body>`.

- Some have only 1 part (also called an empty tag). Adding the / in the empty tags used to be a requirement but that's no longer the case in HTML5. `<meta>` is an empty tag in the above example.

- You can specify additonal attributes in tags, for example charset in the `<meta>` tag like `<meta charset="utf-8">`.

### Basic strcuctural HTML tags

```HTML
<p></p> - paragraph (closing </p> tag is optional); skips a line between paragraphs
<hr> - horizontal rule & line break
<br> - line break
<h1></h1> - heading 1 
<h2></h2> - heading 2
<h3></h3> - heading 3
```

- You should use the heading tags (`<h1>`, `<h2>`, `<h3>` etc.) to keep tight control over content hierarchy; do not use headings as a way to achieve a particular look because that’s what CSS is for. HTML tags define what the content is rather than how it looks.

### Basic semantic HTML tags

```HTML
<header></header> - introductory info, usually contains <h1>, <h2>, <h3> etc. tags but not necessarily
<footer></footer> - supplementary info, copy right, author of article etc.
<nav></nav> - for navigational elements (primary & secondary, table of contents etc.)
<section></section> - generic or thematically related info, higher level than <p>
<article></article> - complete / standalone body of work, higher level than <section>
<aside></aside> - helper text, definitions, quotes, note, additional explanation etc.
<address></address> - address information, often contained within a <footer> element
```

Tags can be nested within each other and repeated multiple times to convey structure and semanting meaning.

> For example, you can have a `<body>` tag containing a `<header>`, `<nav>` and `<article>` tags. An `<article>` tag containing `<header>` and `<section>` tags and a `<section>` tag containing `<header>` and `<p>` tags.

### Flowchart for HTML5 sectioning

![Tag_Flowchart](imgs\h5d-sectioning-flowchart.png)  
*Source: http://html5doctor.com/downloads/h5d-sectioning-flowchart.png*

- Other HTML tags:

```HTML
<ol></ol> - ordered list
<ul></ul> - unordered list
<li></li> - list item; used within <ol> or <ul> tags to list each item
<a></a> - used to create a hyperlink to another page or a location within the same page
```

### Basic HTML template

```HTML
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Your Title</title>
	</head>
	<body>
		<header>
			<h1>Your Header</h1>
		</header>
		<section>
			<p>Your paragraph</p>
		</section>
	</body>
</html>
```

*Find template file [here](template.html)*

## LESSON 3

- In CSS you can specify an HTML tag (referred to as Selector).
- In curly braces you can specify one or multiple Style Properies (for example, font-size) followed by colon and its value (for example, 10pt).
- Each style property and value pair has to be semicolon delimited.

```CSS
h1 {font-size: 10pt; color: black;}
```

- You can save the above CSS code in a separate file with a .css extension. The resulting file is called an external style sheet. 

- To link an external style sheet to an HTML document, include a `<link>` tag in the `<head>` section of each HTML document. Both attributes `rel` and `href` are required within a `<link>` tag.
	- Attribute `rel` specifies the relationship between the current document and the linked document. There are 14 other possible values other than `"stylesheet"`.
	- Attribute `href` specifies the location of the linked document.

```HTML
<head>
	<meta charset="utf-8">
	<title>Your Title</title>
	<link rel="stylesheet" href="styles.css">
</head>
```

### Style properties in CSS can be grouped into two categories:

- Layout properties - Properties that affect the positioning of elements on a web page, such as margins, padding, and alignment.

- Formatting properties - Properties that affect the visual display of elements in a website, such as the font type, size, and color.

### Layout properties

- The `display` property is one if the most popular layout properties.
- It has five basic values among others: `block`, `list-item`, `inline`, `inline-block` and `none`.
	> For example, `display: block;`.
- You control the dimensions of the rectangular area for an element with the `width` and `height` properties.
- The values for `width` and `height` properties can be specified in different units of measurement: `in`, `cm`, `em`, `mm`, `%`, `px`, `pt` and `rem`
	> For example, `width: 200px;`

### Formatting properties

- The properties for formatting the border are one if the most popular formatting properties.
- Types of border properties: `border-width`, `border-color`, `border-style`, `border-left`, `border-right`, `border-top`, `border-bottom` and `border`
	> For example, `border-style: solid;`.  
	> Note, the `border-style` property has 9 other possible values other than `solid`.

- Other popular formatting options include:
	- Border radius: `border-top-left-radius`, `border-top-right-radius`, `border-bottom-left-radius`, `border-bottom-right-radius` and `border-radius`.
	- Element background color: `background-color`.
	- Element text color: `color`.
		> For example, `background-color: #999999;` or `color: rgb(0,0,255);`
	- Text indentation and alignment: `text-align` and `text-indent`.
	- Font related properties: `font-family`, `font-size`, `font-style` and `font-weight`.
	- `font` lets you set many font style properties at once instead of using the more specific property declarations above.
	- `line-height` sets the height of each line of text.
	- `text-decoration` is useful for turning off link underlining; simply set it to `none`. The values of `underline`, `overline`, and `line-through` are also supported.
	- `padding` (and the more specific `padding-left/right/top/bottom`) adds padding to the element

> Note: Length measurements in CSS are defined as fixed or relative. Fixed lengths - such as `in`, `cm`, `mm`, `px` or `pt` - do not change size, while relative lengths - such as `em`, `%`, `ch`, `vw`, `vh` or `rem` - can change.
>
>Best practices recommend that you use relative font sizes (such as rem or em) rather than fixed font sizes (such as inches or points) so that your designs scale more gracefully.

### Using Style Classes and IDs

- In the example at the start of [LESSON 3](#lesson-3) the style rules would apply to all `<h1>` headings:

```CSS
h1 {font-size: 10pt; color: black;}
```

- If you want different kinds of `<h1>` headings for use in your documents you create a style class by specifying a tag followed by a dot and a descriptive class name (any name).

```CSS
h1.silly {font-weight: 36pt; font-family: Comic Sans;}
h1.serious {font-weight: 36pt; font-family: Arial;}
```

- You can then assign that class to target HTML tags using the `class` attribute:

```HTML
<h1 class="silly">Party Time!</h1>
<h1 class="serious">Investor Information</h1>
```

- If you want to create a universal class that is not tied to one specific tag you can simply omit the tag in the CSS class definition allowing you to assign that class to any tag:

```CSS
.emphasis {font-weight: bold;}
```

- A style class can be resued across pages any number of times per page. Style IDs can also be resused across pages but only once per page.

- A style ID can be defined the same way a style class is defined except using a pound sign (#) instead of a dot.

```CSS
h1#silly {font-weight: 36pt; font-family: Comic Sans;}
h1#serious {font-weight: 36pt; font-family: Arial;}
```

- You can then assign that ID to target HTML tags using the `id` attribute:

```HTML
<h1 id="silly">Party Time!</h1>
<h1 id="serious">Investor Information</h1>
```

### Internal Style Sheets and Inline Styles

- There are two alternatives to using an external style sheet: Internal Style Sheet and Inline Styles.

- An Internal Style Sheet involves enclosing CSS code between `<style>` and `</style>` tags in the `<head>` of an HTML document.

```HTML
<head>
	<meta charset="utf-8">
	<title>Some Page</title>
	<style>
		h1 {font-size: 10pt; color: black;}
	</style>
</head>
```

- An Inline Style involves embedding the CSS code within an individual element (tag) using the `style` attribute.

- Use `<span>` to modify the style of any portion of text that is to appear in the middle of a sentence or paragraph without any line break.

```HTML
<p style="color:green;">
	This text is green, but <span style="color:red;">this text is red.</span> Back to green again, but...
</p>
<p>
	...now the green is over, and we're back to the default color for this page.
</p>
```

- You can think of cascading style effects as starting with an external style sheet, which is overridden by an internal style sheet, which is overridden by inline styles.

- Using an external style sheet is the best practice though.

- You can link multiple external style sheets via multiple `<link>` tags to the same document, but from performance standpoint fewer sheets are better because of fewer calls to the server.

> CSS validation tool: https://jigsaw.w3.org/css-validator/

## LESSON 4

- Four places where you can place JavaScript in HTML
	- In the `<body>` of the page
	- In the `<head>` of the page
	- Within an HTML tag, also known as Event Handler
	- An external JavaScipt file

- Overall best pracrice is to have an external JS file and place a link to that file in the `<head>` of the page. This doesn't apply to Event Handlers though which you need to use within the HTML tags.

```HTML
	<head>
		<meta charset="utf-8">
		<title>Your Title</title>
		<script src="js/scripts.js"></script>
	</head>
```

> Note, because in this case you're linking to an exernal JS file, anything between the `<script>` and `</script>` tags is ignored and can be left blank. 

- Below is an example of an Event Handler attached to a button elemnt:

```HTML
<button type="button"
onclick="alert('You clicked the button.')">
Click Me!</button>
```

- Below example creates a JS function that you can store in an external JS file that returns the local time in hours, minutes and secods.

```JS
window.onload = function() {
	now = new Date();
	hours = now.getHours();
	mins = now.getMinutes();
	secs = now.getSeconds();
document.getElementById("TimeVal").innerHTML = hours + ':' + mins + ':' + secs;
}
```

- You can then return the value in, for example, a paragraph with in the `<body>` of an HTML page: 

```HTML
<p>Your local time is: <span id="TimeVal"></span></p>
```

## LESSON 5


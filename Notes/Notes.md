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


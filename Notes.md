# Book notes

## LESSON 1

- Hypertext Markup Language (HTML), Cascading Style Sheets (CSS) and JavaScript (JS).

- HTML generates the structure, CSS creates the look, and JavaScript controls the behavior of the pages.

- Web content delivery involves request(s) being made from the web browser to the web server and the server sending responses back to web browsers. Fewer calls to server the better performance.

- Web hosting providers (most established is Bluehost: www.bluehost.com).

- Testing with multiple browsers (Safari, Chrome, Firefox, Edge, Opera).

- File Transfer Protocol (FTP) to transfer web conetent to web server.

### Document Root:

The document root of your web server is the directory that is designated as the top-level directory for your web content — the starting point of the directory structure. It's the trailing slash in the domain URL. For example, if your domain is yourdomain.com and your URL is http://www.yourdomain.com/, the document root is the directory represented by the trailing slash (/) at the very end. It is the place where the web server begins looking for files requested by the web browser.

For a file to be accessible from the web server it has to be in the document root or any of it's sub-directries. If it's outside of the document root it will be unaccessible from any URL.

For example if you place a sample.html file in the document root, you can access it from:
http://www.yourdomain.com/sample.html

If you place the sample.html file in a subdirectory of document root you would access it like:
http://www.yourdomain.com/newdirectory/sample.html

### Using an index.html file

- The index.html file is typically the default file for a directory in a web server. 
- It enables users to access http://www.yourdomain.com/somedirectory/ without using a trailing filename.

For example, with an index file either will land on Apple’s iPhone informational page:

http://www.apple.com/iphone/
http://www.apple.com/iphone/index.html

If there were no index.html page (the name of the index.html file was different) in the iphone directory and it dissallowed directory browsing then you would get a “Directory Listing Denied” error.

Make sure the document root and all its sub-directories contain an index.html file.

## LESSON 2

Six tags every webpage requires: 

```
<!doctype html>
<html></html>
<head></head>
<meta>
<title></title>
<body><body>
```

Many HTML tags have two parts. An opening tag and a closing tag. For example, <body> Some Text </body>.

Some have only 1 tag (called an empty tag). Adding the / in the empty tags used to be a requirement but that's no longer the case in HTML5. <meta> is an empty tag.

You can specify additonal attributes in tags, for example charset in the meta tag like <meta charset="utf-8">.

<p></p>
<hr>
<br>

FOR NOTES CONTINUE IN LESSON 2 Here:
If a closing slash isn’t required for empty elements, you might ask why many people still include it.

OVERALL PROGRESS CONTINUE WITH LESSON 4 (from the top)
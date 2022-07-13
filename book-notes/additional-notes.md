# A collection of notes from different research topics

## HTML attributes vs JavaScript properties

- When the browser loads a page, it parses the HTML and generates DOM objects. Most HTML **attributes** automatically become **properties** of DOM objects in JavaScript. For example, HTML tag with an `id` attribute (`<body id="page">`) becomes a DOM object with `id` property (`body.id="page"`).

In short:
- Attributes – is what’s written in HTML.
- Properties – is what’s in DOM objects and accessed via JavaScript.

- The `value` attribute defines the default value which will be displayed in the element on page load. The `value` attribute in HTML and the `value` property in JavaScript are closely coupled. Form controls (`<button>` and `input`) and few other HTML elements have the `value` attribute. For example, an `<input type="button">` has both a `value` attribute and a `value` property.

- When attribute changes, the corresponding property is auto-updated and vice versa. However, there are exceptions where the update works only in a single direction.

- Because the `<button>` and `<input>` tags cannot contain text or other elements (they don't have a closing tag), the values they display in the interface can be accessed only via the `value` attribute or property. This is not the case for, for example, `<p>` tag which can contain both text and other elements between the opening and closing tags. Thus, to read or set the values for `<p>` you need to use the `innerText`, `textContent` or `innerHTML` properties as it doesn't support the `value` attribute or property.

- There are some interesting cases like, for example, `<textarea>` control which doesn't support `value` attribute but supports the `value` property. The `<textarea>` has opening and closing tags which means it also supports `innerText`, `textContent` and `innerHTML` properties. So in this case reading or setting the `value` property and, for example, the `innerHTML` property produce the same outcome.

- Note, that you can also use the `.value` property to return the value of any HTML attribute like `src` or `id`. For example:

```js
const elem = document.getElementById("large-img");
console.log(elem.getAttributeNode("src").value);
```

- You can create your own non-standard attributes to be used as hooks in JavaScript, which are easier to manage than, for example, classes. For this reason `data-*` attributes exist. All attributes starting with `data-` are reserved for programmers' use. They are available in the `dataset` property. For example, if an element has an attribute named `data-about`, it’s available as `element.dataset.about`.

- Some of the methods to work with attributes:
  - `elem.hasAttribute(name)` – checks for existence.
  - `elem.getAttribute(name)` – gets the value.
  - `elem.setAttribute(name, value)` – sets the value.
  - `elem.removeAttribute(name)` – removes the attribute.
  - `elem.attributes` - collection of all attributes (name and value pairs).

---

- https://javascript.info/dom-attributes-and-properties
- https://stackoverflow.com/questions/44217872/javascript-value-property
- http://help.dottoro.com/ljpkovxr.php
- https://betterprogramming.pub/whats-best-innertext-vs-innerhtml-vs-textcontent-903ebc43a3fc

## Abiguity when refering to elements by their name

- You have to be careful when you use `getElementById` versus other methods like `getElementsByName` that return a `NodeList` and thus require the use indexes. 

- Using `getElementById`:

```
In HMTL:
<p id="testtext">my text</p>

In JS:
document.getElementById("testtext").innerHTML = "apples";
```

- Using `getElementsByName`:
```
In HTML:
<p name="testtext">my text</p>

In JS:
let something = document.getElementsByName("testtext");
something[0].innerHTML = "apples";
```

## Using the `new` keyword

- You should use the `new` keyword when you call object constructor methods. If you call a constructor and don't use the `new` keyword you've called it as a regular method / function and depending on the constructor it might work, might work but have adverse / undersirable side-effects or not work at all and return an error.

- Thus in short, if you call a regular method or function you don't need to use `new` but when you call a constructor method you should use `new` keyword.

- Below links, especially MDN explain it quite well.

Useful links:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
- https://stackoverflow.com/questions/383402/is-javascripts-new-keyword-considered-harmful
- https://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript
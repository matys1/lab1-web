## LESSON 9

- Four core CSS properties:
  - `margin` and `padding` - adding space around elements
  - `align` and `float` - placing elements in relationship to others

### Margin

- `margin` adds space outside the element. You can specify margin for each side individually using `margin-top/right/bottom/left` properties or by using the `margin` shorthand property.

- If you use the shorthand `margin` property, you can list the size for each margin like this `margin: 15px 15px 15px 15px;` (where the order of evaluation is clockwise: top, right, bottom, left).
  - If you specify just one value, for example `margin: 15px`, it applies the size to all four margins.
  - If you specify two values, the first value is for top and bottom and the second is for left and right margins.
  - If you specify three values, the first is for top, the second is for left and right and the third is for bottom.

- `margin` is calculated based on the containing element. You have to be especially mindful if you specify it in percentages.  
  > For example, if you set the `margin-left` property of an element within the body to 25%, the left margin of the element will end up being 25% of the width of the entire page. If you then set the `margin-left` property of an element within that element to 25% as well, it will be 25% of whatever that original 25% was calculated to be.

- The `<body>` element by default will have a margin (8px). This will cause elements to not be flush with the browser window even if you've specified no margin around those elements. To avoid this you have to specify the below in your style sheet.

```css
body {
  margin: 0px;
}
```

- If you have two bordered elements stacked on top (or along side) each other with no margin between them, there will be an appearance of a double border, which might not be desirable in many situations. To correct this, you have to make the borders of the sides of the elements that touch to be half the width so they appear to have the same width as all the other sides.

- If you have two elements stacked on top (or along side) each other with 30px `margin` all around them, then the gap between the elements will not be 60px but 30px as `margin` collapses automatically to the widest specified margin. This also means that if you specify the `margin` of the top element to be 40px and the `margin` of the bottom element to be 30px then the resulting gap will be 40px.

- The border, similar to `margin`, adds space outside the element. Which means that if you have an element that's 100px wide, and you have a 10px border all around it, the actual width of the element is 120px.
  - This means that, if you wanted the element below it to start where the first one ends, you would need to define a `margin-left: 120px` for the second element.
  - If the first element also has a 10px `margin` all around it, then you would need to define a `margin-left: 130px` for the second element for it to start where the first one ends.

### Padding

- `padding` adds space inside the element. Because the padding of an element appears within the element’s content area, it assumes the same style as the content of the element, including the background color.

- If you have an element with a width of 50px and height of 30px and you set `padding` all around it 5px then the content area will remain 50px wide and 30px high but the entire element will now take up 60px in width and 40px in height. If there are any borders defined, they will add to the total rendered width and height as well. In essence, `padding` stretches out the footprint of the element leaving the content area intact.

Notes: continue from "You specify the padding of a style rule by using one of the padding properties".  
Reading: continue from LESSON 10.
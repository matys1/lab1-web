window.onload = function() {
let elementsArray = document.querySelectorAll(".border");

  elementsArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
      
      text = new Array(3)
      
      text[0] = "<h2>Picture 1</h2><p>text1</p><p>text2</p>"
      text[1] = "<h2>Picture 2</h2><p>text1</p><p>text2</p>"
      text[2] = "<h2>Picture 3</h2><p>text1</p><p>text2</p>"
  
      b = elem.getAttribute("src")
      
      let a;
      if (b === "assets/1-gallery-mini.jpg") {
        a = 0;
      } else if (b === "assets/2-gallery-mini.jpg") {
        a = 1;
      } else {
        a = 2
      }

      getText = document.getElementById("text")
      getText.innerHTML = text[a];
    })
  })
}
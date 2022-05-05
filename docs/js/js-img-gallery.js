function getText() {
  text = new Array(3)

  getText = document.getElementById("text")

  text[0] = "test text 1"
  text[1] = "test text 2"
  text[2] = "test text 3"

  let result;
  if (document.images['large-image'].src='assets/1-gallery.jpg') {
    result = 0;
  } else if (document.images['large-image'].src='assets/2-gallery.jpg') {
    result = 1;
  } else {
    result = 2
  }
  
  a = result;

  getText.innerHTML = text[a];

}
getText()
//load function
window.onload = function() {
  //array of elements with class .border
  let elementsArray = document.querySelectorAll(".border");
  //add click event listener to each element in array
  elementsArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
      //define new array
      text = new Array(3)
      //different texts
      text[0] = "<h2>Picture 1</h2><p>Lorem ipsum dolor sit amet. Est voluptatibus doloribus et nisi dolorem aut voluptas libero aut molestiae excepturi. Non velit possimus vel delectus quisquam est tenetur corporis. Aut molestias suscipit et tempora autem eos animi saepe est autem nihil aut ipsam iure est earum omnis est cupiditate ipsum.</p><p>Ut dolor incidunt aperiam dolorum aut aliquam galisum ad sunt dolore qui commodi doloribus. Est animi dolorem et enim culpa et iure amet aut velit optio. Ea iste minima non voluptate corporis est laudantium autem ut officia ipsum libero alias qui alias dignissimos aut sunt necessitatibus. Ut porro rerum et dolorum optio a commodi itaque ut animi dolorem in sint consequatur!</p>"
      text[1] = "<h2>Picture 2</h2><p>Lorem ipsum dolor sit amet. Est sint obcaecati quo deleniti expedita et ratione quia est nemo soluta nam veniam nobis! Qui officiis necessitatibus ab molestiae temporibus ut quod odit et itaque voluptas. Eum nostrum quia sed ullam quia sed maiores placeat et earum veniam quo natus odit.</p><p>Et molestiae illum qui voluptate nisi et dolor debitis ab provident quia est dolorem dolorem et quidem eaque doloremque laboriosam. Nam dolores minima hic voluptate internos At fugit earum et dolor facere. Et obcaecati fuga qui iure laborum ut nisi cumque sit accusantium odit et sint sed repudiandae eveniet. Aut omnis explicabo id animi neque ab cupiditate consequatur in similique quia est modi sunt cum obcaecati odit et sint quia.</p>"
      text[2] = "<h2>Picture 3</h2><p>Lorem ipsum dolor sit amet. Qui quae quidem vel quos rerum non aliquam repudiandae aut nulla blanditiis. Sed delectus maiores et officiis eveniet ut illum praesentium aut nostrum ducimus qui temporibus earum.</p><p>Et quam enim est exercitationem dolorem ut adipisci consequatur est rerum esse non vitae atque aut aliquid ipsam. Non saepe illum ut ducimus enim qui sint sit dolores laudantium aut accusamus mollitia! Sit autem eius ab incidunt inventore fugiat doloremque eum voluptas deleniti. Nam dolore dolorum et nostrum molestias et officiis perspiciatis mollitia laborum ut harum dolore aut facilis voluptatem et mollitia quam?</p>"
      //return relative path of clicked element
      b = elem.getAttribute("src")
      //if...else logic comparing relative paths
      let a;
      if (b === "assets/1-gallery-mini.jpg") {
        a = 0;
      } else if (b === "assets/2-gallery-mini.jpg") {
        a = 1;
      } else {
        a = 2
      }
      //get the element you want to change
      getText = document.getElementById("text")
      //modify DOM
      getText.innerHTML = text[a];
    })
  })
}
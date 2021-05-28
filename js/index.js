const reply = (res) => {
  var res = document.getElementById(res);
  console.log(res);
  if (res.className == "replies") {
      res.className = "techie_blog";
  } else if (res.className == "techie_blog") {
      res.className = "replies";
  }
}
//  like button js 
const like = document.getElementById('like_btn')
const singleClick = () => {
  like.style.fontWeight = 'bold';
  like.style.background = '#bbe1fa';
  like.style.color = '#1b262c';
  like.innerHTML = "*Like";
}
const doubleClick = () => {
  like.style.fontWeight = 'normal';
  like.style.background = '#3282b8';
  like.style.color = '#fff';
  like.innerHTML = "Like";
}
var clickCount = 0;
like.addEventListener('click', function () {
  clickCount++;
  if (clickCount === 1) {
      singleClickTimer = setTimeout(function () {
          clickCount = 0;
          singleClick();

      }, 400);
  } else if (clickCount === 2) {
      clearTimeout(singleClickTimer);
      clickCount = 0;
      doubleClick();
  }
}, false);
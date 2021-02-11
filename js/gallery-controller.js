'use strict'

window.onload = function() {
  console.log('hi')
    createImage();
    renderImg();
  };

function renderImg() {
var imgs = getImg()
var strHtml=imgs.map(function(img) {
  return `
  <div class="grid-warp">
  <div class="picture" style="background-image: url(${img.url})"></div>
  </div>
  `
  
})
document.querySelector('.grid-container').innerHTML=strHtml.join('')
}
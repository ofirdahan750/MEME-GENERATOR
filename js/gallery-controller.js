'use strict'

window.onload = function () {
  createImage();
  renderImg();
  var test=1
  document.getElementById("upload-meme").addEventListener("click", openModal);
};
function renderImg() {
  var imgs = getImg()
  var strHtml = imgs.map(function (img) {
    return `
    <div class="grid-warp">
    <div class="picture" style="background-image: url(${img.url})" onclick="openCanvaModal(this)"></div>
    </div>
    `
  })
  document.querySelector('.grid-container').innerHTML = strHtml.join('')
}
function openModal() {
  var elModal = document.querySelector('.upload-modal')
  elModal.classList.toggle("hide")
  renderModal(elModal)
  
}

function renderModal(elModal){
  elModal.innerHTML = `
  <div class="upload-modal-warper flex space around">
  <h2 class="flex">Add New Meme:</h2>
  <form class="uploading flex space around" onsubmit="uploadNewMeme(event, this)">
  <label class="flex column align-center" for= "new meme-name"> Name:openCanvaModal
  <input type="text" name="new-meme-name" placeholder="Meme Name" >
  </label>
  <label class="flex column align-center" for= "new meme-tag"> tags:
  <input type="text" name="new-meme-tag" placeholder="Add tags">
  </label>
  <label  class="flex column"for= "new meme-upload"> upload:
  <input type="file" name="new-meme-file" >
  </label>
  <button>Save</button>
  </form> 
  <button onclick="openModal()">close</button>
  </div>
  `
  // renderImg()
}

function uploadNewMeme(ev, s) {
  console.log('s:', s)
  ev.preventDefault();
  var elTxtName = document.querySelector('input[name=new-meme-name]');
  var elTagName = document.querySelector('input[name=new-meme-tag]');
  var elPicName = document.querySelector('input[name=new-meme-file]')

  var obj = {id:createId(), url: `${elPicName.value}`, keywords: []}
  addImg(obj)
  renderImg()
  
}
function openCanvaModal(id) {
id
  console.log('id:', id)
  // document.querySelector('.body-warper').classList.add('hide');
  // document.querySelector('.canvas-container').classList.remove('hide');
  // renderCanvas(id)
}
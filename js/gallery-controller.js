'use strict'

window.onload = function () {
  createImage();
  renderImg();
  document.getElementById("upload-meme").addEventListener("click", openUploadModal);
  document.getElementById("gallery").addEventListener("click", gallery);
  document.getElementById("logo").addEventListener("click", gallery);
  
};
function renderImg() {
  var imgs = getImg()
  var strHtml = imgs.map(function (img) {
    return `
    <div class="grid-warp">
    <img class="picture" id="pic-${img.id}" src="${img.url}"  onclick="openMemeEditer('${img.id}','${img.url}')">
    </div>
    `
  })
  document.querySelector('.grid-container').innerHTML = strHtml.join('')
}
function gallery() {
  document.querySelector('.canvas-container').classList.add('hide')
  document.querySelector('.body-warper').classList.remove('hide')
}
function openUploadModal() {
  var elModal = document.querySelector('.upload-modal')
  elModal.classList.toggle("hide")
  renderUploadModal(elModal)
}

function renderUploadModal(elModal) {
  elModal.innerHTML = `
  <div class="upload-modal-warper flex space around">
  <h2 class="flex">Add New Meme:</h2>
  <form class="uploading flex space around" onsubmit="uploadNewMeme(event, this)">

  <label class="flex column" for= "new meme-tag"> tags:(Use the comma mark to separate each tag )
  <input type="text" name="new-meme-tag" placeholder="Add tags">
  </label>
  <label class="flex column" for= "new meme-url"> url source:
  <input type="url" name="new-meme-url" placeholder="https://example.com" pattern="https://.*" size="30" required>
  </label>
  <button>Save</button>
  </form> 
  <button onclick="openModal()">close</button>
  </div>
  `
}

function uploadNewMeme(ev, s) {
  ev.preventDefault();
  var elTagName = document.querySelector('input[name=new-meme-tag]');

  var elPicUrl = document.querySelector('input[name=new-meme-url]')

  var obj = { id: createId(), url: `${elPicUrl.value}`, keywords: [`${elTagName.value}`] }
  addImg(obj)
  openModal()
  renderImg()
}
function openMemeEditer(picId,picUrl) {
  document.querySelector('.body-warper').classList.add('hide');
  document.querySelector('.canvas-container').classList.remove('hide')
  updateCurrMemeId(picId)
  updateCurrMemeUrl(picUrl)
  renderCanvas()
}

function searchImg() {
  let currGrid = getFromStorage(IMG_KEY);
  elSearch = document.querySelector('input[name=search-term]');
  const fliterGrid = currGrid.filter((meme) => {
    return meme.keywords.find((keyword) => {
        return keyword.toLowerCase().startsWith(elSearch.value.toLowerCase())
    })
})
    gImgs = fliterGrid
    renderImg()
}

function toggleMenu() {
var elHeaderLink = document.querySelector('.header-link')
elHeaderLink.classList.toggle('hide')
}

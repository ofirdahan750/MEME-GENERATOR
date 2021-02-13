'use strict'

window.onload = function () {
  createImage();
  renderImg();
  document.getElementById("upload-meme").addEventListener("click", openModal);
  
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
function toggleMenu() {
  var elMoblieNav = document.querySelector('.moblie-nav')
  if(elMoblieNav.style.display == 'block')
  elMoblieNav.style.display = 'none';
else
elMoblieNav.style.display = 'block';
  
}
function openModal() {
  var elModal = document.querySelector('.upload-modal')
  elModal.classList.toggle("hide")
  renderModal(elModal)
}

function renderModal(elModal) {
  elModal.innerHTML = `
  <div class="upload-modal-warper flex space around">
  <h2 class="flex">Add New Meme:</h2>
  <form class="uploading flex space around" onsubmit="uploadNewMeme(event, this)">

  <label class="flex column align-center" for= "new meme-tag"> tags:
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
  //var elTxtName = document.querySelector('input[name=new-meme-name]');
  var elTagName = document.querySelector('input[name=new-meme-tag]');
  var elPicUrl = document.querySelector('input[name=new-meme-url]')

  var obj = { id: createId(), url: `${elPicUrl.value}`, keywords: [] }
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
  var elSearch = document.querySelector('input[name=search-term]');
  const fliterGrid = gImgs.filter((img) => {
    return img.keywords === ['tru']
  })
    console.log('fliterGrid:', fliterGrid)
}

function toggleMenu() {
var elHeaderLink = document.querySelector('.header-link')
elHeaderLink.classList.toggle('hide')
}

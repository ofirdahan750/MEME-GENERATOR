'use strict'

window.onload = function () {
  createImage();
  renderImg();
  document.getElementById("upload-meme").addEventListener("click", openUploadModal);
  document.getElementById("gallery").addEventListener("click", gallery);
  document.getElementById("logo").addEventListener("click", gallery);
  // document.querySelector('.header-link').addEventListener("onchange", test);

};

// function test() {
// if()
// }

function renderImg() {
  const imgs = getImg()
  const strHtml = imgs.map(img => 
    `
    <div class="grid-warp">
    <img class="picture" id="pic-${img.id}" src="${img.url}"  onclick="openMemeEditer('${img.id}','${img.url}')">
    </div>
    `
  )
  document.querySelector('.grid-container').innerHTML = strHtml.join('')
}
function gallery() {
  document.querySelector('.canvas-container').classList.add('hide')
  document.querySelector('.body-warper').classList.remove('hide')
}
function openUploadModal() {
  const elModal = document.querySelector('.upload-modal')
  elModal.classList.toggle("hide")
}

function uploadNewMeme(ev, s) {
  ev.preventDefault();
  const elTagName = document.querySelector('input[name=new-meme-tag]');

  const elPicUrl = document.querySelector('input[name=new-meme-url]')

  const obj = { id: createId(), url: `${elPicUrl.value}`, keywords: [`${elTagName.value}`] }
  addImg(obj)
  openUploadModal()
  renderImg()
}
function openMemeEditer(picId, picUrl) {
  document.querySelector('.body-warper').classList.add('hide');
  document.querySelector('.canvas-container').classList.remove('hide')
  updateCurrMemeId(picId)
  updateCurrMemeUrl(picUrl)
  renderCanvas()
}

function searchImg() {
  console.log('test')
  const currGrid = getFromStorage(IMG_KEY);
  // elSearch = document.querySelector('input[name=search-term]');
  fliterGrid = currGrid.filter(meme =>
    meme.keywords.find(keyword =>
      keyword.toLowerCase().includes(elSearch.value.toLowerCase())
    )
  )
  renderImg()
}
function addDataList() {
  const tags = getImg()
  const elDataList = document.getElementById('keywords')
  const makeNewArray = tags.map(tag => tag.keywords).join(',')
  const strHtml = makeNewArray.split(',').map(tag =>
    `
    <option value="${tag}">
    `).join('')
elDataList.innerHTML = strHtml
}

function toggleMenu() {
  const elHeaderLink = document.querySelector('.header-link')
  elHeaderLink.style.display = (elHeaderLink.style.display === 'none') ? 'flex' : 'none'
}

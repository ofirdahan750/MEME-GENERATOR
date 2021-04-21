'use strict'

window.onload = () => {
  onChangeWidth()
  createImage();
  renderImg();
  document.getElementById("upload-meme").addEventListener("click", openUploadModal);
  document.getElementById("gallery").addEventListener("click", onClickGallery);
  document.getElementById("logo").addEventListener("click", onClickGallery);
  document.getElementById("about-link").addEventListener("click", onClickGallery);

};
function onChangeWidth() {
    (window.innerWidth < 760) ? (elHeaderLink.classList.add('hide'),elBodyWarper.classList.remove('opacity')) : elHeaderLink.classList.remove('hide')
}
function renderImg() {
  const imgs = getImg()
  const strHtml = imgs.map(img =>
    `
    <div class="grid-warp">
    <img class="picture" id="pic-${img.id}" src="${img.url}"  onclick="openMemeEditer('${img.url}')">
    </div>
    `
  )
  document.querySelector('.grid-container').innerHTML = strHtml.join('')
  addDataList(imgs)
}
function onClickGallery() {
  elCanvasContainer.classList.add('hide')
  elModal.classList.add('hide')
  elBodyWarper.classList.remove('hide');
  elBodyWarper.classList.remove('opacity')
  (window.innerWidth < 760) ?  elHeaderLink.classList.add('hide') : elHeaderLink.classList.remove('hide') 
}
function openUploadModal() {
  elBodyWarper.classList.remove('opacity')
  elModal.classList.toggle("hide")
  if (window.innerWidth < 760) elHeaderLink.classList.add('hide')
}

function uploadNewMeme(ev) {
  ev.preventDefault();
  const obj = { id: makeId(), url: `${elPicUrl.value}`, keywords: [`${elTagName.value}`] }
  addImg(obj)
  openUploadModal()
  renderImg()
}


function onSearchImg(ev) {
  ev.preventDefault()
  const currGrid = getFromStorage(IMG_KEY);
  fliterGrid = searchImg(currGrid)
  setTimeout(() => {
    renderImg()
  }, 500);
}
function addDataList(img) {
  const tags = img
  const makeNewArray = tags.map(tag => tag.keywords).join(',')
  const strHtml = makeNewArray.split(',').map(tag =>
    `
    <option value="${tag}">
    `).join('')
  elDataList.innerHTML = strHtml
}

function toggleMenu() {
  elBodyWarper.classList.toggle('opacity')
  elHeaderLink.classList.toggle('hide')
}
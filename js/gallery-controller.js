'use strict'

window.onload = () => {
  createImage();
  renderImg();
  document.getElementById("upload-meme").addEventListener("click", openUploadModal);
  document.getElementById("gallery").addEventListener("click", onClickGallery);
  document.getElementById("logo").addEventListener("click", onClickGallery);
  document.getElementById("about-link").addEventListener("click", onClickGallery);
  window.addEventListener("resize", function() {
    (window.innerWidth < 760) ? elHeaderLink.classList.add("hide"): elHeaderLink.classList.remove("hide")
   });

};


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
  elHeaderLink.classList.remove('hide');
  elCanvasContainer.classList.add('hide')
  elModal.classList.add('hide')
  elBodyWarper.classList.remove('hide');
  (window.innerWidth < 760) ?  elHeaderLink.classList.add('hide') : elHeaderLink.classList.remove('hide') 
}
function openUploadModal() {
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
  elHeaderLink.classList.toggle('hide')
}
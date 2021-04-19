'use strict'

window.onload = function () {
  createImage();
  renderImg();
  document.getElementById("upload-meme").addEventListener("click", openUploadModal);
  document.getElementById("gallery").addEventListener("click", onClickGallery);
  document.getElementById("logo").addEventListener("click", onClickGallery);
  document.getElementById("about-link").addEventListener("click", onClickGallery);

};

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
  addDataList(imgs)
}
function onClickGallery() {
  document.querySelector('.canvas-container').classList.add('hide')
  document.querySelector('.upload-modal').classList.add('hide')
  document.querySelector('.body-warper').classList.remove('hide')
  if (window.innerWidth < 760) {
    elHeaderLink.style.display = 'none'
  }

}
function openUploadModal() {
  const elModal = document.querySelector('.upload-modal')
  elModal.classList.toggle("hide")
  if (window.innerWidth < 760) {
    elHeaderLink.style.display = 'none'
  }
}

function uploadNewMeme(ev) {
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
  const currGrid = getFromStorage(IMG_KEY);

  fliterGrid = currGrid.filter(meme =>
    meme.keywords.find(keyword =>
      keyword.toLowerCase().includes(elSearch.value.toLowerCase())
    )
  )
  renderImg()
}
function addDataList(img) {
  const tags = img
  const elDataList = document.getElementById('keywords')
  const makeNewArray = tags.map(tag => tag.keywords).join(',')
  const strHtml = makeNewArray.split(',').map(tag =>
    `
    <option value="${tag}">
    `).join('')
  elDataList.innerHTML = strHtml
}

function toggleMenu() {
  elHeaderLink.style.display = (elHeaderLink.style.display === 'flex') ? 'none' : 'flex'
}

// function clickAbout() {
//   if (window.innerWidth < 760) {
//     elHeaderLink.style.display = 'none'
//   }
// }
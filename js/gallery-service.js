'use strict'
const IMG_KEY = 'imgs';
let gImgs,fliterGrid,gIdx 



const elDataList = document.getElementById('keywords')
const elSearch = document.querySelector('input[name=search-term]')

const elHeaderLink = document.querySelector('.header-link')
const elCanvasContainer = document.querySelector('.canvas-container')
const elModal = document.querySelector('.upload-modal')
const elBodyWarper = document.querySelector('.body-warper')
const elTagName = document.querySelector('input[name=new-meme-tag]');
const elPicUrl = document.querySelector('input[name=new-meme-url]')


function createImage() {
    let imgs = getFromStorage(IMG_KEY);
    if (!imgs || !imgs.length) {
        gIdx = 1
        imgs = [
            { id: makeId(), url:createImgName(), keywords: ['Trump','Angry','Usa','U.S'] },
            { id: makeId(), url:createImgName(), keywords: ['Dogs','Togther','Friends','Cute'] },
            { id: makeId(), url:createImgName(), keywords: ['Baby','Dog','Sleep','Bed','Relax'] },
            { id: makeId(), url:createImgName(), keywords: ['Cat','Sleep','Keybroad'] },
            { id: makeId(), url:createImgName(), keywords: ['Baby','Goal','Sand','Sea'] },
            { id: makeId(), url:createImgName(), keywords: ['Alien,History'] },
            { id: makeId(), url: createImgName(), keywords: ['Suprise,Baby'] },
            { id: makeId(), url: createImgName(), keywords: ['Thinkin','Hat'] },
            { id: makeId(), url: createImgName(), keywords: ['Evil','Funny','Baby'] },
            { id: makeId(), url: createImgName(), keywords: ['Lol','Obama','laugh','USA','U.S'] },
            { id: makeId(), url: createImgName(), keywords: ['Kiss','Boxing'] },
            { id: makeId(), url: createImgName(), keywords: ['Haim','What would you do?','Channel 12'] },
            { id: makeId(), url: createImgName(), keywords: ['Party','Lerndo','Drink'] },
            { id: makeId(), url: createImgName(), keywords: ['Matrix','Actors','What if i told','Movie','Sunglasses','Actors'] },
            { id: makeId(), url: createImgName(), keywords: ['one thing not simple','man','Actors','MOVIE'] },
            { id: makeId(), url: createImgName(), keywords: ['Space','Patric'] },
            { id: makeId(), url: createImgName(), keywords: ['Putin','Russia','Suit'] },
            { id: makeId(), url: createImgName(), keywords: ['Toy Story','Buzz','Woddy'] }
        ]
    }
    gImgs = imgs;
    _saveImgToStorage();
}

function _saveImgToStorage() {
    saveToStorage(IMG_KEY, gImgs)
}


function getImg() {
    if (fliterGrid && elSearch.value.length) return fliterGrid
    return gImgs
}

function addImg(obj) {
    gImgs.unshift(obj)
    _saveImgToStorage();
}
function setMemeImage(id) {
    gMeme.selectedImgId = id;
}

function searchImg(currGrid) {
   let filtered   = currGrid.filter(meme =>
        meme.keywords.find(keyword =>
          keyword.toLowerCase().includes(elSearch.value.toLowerCase())
        )
      )
      return filtered;
}
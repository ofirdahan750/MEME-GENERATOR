'use strict'
const IMG_KEY = 'imgs';
let gImgs, fliterGrid, gIdx

let gKeywords = [
    ['Trump', 'Angry', 'Usa', 'U.S'],
    ['Dogs', 'Togther', 'Friends', 'Cute'],
    ['Baby', 'Dog', 'Sleep', 'Bed', 'Relax'],
    ['Cat', 'Sleep', 'Keybroad'],
    ['Baby', 'Goal', 'Sand', 'Sea'],
    ['Alien,History'],
    ['Suprise,Baby'],
    ['Thinkin', 'Hat'],
    ['Evil', 'Funny', 'Baby'],
    ['Lol', 'Obama', 'laugh', 'USA', 'U.S'],
    ['Kiss', 'Boxing'],
    ['Haim', 'What would you do?', 'Channel 12'],
    ['Party', 'Lerndo', 'Drink'],
    ['Matrix', 'Actors', 'What if i told', 'Movie', 'Sunglasses', 'Actors'],
    ['one thing not simple', 'man', 'Actors', 'MOVIE'],
    ['Space', 'Patric'],
    ['Putin', 'Russia', 'Suit'],
    ['Toy Story', 'Buzz', 'Woddy']
]


const elDataList = document.getElementById('keywords')
const elSearch = document.querySelector('input[name=search-term]')

const elHeaderLink = document.querySelector('.header-link')
const elCanvasContainer = document.querySelector('.canvas-container')
const elModal = document.querySelector('.upload-modal')
const elBodyWarper = document.querySelector('.body-warper')
const elTagName = document.querySelector('input[name=new-meme-tag]');
const elPicUrl = document.querySelector('input[name=new-meme-url]')


function createImage() {
    let imgs = getFromStorage(IMG_KEY)
    if (!imgs || !imgs.length) {
        imgs = gKeywords.map((keyword, idx) => ({ id: makeId(), url:createImgName(idx), keywords: keyword }))
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
    let filtered = currGrid.filter(meme =>
        meme.keywords.find(keyword =>
            keyword.toLowerCase().includes(elSearch.value.toLowerCase())
        )
    )
    return filtered;
}
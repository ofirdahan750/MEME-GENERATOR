'use strict'
const IMG_KEY = 'imgs';
let gImgs
let gIdx = 0
let gElCanvas = document.getElementById('my-canvas');
const elSearch = document.querySelector('input[name=search-term]')
const gCtx = gElCanvas.getContext('2d');
let fliterGrid

const elHeaderLink = document.querySelector('.header-link')

let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    url: null,
    lines: [
        {
            txt: 'place your text here',
            size: 48,
            pos: {
                x: 220,
                y: 50
            },
            align: 'center',
            color: 'white',
            font: 'IMPACT',

        },
    ],
}
function createImage() {
    let imgs = getFromStorage(IMG_KEY);
    if (!imgs || !imgs.length) {
        gIdx = 0
        imgs = [
            { id: createId(), url: 'meme-imgs/1.jpg', keywords: ['Trump','Angry','Usa','U.S'] },
            { id: createId(), url: 'meme-imgs/2.jpg', keywords: ['Dogs','Togther','Friends','Cute'] },
            { id: createId(), url: 'meme-imgs/3.jpg', keywords: ['Baby','Dog','Sleep','Bed','Relax'] },
            { id: createId(), url: 'meme-imgs/4.jpg', keywords: ['Cat','Sleep','Keybroad'] },
            { id: createId(), url: 'meme-imgs/5.jpg', keywords: ['Baby','Goal','Sand','Sea'] },
            { id: createId(), url: 'meme-imgs/6.jpg', keywords: ['Alien,History'] },
            { id: createId(), url: 'meme-imgs/7.jpg', keywords: ['Suprise,Baby'] },
            { id: createId(), url: 'meme-imgs/8.jpg', keywords: ['Thinkin','Hat'] },
            { id: createId(), url: 'meme-imgs/9.jpg', keywords: ['Evil','Funny','Baby'] },
            { id: createId(), url: 'meme-imgs/10.jpg', keywords: ['Lol','Obama','laugh','USA','U.S'] },
            { id: createId(), url: 'meme-imgs/11.jpg', keywords: ['Kiss','Boxing'] },
            { id: createId(), url: 'meme-imgs/12.jpg', keywords: ['Haim','What would you do?','Channel 12'] },
            { id: createId(), url: 'meme-imgs/13.jpg', keywords: ['Party','Lerndo','Drink'] },
            { id: createId(), url: 'meme-imgs/14.jpg', keywords: ['Matrix','Actors','What if i told','Movie','Sunglasses','Actors'] },
            { id: createId(), url: 'meme-imgs/15.jpg', keywords: ['one thing not simple','man','Actors','MOVIE'] },
            { id: createId(), url: 'meme-imgs/16.jpg', keywords: ['Space','Patric'] },
            { id: createId(), url: 'meme-imgs/17.jpg', keywords: ['Putin','Russia','Suit'] },
            { id: createId(), url: 'meme-imgs/18.jpg', keywords: ['Toy Story','Buzz','Woddy'] }
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
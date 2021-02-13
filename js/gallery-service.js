'use strict'
const IMG_KEY = 'imgs';
let gImgs
let gIdx = 0
let gElCanvas = document.getElementById('my-canvas');
const gCtx = gElCanvas.getContext('2d');
let fliterGrid
let elSearch


let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    url:null,
    lines: [
        {
            txt: 'place your text here',
            size: 50,
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
            { id: createId(), url: 'meme-imgs/1.jpg', keywords: ['trump,angry'] },
            { id: createId(), url: 'meme-imgs/2.jpg', keywords: ['dog, togther'] },
            { id: createId(), url: 'meme-imgs/3.jpg', keywords: ['baby,dog,sleep'] },
            { id: createId(), url: 'meme-imgs/4.jpg', keywords: ['cat,sleep'] },
            { id: createId(), url: 'meme-imgs/5.jpg', keywords: ['baby,goal,sand,sea'] },
            { id: createId(), url: 'meme-imgs/6.jpg', keywords: ['alien,history'] },
            { id: createId(), url: 'meme-imgs/7.jpg', keywords: ['suprise,baby'] },
            { id: createId(), url: 'meme-imgs/8.jpg', keywords: ['thinkin'] },
            { id: createId(), url: 'meme-imgs/9.jpg', keywords: ['evil,funny,baby'] },
            { id: createId(), url: 'meme-imgs/10.jpg', keywords: ['lol,obama'] },
            { id: createId(), url: 'meme-imgs/11.jpg', keywords: ['kiss,boxing'] },
            { id: createId(), url: 'meme-imgs/12.jpg', keywords: ['haim'] },
            { id: createId(), url: 'meme-imgs/13.jpg', keywords: ['party,lerndo,drink'] },
            { id: createId(), url: 'meme-imgs/14.jpg', keywords: ['matrix,what if i told '] },
            { id: createId(), url: 'meme-imgs/15.jpg', keywords: ['one thing not simple,man'] },
            { id: createId(), url: 'meme-imgs/16.jpg', keywords: ['space,patric'] },
            { id: createId(), url: 'meme-imgs/17.jpg', keywords: ['putin,russia'] },
            { id: createId(), url: 'meme-imgs/18.jpg', keywords: ['toy story, buzz,woddy'] }
        ]
    }
    gImgs = imgs;
    _saveImgToStorage();
}

function _saveImgToStorage() {
    saveToStorage(IMG_KEY, gImgs)
}

function getImg() {
    if(fliterGrid) {
    return fliterGrid
    }
    return gImgs
}

function addImg(obj) {
    gImgs.unshift(obj)
    _saveImgToStorage();
}
function setMemeImage(id) {
    gMeme.selectedImgId = id;
}
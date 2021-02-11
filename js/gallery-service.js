'use strict'
const IMG_KEY = 'imgs';
var gImg



function createImage() {
    var imgs = getFromStorage(IMG_KEY);
    if (!imgs || !imgs.length) {
        var imgs = [
            { id: 1, url: 'meme-imgs/1.jpg', keywords: ['happy,dance']},
            { id: 1, url: 'meme-imgs/2.jpg', keywords: ['happy,dance']},
            { id: 1, url: 'meme-imgs/3.jpg', keywords: ['happy,dance']},
            { id: 1, url: 'meme-imgs/4.jpg', keywords: ['happy,dance']},
            { id: 1, url: 'meme-imgs/5.jpg', keywords: ['happy,dance']},
            { id: 1, url: 'meme-imgs/6.jpg', keywords: ['happy,dance']},
            { id: 1, url: 'meme-imgs/7.jpg', keywords: ['happy,dance']},
            { id: 1, url: 'meme-imgs/8.jpg', keywords: ['happy,dance']},
            { id: 1, url: 'meme-imgs/9.jpg', keywords: ['happy,dance']},
            { id: 1, url: 'meme-imgs/10.jpg', keywords: ['happy,dance']},
            { id: 1, url: 'meme-imgs/11.jpg', keywords: ['happy,dance']},
            { id: 1, url: 'meme-imgs/12.jpg', keywords: ['happy,dance']},
            { id: 1, url: 'meme-imgs/13.jpg', keywords: ['happy,dance']},
            { id: 1, url: 'meme-imgs/14.jpg', keywords: ['happy,dance']},
            { id: 1, url: 'meme-imgs/15.jpg', keywords: ['happy,dance']},
            { id: 1, url: 'meme-imgs/16.jpg', keywords: ['happy,dance']},
            { id: 1, url: 'meme-imgs/17.jpg', keywords: ['happy,dance']},
            { id: 1, url: 'meme-imgs/18.jpg', keywords: ['happy,dance']},
            { id: 1, url: 'meme-imgs/19.jpg', keywords: ['happy,dance']}
        ]
    }
    gImg = imgs;
    _saveImgToStorage();
}

function _saveImgToStorage() {
    saveToStorage(IMG_KEY, gImg)
}

function getImg() {
    return gImg
} 
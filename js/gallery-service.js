'use strict'
const IMG_KEY = 'imgs';
var gImg
var gIdx



function createImage() {
    var imgs = getFromStorage(IMG_KEY);
    if (!imgs || !imgs.length) {
        gIdx = 0
        var imgs = [
            {id:createId(), url: 'meme-imgs/1.jpg', keywords: ['happy,dance']},
            {id:createId(), url: 'meme-imgs/2.jpg', keywords: ['trump,angry']},
            {id:createId(), url: 'meme-imgs/3.jpg', keywords: ['dog, togther']},
            {id:createId(), url: 'meme-imgs/4.jpg', keywords: ['baby,dog,sleep']},
            {id:createId(), url: 'meme-imgs/5.jpg', keywords: ['baby,goal,sand,sea']},
            {id:createId(), url: 'meme-imgs/6.jpg', keywords: ['cat,sleep']},
            {id:createId(), url: 'meme-imgs/7.jpg', keywords: ['thinkin']},
            {id:createId(), url: 'meme-imgs/8.jpg', keywords: ['evil,funny,baby']},
            {id:createId(), url: 'meme-imgs/9.jpg', keywords: ['haim']},
            {id:createId(), url: 'meme-imgs/10.jpg', keywords: ['wtf,angry']},
            {id:createId(), url: 'meme-imgs/11.jpg', keywords: ['alien,history']},
            {id:createId(), url: 'meme-imgs/12.jpg', keywords: ['dance,afirca,baby']},
            {id:createId(), url: 'meme-imgs/13.jpg', keywords: ['drevil,qutae']},
            {id:createId(), url: 'meme-imgs/14.jpg', keywords: ['suprise,baby']},
            {id:createId(), url: 'meme-imgs/15.jpg', keywords: ['dog,cute']},
            {id:createId(), url: 'meme-imgs/16.jpg', keywords: ['lol,obama']},
            {id:createId(), url: 'meme-imgs/17.jpg', keywords: ['kiss,boxing']},
            {id:createId(), url: 'meme-imgs/18.jpg', keywords: ['party,lerndo,drink']},
            {id:createId(), url: 'meme-imgs/19.jpg', keywords: ['matrix,sunglasss']},
            {id:createId(), url: 'meme-imgs/20.jpg', keywords: ['one thing not simple,man']},
            {id:createId(), url: 'meme-imgs/21.jpg', keywords: ['opara']},
            {id:createId(), url: 'meme-imgs/22.jpg', keywords: ['space,patric']},
            {id:createId(), url: 'meme-imgs/23.jpg', keywords: ['matrix,what if i told you']},
            {id:createId(), url: 'meme-imgs/24.jpg', keywords: ['toy story, buzz,woddy']}
        
        ]
    }
    console.log(gIdx)
    gImg = imgs;
    _saveImgToStorage();
}

function _saveImgToStorage() {
    saveToStorage(IMG_KEY, gImg)
}

function getImg() {
    return gImg
} 
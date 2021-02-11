'use strict'
var gElCanvas;
var gCtx;

function getMemeUrl() {
    const idx = getImgIdxById();
    return gImgs[idx].url;
}

function getImgIdxById() {
    return gImgs.findIndex((img) => gMeme.selectedImgId === img.id);
}
'use strict'

function renderCanvas() {
    const meme = new Image();
    meme.src = getImgSrc();
    gCurrRatio = calculateImgRatio(img);
    meme.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        addMemesText();
        setTimeout(showFocusBorder, 5);
    };
}


function calculateImgRatio(img) {
    return img.height / img.width;
}
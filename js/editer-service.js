'use strict'


function updateCurrMeme(picId) {
    gMeme.selectedImgId = picId;
}

function renderCanvas() {
    drawImg(gMeme.selectedImgId)
   
}

function drawImg(imageId) {
    gMeme.selectedImgId = imageId
    const img = new Image()
    img.src = `meme-imgs/${gMeme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)  
        renderText()
    }
}

function renderText() {
    let currLineIdx = gMeme.selectedLineIdx;
    gMeme.lines.forEach((lines, idx) => {
        gMeme.selectedLineIdx = idx;
        if (idx === currLineIdx) {
            drawText('selected')
        } else drawText()
    })
    gMeme.selectedLineIdx = currLineIdx
}

function drawText(selected = 0) {
    var text = gMeme.lines[gMeme.selectedLineIdx].txt;
    var x = gMeme.lines[gMeme.selectedLineIdx].pos.x;
    var y = gMeme.lines[gMeme.selectedLineIdx].pos.y;
    var fontSize = gMeme.lines[gMeme.selectedLineIdx].size
    var font = gMeme.lines[gMeme.selectedLineIdx].font
    var color = gMeme.lines[gMeme.selectedLineIdx].color
    gCtx.beginPath()
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'orange'
    gCtx.fillStyle = color
    gCtx.font = `${fontSize}px ${font}`
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    gCtx.strokeStyle = selected ? 'orange' : 'white'
    var lineHeight = fontSize * 1.25
    var textWidth = gCtx.measureText(text).width;
    gCtx.strokeRect(x - textWidth / 2 - 10, y - lineHeight + 10, textWidth + 20, lineHeight);
}
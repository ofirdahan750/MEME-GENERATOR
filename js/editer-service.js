'use strict'


function updateCurrMemeId(picId) {
    gMeme.selectedImgId = picId;
}
function updateCurrMemeUrl(picUrl) {
    gMeme.url = picUrl;
}

function renderCanvas() {
    drawImg(gMeme.url)
   
}

function drawImg(imageId) {
    //gMeme.selectedImgId = imageId
    const img = new Image()
    img.src = `${imageId}`;
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
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = color
    gCtx.font = `${fontSize}px ${font}`
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)

}

function updateText(elThis) {
    if (!gMeme.lines.length) return false
    gCurrLine = elThis.value
    gMeme.lines[gMeme.selectedLineIdx].txt = gCurrLine
    renderCanvas()
}

function addNewLine() {
    if (!gCurrLine) return
    let line = {
        pos: {
            x: 220,
            y: getNewLineY()
        },
        txt: getText(),
        size: 50,
        align: 'center',
        color: 'white',
        font: 'IMPACT',
    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    renderText()
}

function getNewLineY() {
    if (lineY >= gElCanvas.width) return lineY=50
    else {
   return lineY+=50
    }
}

function deleteLine() {
    if (gMeme.lines.length === 0) return
    gMeme.lines.splice([gMeme.selectedLineIdx], 1)
    gMeme.selectedLineIdx = 0
    renderCanvas()
}

function getText() {
    return gCurrLine
}
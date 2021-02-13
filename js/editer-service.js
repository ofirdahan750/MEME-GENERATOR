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

function drawImg(imgUrl) {
    const img = new Image()
    img.src = `${imgUrl}`;
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
    const text = gMeme.lines[gMeme.selectedLineIdx].txt;
    const x = gMeme.lines[gMeme.selectedLineIdx].pos.x;
    const y = gMeme.lines[gMeme.selectedLineIdx].pos.y;
    const fontSize = gMeme.lines[gMeme.selectedLineIdx].size
    const font = gMeme.lines[gMeme.selectedLineIdx].font
    const color = gMeme.lines[gMeme.selectedLineIdx].color
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
    if (!gMeme.lines.length) return
    gCurrLine = elThis.value
    gMeme.lines[gMeme.selectedLineIdx].txt = gCurrLine
    renderCanvas()
}

function addNewLine() {
    if (!gCurrLine) return
    const line = {
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
    renderCanvas()
}

function getNewLineY() {
    console.log(gMeme.lines.length)
    if (lineY >= gElCanvas.width || gMeme.lines.length === 0) return lineY=50
    else {
   return lineY+=50
    }
}

function deleteLine() {
    if (gMeme.lines.length === 0) return
    gMeme.lines.splice(-1, 1)
    gMeme.selectedLineIdx -=1
    if(lineY > 50) {
        lineY-=50
    }
    renderCanvas()
}
function moveLineUp() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y-=5
    renderCanvas()
}
function moveLineDown() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y+=5
    renderCanvas()
}
function moveLineLeft() {
    gMeme.lines[gMeme.selectedLineIdx].pos.x-=5
    renderCanvas()
}
function moveLineRight() {
    gMeme.lines[gMeme.selectedLineIdx].pos.x+=5
    renderCanvas()
}

function getText() {
    return gCurrLine
}
function changeColor(el) {
    gMeme.lines[gMeme.selectedLineIdx].color=el.value
    renderCanvas()
}
function changeFont(el) {
    gMeme.lines[gMeme.selectedLineIdx].font=el.value
    renderCanvas()
}
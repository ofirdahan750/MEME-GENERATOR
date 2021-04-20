'use strict'
let gMeme
var gCurrLine
var lineY=50

const gElCanvas = document.getElementById('my-canvas');
const gCtx = gElCanvas.getContext('2d');

const elInputtext = document.querySelector('input[name=meme-text]')
const elTextColorBtn = document.querySelector('input[name=text-color]')
const elTextAlignBtn = document.querySelector('select[name=text-align]')
const elTextSizeBtn = document.querySelector('select[name=text-size]')
const elTextFontBtn = document.querySelector('select[name=text-font]')

function updateCurrMemeId(picId) {
    gMeme.selectedImgId = picId;
}
function updateCurrMemeUrl(picUrl) {
    gMeme.url = picUrl;
}






function drawText(selected = 0) {
    const text = gMeme.lines[gMeme.selectedLineIdx].txt;
    const x = gMeme.lines[gMeme.selectedLineIdx].pos.x;
    const y = gMeme.lines[gMeme.selectedLineIdx].pos.y;
    const fontSize = gMeme.lines[gMeme.selectedLineIdx].size
    const font = gMeme.lines[gMeme.selectedLineIdx].font
    const color = gMeme.lines[gMeme.selectedLineIdx].color
    const textAlign = gMeme.lines[gMeme.selectedLineIdx].align
    gCtx.beginPath()
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = color
    gCtx.font = `${fontSize}px ${font}`
    gCtx.textAlign = textAlign
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
    if (!elInputtext.value) return
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
    elInputtext.value = '';
    renderCanvas()
}

function getNewLineY() {
    if (lineY >= gElCanvas.width || gMeme.lines.length === 0) return lineY = 50
    else {
        return lineY += 50
    }
}

function deleteLine() {
    if (gMeme.lines.length === 0) return
    gMeme.lines.splice(-1, 1)
    gMeme.selectedLineIdx -= 1
    if (lineY > 50) {
        lineY -= 50
    }
    renderCanvas()
}
function moveLineUp() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y -= 15
    renderCanvas()
}
function moveLineDown() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y += 15
    renderCanvas()
}
function moveLineLeft() {
    gMeme.lines[gMeme.selectedLineIdx].pos.x -= 15
    renderCanvas()
}
function moveLineRight() {
    gMeme.lines[gMeme.selectedLineIdx].pos.x += 15
    renderCanvas()
}

function getText() {
    return gCurrLine
}
function changeColor(el) {
    gMeme.lines[gMeme.selectedLineIdx].color = el.value
    renderCanvas()
}
function changeFontSize(el) {
    gMeme.lines[gMeme.selectedLineIdx].font = el.value
    renderCanvas()
}
function changeFontType(el) {
    gMeme.lines[gMeme.selectedLineIdx].size = el.value
    renderCanvas()
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'My Meme'
}

function changeAlignText(el) {
    gMeme.lines.forEach(meme => {
        meme.align = el.value
    });
    renderCanvas()
}

function resetCanvas() {
    gMeme = {
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
                color: '#edecf0',
                font: 'IMPACT',

            },
        ],

    }
    const firstLineMeme = gMeme.lines[0]
    gCurrLine = firstLineMeme.txt
    elTextAlignBtn.value = firstLineMeme.align
    elTextColorBtn.value = firstLineMeme.color
    elInputtext.value = firstLineMeme.txt
    elTextSizeBtn.value = firstLineMeme.size
    elTextFontBtn.value = firstLineMeme.font
   
}
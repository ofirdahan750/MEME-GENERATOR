'use strict'
let gMeme
var gCurrLine
var lineY = 50
let currLine
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







function drawText(selected = 0) {
    updateCurrLineVal()
    const text = currLine.txt;
    const x = currLine.pos.x;
    const y = currLine.pos.y;
    const fontSize = currLine.size
    const font = currLine.font
    const color = currLine.color
    const textAlign = currLine.align
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
    updateCurrLineVal()
    gCurrLine = elThis.value
    currLine.txt = gCurrLine
    renderCanvas()
}

function addNewLine() {
    if (!elInputtext.value) return
    const line = {
        pos: {
            x: 220,
            y: getNewLineY()
        },
        txt: 'place your text here',
        size: elTextSizeBtn.value,
        align: elTextAlignBtn.value,
        color: elTextColorBtn.value,
        font: elTextFontBtn.value,
    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    fitInputValueToCurrLine()
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
    if (gMeme.lines.length === 1) return
    gMeme.lines.splice(-1, 1)
    gMeme.selectedLineIdx--
    if (lineY > 50) {
        lineY -= 50
    }
    fitInputValueToCurrLine()
    renderCanvas()
}
function moveLine(axis, val) {
    (axis === 'x') ? currLine.pos.x += val : currLine.pos.y += val
    renderCanvas()
}

function getText() {
    return gCurrLine
}
function changeColor(el) {
    currLine.color = el.value
    renderCanvas()
}
function changeFontSize(el) {
    currLine.font = el.value
    renderCanvas()
}
function changeFontType(el) {
    currLine.size = el.value
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

function resetCanvas(urlImg) {
    gMeme = {
        selectedImgId: 5,
        selectedLineIdx: 0,
        url: urlImg,
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
    fitInputValueToCurrLine()
}

function fitInputValueToCurrLine() {
    updateCurrLineVal()
    // gCurrLine = currLine.txt
    elTextAlignBtn.value = currLine.align
    elTextColorBtn.value = currLine.color
    elInputtext.value = currLine.txt
    elTextSizeBtn.value = currLine.size
    elTextFontBtn.value = currLine.font
}

function updateCurrLineVal() {
    currLine = gMeme.lines[gMeme.selectedLineIdx]
}
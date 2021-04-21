'use strict'
let gMeme,gCurrLine,currLine
const gElCanvas = document.getElementById('my-canvas');
const gCtx = gElCanvas.getContext('2d');

let lineY = 50



const elInputtext = document.querySelector('input[name=meme-text]')
const elTextColorBtn = document.querySelector('input[name=text-color]')
const elTextAlignBtn = document.querySelector('select[name=text-align]')
const elTextSizeBtn = document.querySelector('select[name=text-size]')
const elTextFontBtn = document.querySelector('select[name=text-font]')







function drawText() {
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

function addLine() {
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
}

function getNewLineY() {
    if (lineY >= gElCanvas.width || gMeme.lines.length === 0) return lineY = 50
    else {
        return lineY += 50
    }
}


function deleteLine() {
    gMeme.lines.splice(-1, 1)
    gMeme.selectedLineIdx--
    if (lineY > 50) {
        lineY -= 50
    }
}
function onMoveLine(axis, val) {
    (axis === 'x') ? currLine.pos.x += val : currLine.pos.y += val
    renderCanvas()
}




function changeFontSetting(el,settingType){
    currLine[settingType]= el.value
}
function resetCanvas(urlImg) {
    lineY = 50
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
    changeInputValCurrLine()
}

function changeInputValCurrLine() {
    updateCurrLineVal()
    elTextAlignBtn.value = currLine.align
    elTextColorBtn.value = currLine.color
    elInputtext.value = currLine.txt
    elTextSizeBtn.value = currLine.size
    elTextFontBtn.value = currLine.font
}

function updateCurrLineVal() {
    currLine = gMeme.lines[gMeme.selectedLineIdx]
}
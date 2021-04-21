'use strict'

function openMemeEditer(picUrl) {
    elModal.classList.add('hide');
    elBodyWarper.classList.add('hide');
    elCanvasContainer.classList.remove('hide')
    resetCanvas(picUrl)
    renderCanvas()
}

function onAddLine() {
    if (!elInputtext.value) return
    addLine()
    changeInputValCurrLine()
    elInputtext.value = '';
    renderCanvas()
}
function renderCanvas() {
    drawImg()
}
function onChangeFontSetting(el, settingType) {
    updateCurrLineVal()
    changeFontSetting(el, settingType)
    renderCanvas()
}
function onDeleteLine() {
    if (gMeme.lines.length === 1) return
    deleteLine()
    changeInputValCurrLine()
    renderCanvas()
}

function drawImg() {
    const img = new Image()
    img.src = `${gMeme.url}`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        renderText()
    }
}

function renderText() {

    gMeme.lines.forEach((line, idx) => {
        gMeme.selectedLineIdx = idx;
        drawText()
    })
}
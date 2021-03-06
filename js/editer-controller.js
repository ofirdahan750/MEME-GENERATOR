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
    renderText()
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
function onDownloadImg(elLink) {
    var imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}
function onSwitchLine() {
    if (gMeme.selectedLineIdx === 0) (gMeme.selectedLineIdx = gMeme.lines.length)
    switchLine()
    changeInputValCurrLine()
    updateCurrLineVal()
}



function drawImg() {
    const img = new Image()
    img.src = `${gMeme.url}`;
    img.onload = () => {
        gElCanvas.width = img.width
        gElCanvas.height = img.height
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        renderText()
    }
}

function renderText() {
    gMeme.lines.forEach(line => drawText(line))
}
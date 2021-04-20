'use strict'

function openMemeEditer(picUrl) {
    elBodyWarper.classList.add('hide');
    elCanvasContainer.classList.remove('hide')
    resetCanvas()
    updateCurrMemeUrl(picUrl)
    renderCanvas()
  }

  function renderCanvas() {
    drawImg()
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
    let currLineIdx = gMeme.selectedLineIdx;
    gMeme.lines.forEach((lines, idx) => {
        gMeme.selectedLineIdx = idx;
        if (idx === currLineIdx) {
            drawText('selected')
        } else drawText()
    })
    gMeme.selectedLineIdx = currLineIdx
}
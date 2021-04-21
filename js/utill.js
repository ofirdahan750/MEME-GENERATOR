function makeId(length = 5) {
     let txt = '';
     const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     for (let i = 0; i < length; i++) {
         txt += possible.charAt(Math.floor(Math.random() * possible.length));
     }
     return txt;
 }

function createImgName(idx) {
     return `meme-imgs/${idx+1}.jpg`
}
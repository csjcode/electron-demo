const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// initialize window
let win;

// Load index.html
function createWindow() {
  win = new BrowserWindow({width:800, height:600, icon: __dirname + '/img/fp-icon.png'});

  win.loadURL(url.format({
    pathname: path.join(__dirname,'index.html'),
    protocol: 'file',
    slashes: true
  }));

  // Open devtools
  win.webContents.openDevTools();

  win.on('closed',() => {
    win = null;
  })

}

// When app is on load createWindow
app.on('ready',createWindow);


// Quit
app.on('window-all-closed',()=>{
  if (process.platform !== 'darwin'){
    app.quit();
  }
});

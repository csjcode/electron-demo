# Electronic demo app

also see: https://electron.atom.io/community/#boilerplates


* `npm init`

* `npm install --save electron`

* in package.json:

```javascript
"scripts": {
  "start": "eelectron ."
},
```

* Create main.js and index.html

* In main.js:

```javascript
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

```

*  `let win` is to initialize the OS window

* add to create a new window:

```javascript
function createWindow() {
  win = new BrowserWindow({width:800, height:600, icon: })
}
```

* create img folder

*  `win = new BrowserWindow({width:800, height:600, icon: __dirname + '/img/fp-icon.png'})`

* Next we want to load the index.html page

```javascript
win.loadURL(url.format({
  pathname: path.join(__dirname,'index.html'),
  protocol: 'file',
  slashes: true
}));
```

* We can add this to open dev tools automatically: `win.webContents.openDevTools();`

* Next, when the window closes:

```javascript
win.on('closed',() => {
  win = null;
})
```

* Lastly, when the app is on we are goign to load create window: `app.on('ready',createWindow);`

* And FINALLY, this will make sure if not Mac users, app will completely quit:

```javascript
// Quit
app.on('window-all-closed',()=>{
  if (process.platform !== 'darwin'){
    app.quit();
  }
});
```

* Next setup index.html

* Add to the bottom of index.html:

```html
<script>
  require('./renderer.js');
</script>
</body>
```

* Create the file renderer.js









###

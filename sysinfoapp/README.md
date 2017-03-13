# Electronic demo app

also see: https://electron.atom.io/community/#boilerplates

and: https://www.youtube.com/watch?v=mr9Mtm_TRpw

* `npm init`

* `npm install --save electron`

* in package.json:

```javascript
"scripts": {
  "start": "electron ."
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


### Add process info

In index.html:

```html
<script>
  console.log(process);
</script>
```

Now update fully for output:

```javascript
let output = `
  <h3 class="page-header">Software Versions</h3>
    <ul class="list-group">
      <li class="list-group-item">Node: ${process.versions.node}</li>
      <li class="list-group-item">Chrome: ${process.versions.chrome}</li>
      <li class="list-group-item">Electron: ${process.versions.electron}</li>
    </ul>

  <h3 class="page-header">System Specifications</h3>
    <ul class="list-group">
      <li class="list-group-item">System Architecture: ${process.arch}</li>
      <li class="list-group-item">Processor: ${process.env.PROCESSOR_IDENTIFIER}</li>
      <li class="list-group-item">Printer: ${process.env.PRINTER}</li>
    </ul>
`;

document.getElementById("output").innerHTML = output;
```

* We can also get System memory:

```javascript
<h3 class="page-header">System Memory</h3>
  <ul class="list-group">
    <li class="list-group-item">Total: ${process.getSystemMemoryInfo().total}</li>
    <li class="list-group-item">Free: ${process.getSystemMemoryInfo().free}</li>
    <li class="list-group-item">Swap Total: ${process.getSystemMemoryInfo().swapTotal}</li>
    <li class="list-group-item">Swap Free: ${process.getSystemMemoryInfo().swapFree}</li>
  </ul>
```






###

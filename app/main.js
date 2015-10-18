'use strict';

require('babel/register');

// controls application file
let app           = require('app');
// control main window
let BrowserWindow = require('browser-window');
let mainWindow    = null;

// quite when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This is called when Electron is ready to create windows
app.on('ready', () => {
  // create the main window
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  // load main file
  mainWindow.loadUrl(`file://${__dirname}/index.html`);
  // open dev tools
  mainWindow.openDevTools();
  // when the window is closed
  mainWindow.on('close', () => {
    // clean the window object for garbage collector
    mainWindow = null;
  });
});

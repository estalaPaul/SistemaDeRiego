const { app, ipcMain } = require('electron')
const Window = require('./script/Window')
const Arduino = require('./script/Arduino')

function main() {
  let mainWindow = new Window({ file: 'index.html' })

  arduinoSetUp();
}

function arduinoSetUp() {
  let arduino = new Arduino('/dev/ttyACM0', 9600);

  arduinoListener = arduino.getListener();
  arduinoListener.on('data', (data) => {
    console.log(data);
  });
}

app.on('ready', main)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
import { app, Menu, BrowserWindow, Tray } from "electron";
import * as path from "path";
import * as url from "url";

let win: BrowserWindow;
    
app.on('ready', () => {
    createWindow()
})

app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
});

function createWindow() {
  

    win = new BrowserWindow({       
        height: 500,
        width: 500,
    });

    // win.setMenu(null)    

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, `/../../dist/angular7-electron/index.html`),
            protocol: "file:",
            slashes: true
        })
    );

    win.webContents.openDevTools();

    win.on("closed", () => {
        win = null;
    });
}
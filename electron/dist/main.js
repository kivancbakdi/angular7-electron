"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var win;
electron_1.app.on('ready', function () {
    createWindow();
});
electron_1.app.on("activate", function () {
    if (win === null) {
        createWindow();
    }
});
function createWindow() {
    win = new electron_1.BrowserWindow({
        height: 500,
        width: 500,
    });
    // win.setMenu(null)    
    win.loadURL(url.format({
        pathname: path.join(__dirname, "/../../dist/angular7-electron/index.html"),
        protocol: "file:",
        slashes: true
    }));
    win.webContents.openDevTools();
    win.on("closed", function () {
        win = null;
    });
}
//# sourceMappingURL=main.js.map
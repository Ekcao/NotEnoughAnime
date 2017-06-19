import { BrowserWindow } from 'electron';
import * as path from 'path';

export default class AppWindow {
    private browserWindow: Electron.BrowserWindow;
    private minWidth = 1600;
    private minHeight = 900;

    public constructor() {
        const windowOptions: Electron.BrowserWindowConstructorOptions = {
            width: this.minWidth,
            height: this.minHeight,
            minWidth: this.minWidth,
            minHeight: this.minHeight,
            webPreferences: {
                experimentalFeatures: true,
                webSecurity: false
            }
        }

        this.browserWindow = new BrowserWindow(windowOptions);
    }

    public load() {
        this.browserWindow.loadURL(
            !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
                ? 'http://localhost:3000'
                : `file://${path.join(__dirname, '/build/index.html')}`
        );
    }

    public onClose(fn: () => void) {
        this.browserWindow.on('closed', fn);
    }
}
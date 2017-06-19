import { app } from 'electron';
import AppWindow from './app-window';

let mainWindow: AppWindow | null;

function createWindow() {
    const window = new AppWindow();

    window.onClose(() => {
        mainWindow = null;
        if (process.platform !== 'darwin') { app.quit(); }
    });

    window.load();
    mainWindow = window;
}

app.on('ready', createWindow);
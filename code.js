function hexToRGB(hex) {
    const r = (parseInt(hex.slice(1, 3), 16) / 255);
    const g = (parseInt(hex.slice(3, 5), 16) / 255);
    const b = (parseInt(hex.slice(5, 7), 16) / 255);
    const result = {
        r: r,
        g: g,
        b: b
    };
    return result;
}
function createFigmaStyle(color) {
    const style = figma.createPaintStyle();
    style.name = color.name;
    // style.description = color.description;
    style.description = 'Hex: ' + color.hex + '\nContrast: ' + color.ratio;
    const colorRGB = hexToRGB(color.color);
    // style.type = "PAINT"
    const paint = {
        type: "SOLID",
        color: colorRGB
    };
    style.paints = [paint];
}
function makePalette(swatch) {
    let swatchPalette = [];
    swatch.colors.forEach(color => {
        swatchPalette.push(color);
    });
    swatchPalette.forEach(color => createFigmaStyle(color));
}
function clearPalette() {
    let documentPalette = figma.getLocalPaintStyles();
    documentPalette.forEach(style => {
        style.remove();
    });
}
figma.showUI(__html__);
// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.ui.onmessage = (message) => {
    if (message.type == 'add') {
        let colorPalette = JSON.parse(message.message);
        colorPalette.forEach(swatch => makePalette(swatch));
    }
    else if (message.type == 'clear') {
        clearPalette();
    }
    else if (message.type == 'cancel') {
        figma.closePlugin();
    }
};

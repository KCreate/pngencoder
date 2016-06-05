const savePixels            = require('save-pixels');
const textToRGBData         = require('../lib/textToRGBData.js');
const imageBufferToText     = require('../lib/imageBufferToText.js');

module.exports = {


    /**
     * Returns a pipe with the image buffer
     *
     * @param  {string} text - The message to encode into the png
     * @return {pipe} Image buffer
     */
    textToImageBuffer(text, callback) {
        return savePixels(textToRGBData(text), "png")
    },


    /**
     * Returns the text encoded in a png buffer
     *
     * @param {buffer} buffer - PNG buffer
     * @param {function} callback - Receives text
     */
    imageBufferToText(buffer, callback) {
        imageBufferToText(buffer, 'image/png', (pixels) => {
            let text = String.fromCharCode.apply(null, pixels.data);

            // Strip all null bytes
            while (text.indexOf('\0') != -1) {
                text = text.replace('\0', '');
            }

            callback(text);
        });
    }
};

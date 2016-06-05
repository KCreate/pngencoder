const {
    textToImageBuffer,
    imageBufferToText
} = require('../lib/index.js');
const streamToBuffer = require('stream-to-buffer');

const message = 'Hello World. This is a test!';
const imageStream = textToImageBuffer(message);

streamToBuffer(imageStream, (err, buffer) => {
    if (err) throw err;

    imageBufferToText(buffer, (text) => {
        console.log(text.length, message.length);
        if (text === message) {
            console.log('[ OK ] Test passed!');
        } else {
            console.log('[ FAIL ] Test failed!');
        }
    });
});

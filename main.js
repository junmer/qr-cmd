var qrcode = require('./lib/qrcode.js');

function printQr (str) {
    var qr = qrcode.qrcode(4, 'M');
    qr.addData(str); 
    qr.make();
    console.log( qr.createTextTag(5, 2) );
}

exports.qrcode = qrcode;
exports.print = printQr;

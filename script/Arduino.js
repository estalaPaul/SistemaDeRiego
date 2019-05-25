/* 
    If you get a NODE_MODULE_VERSION error, run ./node_modules/.bin/electron-rebuild 
    from inside the project directory. 
*/
const SerialPort = require('serialport')
const ReadLine = require('@serialport/parser-readline')
const readLine = new ReadLine()

class Arduino extends SerialPort {
    constructor (port, serialRate) {
        super(port, serialRate);
        console.log("Connected");
    }
    
    getListener() {
        const parser = this.pipe(readLine);
        return parser;
    }
}

module.exports = Arduino;

const path = require('path')
const fs = require('fs')
const env = require('./parseEnv.js')
const ini = require('./parseIni.js')

const args = process.argv.slice(2);

if(args.length !== 1)
{
    console.log("Usage node main.js <CONFIG_FILENAME>");
    process.exit(0)
}

const filename = args[0]

if(path.extname(filename) == '.ini')
{
    if (!fs.existsSync(filename)) {
        console.log('The file : ' + filename + ' does not exists.');
        process.exit(-1)
      }
    console.log('ini');
    
}
else if(path.extname(filename) == '.env')
{
    if (!fs.existsSync(filename)) {
        console.log('The file : ' + filename + ' does not exists.');
        process.exit(-1)
      }
    console.log('env');
}
else
{
    console.log('The extension : ' + filename + ' is not .ini or .env.');
    process.exit(-1)
}


const content = fs.readFileSync(filename, "utf-8")

console.log(content);


//ლ(ಠ益ಠ)ლ
const path = require('path')
const fs = require('fs')
const env = require('./parseEnv.js')
const ini = require('./parseIni.js')

const args = process.argv.slice(2);
let annee = new Date().getFullYear()
let day = new Date().getDay()
let month = new Date().getMonth()
let hours = new Date().getHours()
let minutes = new Date().getMinutes()
let seconds = new Date().getSeconds()

let uneDate = annee+'-'+month+'-'+day+'-'+hours+'-'+'-'+minutes+'-'+seconds



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
    const content = fs.readFileSync(filename, "utf-8")
    fs.writeFile('env.'+uneDate+'.json', env(content), 'utf8', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}
else
{
    console.log('The extension : ' + filename + ' is not .ini or .env.');
    process.exit(-1)
}





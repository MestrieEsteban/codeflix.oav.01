//ʕ •ᴥ•ʔ
module.exports = function parseIni(content) {
    let lines = content.split('\n')
    output = {}
    out = {}
    d = []

    let i = 0;

    for (line of lines) {
        i = [];


        if (line.match(/^\[/)) {

            let key = line.split('[')
            output[key[1].replace(']\r', '')] = i

        }

        if (!line.match(/^;/)) {
            let key1 = line.split('=')
            out[key1[0]] = key1[1]
            i.push(out)
        }
        i++
    }

    return JSON.stringify(output, null, '\t')

}
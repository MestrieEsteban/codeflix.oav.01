//ʕ •ᴥ•ʔ
module.exports = function parseIni(content) {
    let lines = content.split('\n')
    output = {}
    let i = 0

    for (line of lines) {
        i = []
        if (line.match(/^\[/)) {

            let key = line.split('[')
            output[key[1].replace(']\r', '')] = i

        }
        if (!line.match(/^;/)) {
            let key1 = line.split('=')
            i.push(output[key1[0]] = key1[1])
            
        }
        i++
    }

    return JSON.stringify(output, null, '\t')

}
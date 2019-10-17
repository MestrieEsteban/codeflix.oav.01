//( ͡° ͜ʖ ͡°)
module.exports = function parseEnv(content)
{
    
    let output = {}
    let lines = content.split('\n')
    
    
    for(line of lines)
    {
        if(line.match(/^([\w]+)=(.+)/))
        {
            let key = line.split('=')
            output[key[0]] = key[1]     
        }
    }

    return JSON.stringify(output)

    
}
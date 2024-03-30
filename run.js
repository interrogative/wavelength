/* 

   WAVELENGTH OBFUSCATION CLI

*/

/*
MODEL-WAVELENGTH:
local a = {}
function a.b(...)
    return ...
end

print(a.b('hello', 'aye', 'world'))


*/

const fs = require('fs')


console.log("WAVELENGTH ACTIVE. Preparing to obfuscate")

require('./index.js').obfuscate(
    fs.readFileSync('./temp/input.lua').toString()
).then(([ outputPath, settings ]) => {
    console.log(`saved to '${outputPath}'`)
    //fs.unlinkSync(outputPath)
}).catch((err) => {
    console.log("FAIOIIL", err)
})
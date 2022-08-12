const fs = require('fs')
const arg = process.argv.slice(2);
const fileDir = './files'
if (arg.length < 2) {
    console.log('invalid input')
}
else {
    switch (arg[0]) {
        case 'read':
            var newDir = fileDir + '/' + arg[1]
            fs.readFile(newDir, (err, data) => {
                console.log(data.toString())
            })
            break;

        case 'append':
            var newDir = fileDir + '/' + arg[1]
            fs.appendFile(newDir, arg[2], (err) => {
                console.log("data appended successfully")
            })
        case 'delete':
            var newDir = fileDir + '/' + arg[1]
            fs.unlink(newDir, (err) => {
                console.log('data deleted successfully')
            })
        case 'rename':
            var newDir = fileDir + '/' + arg[1];
            var renameDir = fileDir + '/' + arg[2]
            fs.rename(newDir, renameDir, (err) => {
                console.log("successfully renamed")
            })
        case 'list':
            var newDir = fileDir + '/' + arg[1];
            console.log(fs.readdirSync(fileDir))
        default:
            break;
    }
}

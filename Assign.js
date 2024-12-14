import fs from 'fs'
import path from 'path'

let myPath = `/home/spandan-meshram/Desktop/Practice/web/Assingnment`

const files = fs.readdirSync(myPath)
for (const file of files) {
    let extension = path.extname(file).slice(1);
    if(extension != 'js' && extension != 'json' && extension.length > 1){
        if(fs.existsSync(path.join(myPath,extension))){
            fs.rename(path.join(myPath,file),path.join(myPath,extension,file))
        }
        else{
            fs.mkdirSync(path.join(myPath,extension),{ recursive: true })
            fs.rename(path.join(myPath,file),path.join(myPath,extension,file),(err) => {
                if (err) throw err
                console.log(`Tera kaam ho gay hai bhai`)
            })
        }
    }
}
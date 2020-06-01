


/*

    Nexus.log  —  Index.js

*/



const Colors = require('colors');
const Time = require('time-stamp');
const File = require('fs')
var Path = ""



class Log {



    constructor(Message) {

        this.Message = Message

    }



    CreateLogger(JSONObj) {



        if(JSONObj == null) {

            console.log("No config attached. Reverting to default config.")

        } else {

            Path = Path + JSONObj.Path
            console.log("Marker" + Path)

        }

    }



    Info(Message) {

        console.log("[".green + Time("HH:MM:ss").green + "] [Info] ".green + Message.green)
        let String = "[" + Time("HH:MM:ss") + "] [Info] " + Message
        File.appendFileSync(Path + Time("YY-MM-DD") + '.log', '\n' + String)

    }



    Warn(Message) {

        console.log("[".yellow + Time("HH:MM:ss").yellow + "] [Warn] ".yellow + Message.yellow)
        let String = "[" + Time("HH:MM:ss") + "] [Warn] " + Message
        File.appendFileSync(Path + Time("YY-MM-DD") + '.log', '\n' + String)

    }



    Error(Message) {

        console.log("[".red + Time("HH:MM:ss").red + "] [Error] ".red + Message.red)
        let String = "[" + Time("HH:MM:ss") + "] [Error] " + Message
        File.appendFileSync(Path + Time("YY-MM-DD") + '.log', '\n' + String)

    }



}



module.exports = Log;

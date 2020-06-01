


/*

    Nexus.log  —  Test.js

*/


const Nexus = require('./Index.js')
const Log = new Nexus;


Log.CreateLogger({

    Path: "./Logs/"

})


Log.Info("One!")
Log.Warn("Two!")
Log.Error("Three!")

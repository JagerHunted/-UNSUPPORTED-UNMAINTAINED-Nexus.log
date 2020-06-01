# Nexus.log

A simple yet effective logger made in Node.js.

## Usage
This will show you how to use the Nexus.log package.

### Installation
You can download it from NPM today.

```shell script
$ npm i nexus.log
```

### Implementation
```javascript

/*

    Nexus.log  —  Test.js

*/


const Nexus = require('./nexus.log.js')
const Log = new Nexus;

// You can ignore this config if you would like.
Log.CreateLogger({

    Path: "./Logs/" // Where to store the logs.

})


Log.Info("One!")
Log.Warn("Two!")
Log.Error("Three!")

```

After you run your script the logs will appear in the packages ```/Log/``` folder.

In the future I plan to add a script that allows you to grab the logs with a single command.

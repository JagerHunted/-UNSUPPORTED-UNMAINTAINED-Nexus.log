# Nexus.log

A simple yet effective logger made in Node.js.

## Usage
This will show you how to use the Nexus.log package.

### Installation
You can download it from NPM today.

```shell script
$ npm i nexus.log
```

###Implementation
```javascript

/*

    Nexus.log  —  Test.js

*/


const Logger = require('nexus.log')
const Log = new Logger;


Log.Info("One!")
Log.Warn("Two!")
Log.Error("Three!")

```

After you run your script the logs will appear in the packages ```/Log/``` folder.

In the future I plan to add a script that allows you to grab the logs with a single command.

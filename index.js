const config = require('./ds-config.json');
const intConfig = require('./ds-internal.json');
const mongoConfig = require('./ds-mongo.json');
class TestGit {

    constructor() {
        console.log("Initiating test git...");
    }

    showConfigData() {
        console.log("SHOWING CONFIG DATA _____________________________________________________________________\n");
        console.log(config.gitStatus);
        console.log(config.name);
        console.log(config.num);
        console.log(config.port);

        console.log("SHOWING INTERNAL CONFIG DATA _____________________________________________________________\n");
        console.log(intConfig.gitStatus);
        console.log(intConfig.name);
        console.log(intConfig.num);
        console.log(intConfig.port);

        console.log("SHOWING MONGO CONFIG DATA ________________________________________________________________\n");
        console.log(mongoConfig.gitStatus);
        console.log(mongoConfig.name);
        console.log(mongoConfig.num);
        console.log(mongoConfig.port);
    }

}

let testGit = new TestGit();
testGit.showConfigData();
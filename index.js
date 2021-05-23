const config = require('./ds-config.json');
class TestGit {

    constructor() {
        console.log("Initiating test git...");
    }

    showConfigData() {
        console.log("SHOWING CONFIF DATA _____________________________________________________________\n");
        console.log(config.gitStatus);
        console.log(config.name);
        console.log(config.num);
        console.log(config.port);
    }

}

let testGit = new TestGit();
testGit.showConfigData();
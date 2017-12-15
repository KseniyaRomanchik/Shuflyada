const logger = require('./logger').createLogger('global.log');

class InitFabric {

    private initClasses: Array<any>;
    private instances: any = {};

    constructor(initClasses) {
        
        this.initClasses = initClasses;
    }

    start() {
        
        new Map(Object.entries(this.initClasses)).forEach(classConstructor => {
            this.instances[classConstructor[0]] = new [classConstructor[1]](require('./logger').createLogger(`${ classConstructor[0] }.log`));
        });
    }

    getClassInstance(instanceName) {

        return this.initClasses[instanceName] || logger.error('This instance is not exists')
    }
}
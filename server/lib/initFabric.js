var logger = require('./logger').createLogger('global.log');
var InitFabric = /** @class */ (function () {
    function InitFabric(initClasses) {
        this.instances = {};
        this.initClasses = initClasses;
    }
    InitFabric.prototype.start = function () {
        var _this = this;
        new Map(Object.entries(this.initClasses)).forEach(function (classConstructor) {
            _this.instances[classConstructor[0]] = new [classConstructor[1]](require('./logger').createLogger(classConstructor[0] + ".log"));
        });
    };
    InitFabric.prototype.getClassInstance = function (instanceName) {
        return this.initClasses[instanceName] || logger.error('This instance is not exists');
    };
    return InitFabric;
}());
//# sourceMappingURL=initFabric.js.map
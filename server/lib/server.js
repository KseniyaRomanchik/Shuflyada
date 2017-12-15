var mongoose = require('mongoose');
var express = require('express');
var logger = require('logger');
var InitFabric = require('./InitFabric');
global.__baseUrl = __diranme;
var Server = /** @class */ (function () {
    function Server(config) {
        this.logger = logger.createLogger('global.log');
        this.app = express();
        this.runServer(config);
    }
    Server.prototype.connectDB = function (config) {
        var _this = this;
        mongoose.connect("mongodb://" + config.db.url + ":" + config.db.port + "/SHUFLYADA");
        return new Promise(function (resolve, reject) {
            mongoose.connection.on('error', function (err) { return reject("DB connection error: [" + err + "]"); });
            mongoose.connection.on('connected', function () {
                _this.logger.info('DB connected');
                resolve();
            });
        });
    };
    Server.prototype.runServer = function (config) {
        var _this = this;
        return Promise.all([
            this.connectDB(config)
        ])
            .then(function () {
            _this.app.listen(config.port, function () { return logger.info('App is started!'); });
        })
            .catch(function (err) { return _this.logger.error(err); });
    };
    return Server;
}());
new Server(require("./config." + process.env.ENVIROMENT + ".json"));
//# sourceMappingURL=server.js.map
const mongoose = require('mongoose');
const express = require('express');
const logger = require('logger');

const InitFabric = require('./InitFabric');

global.__baseUrl = __diranme;

class Server {

  private logger: any = logger.createLogger('global.log');
  private app: any = express();

  constructor(config) {
    this.runServer(config);
  }

  connectDB(config: any) {

    mongoose.connect(`mongodb://${ config.db.url }:${ config.db.port }/SHUFLYADA`);

    return new Promise((resolve, reject) => {

      mongoose.connection.on('error', err => reject(`DB connection error: [${ err }]`));

      mongoose.connection.on('connected', () => {

        this.logger.info('DB connected');
        resolve();
      });
    });
  }

  runServer(config: any) {

    return Promise.all([ 
      this.connectDB(config)
    ])
    .then(() => {
      this.app.listen( config.port, () => logger.info('App is started!'));
    })
    .catch(err => this.logger.error(err));
  }
}

new Server(require(`./config.${ process.env.ENVIROMENT }.json`));


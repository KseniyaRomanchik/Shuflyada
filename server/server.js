const mongoose = require('mongoose');
const express = require('express');
const logger = require('logger');

global.__baseUrl = __dirname;

class Server {

  constructor(config) {

    this.logger = logger.createLogger('global.log');
    this.app = express();
    this.runServer(config);
  }

  connectDB(config) {

    mongoose.connect(`mongodb://${ config.db.url }:${ config.db.port }/SHUFLYADA`);

    return new Promise((resolve, reject) => {

      mongoose.connection.on('error', err => reject(`DB connection error: [${ err }]`));

      mongoose.connection.on('connected', () => {

        this.logger.info('DB connected');
        resolve();
      });
    });
  }

  runServer(config) {

    return Promise.all([ 
      this.connectDB(config)
    ])
    .then(() => {
      this.app.listen( config.port, () => logger.info('App is started!'));
    })
    .catch(err => this.logger.error(err));
  }
}

new Server(require(`./config.${ process.env.ENVIRONMENT }.json`));


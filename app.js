'use strict';
const nodemailer = require('nodemailer');

class AppBootHook {

  /** @param {Egg.Application} app */
  constructor(app) {
    this.app = app;
  }

  async didReady() {
    const { app } = this;
    const { api2021 } = app.config;
    const ctx = await app.createAnonymousContext();

    const transporter = nodemailer.createTransport({
      host: api2021.host,
      port: api2021.port,
      auth: {
        user: api2021.user,
        pass: api2021.pass,
      },
      secureConnection: true,
    });
    ctx.transporter = app.transporter = transporter;
  }
}

module.exports = AppBootHook;

const nodemailer = require("nodemailer");

const { GMAIL_EMAIL, GMAIL_PASS } = require('./server-config');

// Transport object is the object that has all the logic how do you connect to the smtp server of gamil etc 
const mailsender = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: GMAIL_EMAIL,
        pass: GMAIL_PASS
    }
});
module.exports = mailsender;
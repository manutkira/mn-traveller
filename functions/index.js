const functions = require("firebase-functions");
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
admin.initializeApp()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

let transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false,
    auth: {
        user: 'apikey',
        pass: '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'
    }
})

exports.sendEmail = functions.https.onRequest((Request, Response) => {
    const emailFrom = Request.query.emailFrom
    const message = Request.query.message

    const mailOption = {
        from: 'MN-Traveller <kiramanut0521@gmail.com>',
        to: 'allnob64@gmail.com',
        subject: 'MN-Traveller Contact from submission',
        html: `${message} <br><br> From ${emailFrom}`,

    }
    transporter.sendMail(mailOption, (err, info) => {
        if(err){
            console.log(` email: ${emailFrom}, message: ${message}, err: ${err.toString()}`);
            Response.send(err.toString())
        }
        Response.send('Your message was submitted successfully!')
    })
})
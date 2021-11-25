var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'atonujekemena01@gmail.com',
    pass: 'hacking001'
  }
});

var mailOptions = {
  from: 'atonujekemena@gmail.com',
  to: 'l.kemena001@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
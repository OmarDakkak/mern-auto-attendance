var nodemailer = require('nodemailer');
var fs = require('fs'),
    path = require('path'),
    _ = require('underscore');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ehang01.bendahan@gmail.com',
        pass: 'dadi2019'
    }
});



// Return only base file name without dir
function getMostRecentFileName(dir) {
    var files = fs.readdirSync(dir);

    // use underscore for max()
    return _.max(files, function (f) {
        var fullpath = path.join(dir, f);

        // ctime = creation time is used
        // replace with mtime for modification time
        return fs.statSync(fullpath).ctime;
    });
}
FilePath = 'Attendance/'+getMostRecentFileName('Attendance');

var mailOptions = {
    from: 'ehang01.bendahan@gmail.com',
    to: 'omardakkak98@gmail.com',
    subject: 'Attendance',
    text: 'That is the attendance!',
    attachments: [
        { // file on disk as an attachment
            filename: 'attendance.csv',
            path: FilePath// stream this file
        }
    ]
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
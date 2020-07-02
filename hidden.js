// const express = require("express");
// const connectDB = require("./config/db");
// const app = express();
// const {exec} = require("child_process");
// //const config = require("config");
// const {check, validationResult} = require("express-validator");

// //connect database
// connectDB();

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// //init middleware
// app.use(express.json({extended: false}));

// app.get("/", (req, res) => res.send("API Running"));

// app.use("/pfa_RecognizeAttendance", callName_pfa_RecognizeAttendance);
// function callName_pfa_RecognizeAttendance(req, res) {
//     console.log("execute function");
//     // var spawn = require("child_process").spawn; var process = spawn("python", [
//     // "./pfa_RecognizeAttendance.py"   //req.query.firstname, //req.query.lastname,
//     // ]);
//     exec("ipython ./pfa_RecognizeAttendance.py", (error, stdout, stderr) => {
//         if (error) {
//             console.log(`error: ${error.message}`);
//             return;
//         }
//         if (stderr) {
//             console.log(`stderr: ${stderr}`);
//             return;
//         }
//         var data = stdout;
//         console.log(`stdout: ${data}`);
//         // process.stdout.on("data", data => {   //console.log(data.toString());
//         // res.send(data); });
//         res.send(data);
//     });
// }
// app.use("/pfa_auto_Mail", callName_pfa_auto_Mail);
// function callName_pfa_auto_Mail(req, res) {
//     console.log("execute function");
//     exec("ipython ./pfa_auto_Mail.py", (error, stdout, stderr) => {
//         if (error) {
//             console.log(`error: ${error.message}`);
//             return;
//         }
//         if (stderr) {
//             console.log(`stderr: ${stderr}`);
//             return;
//         }
//         var data = stdout;
//         console.log(`stdout: ${data}`);
//         res.send(data);
//     });
//     // var spawn = require("child_process").spawn; var process = spawn("python", [
//     // "./pfa_auto_Mail.py"   //req.query.firstname,   //req.query.lastname, ]);
//     // console.log("data.toString()"); process.stdout.on("data", data => {
//     // console.log(data.toString());   res.send(data); });
// }
// // app.use("/pfa_capture", callName_pfa_capture); function
// // callName_pfa_capture(req, res) {   console.log("execute function");   var
// // spawn = require("child_process").spawn;   var process = spawn("python", [
// // "./pfa_Capture Faces.py",     //req.query.firstname, //req.query.lastname,
// // ]);   process.stdout.on("data", data => { //console.log(data.toString());
// // res.send(data);   }); }
// app.use("/pfa_train", callName_pfa_train);
// function callName_pfa_train(req, res) {
//     console.log("execute function");
//     exec("ipython ./pfa_train_images.py", (error, stdout, stderr) => {
//         if (error) {
//             console.log(`error: ${error.message}`);
//             return;
//         }
//         if (stderr) {
//             console.log(`stderr: ${stderr}`);
//             return;
//         }
//         var data = stdout;
//         console.log(`stdout: ${data}`);
//         res.send(data);
//     });
//     // var spawn = require("child_process").spawn; var process = spawn("python", [
//     // "./pfa_train_images.py",   //req.query.firstname,   //req.query.lastname, ]);
//     // process.stdout.on("data", data => {   console.log(data.toString());
//     // res.send(data); });
// }

// app.use("/api/users", require("./routes/api/users"));
// //app.use("/capture", require("./routes/api/capture"));
// app.use("/api/profile", require("./routes/api/profile"));
// app.use("/api/auth", require("./routes/api/auth"));
// app.use("/api/posts", require("./routes/api/posts"));
// app.post("/capture", [
//     check("email", "Name is required")
//         .not()
//         .isEmpty(),
//     check("password", "Please include a valid email")
//         .not()
//         .isEmpty()
// ], (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res
//             .status(400)
//             .json({
//                 errors: errors.array()
//             });
//     }

//     const {email, password} = req.body;
//     console.log("votre donnees sont :" + email + "  " + password);
//     console.log("execute function capture");

//     exec(`ipython ./pfa_Capture.py ${email} ${password}`, (error, stdout, stderr) => {
//         if (error) {
//             console.log(`error: ${error.message}`);
//             return;
//         }
//         if (stderr) {
//             console.log(`stderr: ${stderr}`);
//             return;
//         }
//         var data = stdout;
//         console.log(`stdout: ${data}`);
//         res.send(req.body);
//     });

//     // var spawn = require("child_process").spawn; var process = spawn("python",
//     // ["./pfa_Capture.py", email, password]); process.stdout.on("data", data => {
//     // console.log(data.toString()); }); res.send("req.body");
// });

var spawn = require("child_process").spawn;
var process = spawn('python', ["./pfa_train_images.py"]);
console.log("haha");
process.stdout.on("data", data => {
    console.log(data.toString());
});
process.stderr.on("data", data => {
    console.log(data.toString());
});
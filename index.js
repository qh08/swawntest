const spawn = require('child_process').spawn;

const runChild = spawn('node',['child.js']);

runChild.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

runChild.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

runChild.on('close', (code) => {
  console.log(`子进程退出，退出码 ${code}`);
});
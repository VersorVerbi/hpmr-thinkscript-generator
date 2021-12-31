import childProcess from 'child_process';

const child = childProcess.fork('bin/index.js', [...process.argv.slice(2)]);

child.on("error", (err) => {
    if (err) throw err;
});

child.on('exit', (code) => {
    if (code !== 0) throw "Something went wrong";
});
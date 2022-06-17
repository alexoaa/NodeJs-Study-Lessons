// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any projects
// npm install -g <packageName>

// package.json - manifest file (stores important information about project/package)
// Three ways for creating a package.json:
// manual approach (create package.json in the root, then create each properties etc)
// Running in terminal command, npm init (step by step, press enter to skip)
// Running in terminal command, npm init -y (everything default)

require('colors');
console.log("Hello there".bold.white);
const ls = require("./ls");
const pwd = require("./pwd");
const cat = require("./cat")
const curl = require('./curl')

const prompt = (data = "Node Shell") => {
  console.log(data);
  process.stdout.write("> ");
};

const main = (data) => {
  const cmd = data.toString().trim().split(' ');

  switch (cmd[0]) {
    case "pwd":
      pwd(prompt);
      break;
    case "ls":
      ls(prompt);
      break;
    case "cat":
      cat(prompt, cmd[1]);
      break;
    case "curl":
      curl(prompt, cmd[1]);
      break;
    default:
      prompt("command not found");
  }
};

prompt();
process.stdin.on("data", (data) => {
  main(data);
});

const ls = require("./ls");
const pwd = require("./pwd");

const prompt = (data = "Node Shell") => {
  console.log(data);
  process.stdout.write("> ");
};

const main = (data) => {
  const cmd = data.toString().trim();

  switch (cmd) {
    case "pwd":
      pwd(prompt);
      break;
    case "ls":
      ls(prompt);
      break;
    default:
      prompt("command not found");
  }
};

prompt();
process.stdin.on("data", (data) => {
  main(data);
});

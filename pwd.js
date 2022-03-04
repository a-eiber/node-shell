
module.exports = function() {
  process.stdout.write("promp > ");
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd === "pwd") process.stdout.write(process.cwd());
    process.stdout.write("\npromp > ");
  });
}

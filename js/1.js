function main() {
  $(prompt("Where do you want to add something")).text(prompt("What do you want to appear?"));
  console.log("finished");
}

$(document).ready(main);

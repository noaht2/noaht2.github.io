function main() {
  alert("You are now entering the world of javaScript. You are advised to hang tight.");
  $(prompt("Where do you want to add something")).text(prompt("What do you want to appear?"));
}

$(document).ready(main);

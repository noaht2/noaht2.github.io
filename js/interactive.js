function main (request, element) {
  alert("You are now entering the world of javaScript. You are advised to hang tight.");
  $(element).text(request);
}

$(document).ready(main);

const words = [["central processing unit", "arithmetic logic unit"],
	       ["internet", "world-wide web"],
	       ["malware", "phishing", "social engineering", "brute force"],
	       ["privacy", "cookie"],
	       ["algorithm", "linear search", "binary search"],
	       ["variable", "constant", "function"],
	       ["boolean", "compiler", "interpreter"],
	       ["binary", "hexadecimal", "ASCII", "Unicode"]]

function shuffle(array) {
    // I copied this from https://stackoverflow.com/a/2450976
    // I changed var to let
    // CC BY-SA 4.0
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function record_score(text) {
    para = document.querySelector("#score");
    para.textContent = text;
}

function game() {
    score = 0;
    record_score("");
    toplevel: while (score < words.length) {
	round: for(let word of shuffle(words[score])) {
	    switch (prompt(word)) {
	    case "s":
		break round;
	    case "p":
		break;
	    case null:
		break toplevel;
	    case "":
		score++;
		break;
	    }
	}
	record_score("Score: " + score);
    }
}

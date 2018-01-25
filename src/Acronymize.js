import acrobet from './acrobet.js';

class Acronymize {
  // Random number
  ranNum(n) {
    return Math.floor(Math.random() * n);
  }

  // Take the string, then split it
  generate(e) {
    var len = e.length;
    var chars = e.toLowerCase().split('');

    var output = "";

    // If there's any symbols or spaces, tell them no
    if (/^[a-zA-Z]*$/.test(e) === false) {
      return "No spaces, or special characters/symbols allowed!";
    }

    // If nothing was entered, then tell them
    else if (len === 0) {
      return "You got to enter something, silly!";
    }

    // If the input is too short, let the user know
    else if (len < 3) {
      return "Sorry, too short.";
    }

    // If the word is longer than 30 characters, tell them no
    else if (len > 30) {
      return "Sorry, that's too long";
    }


    // If everything looks good, then generate the words
    else {
      for (var i = 0; i < len; i++) {
         output += this.letterCheck(chars[i]) + " ";
      }
      return output.toUpperCase();
    }
  }

  // Grab the letter given.  Find a random word within the "JSON" file
  // then return said random word
  letterCheck(char) {
    return acrobet[char][this.ranNum(acrobet[char].length)];
  }
}

export default Acronymize;

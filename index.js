class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    string = string.replace(/[^a-zA-Z0-9 ' -]/g, "");
    if (string === "!") {
      string = "";
    }
    return string;
  }
  static titleize(sentence) {
    let newSentence = "";
    sentence.split(" ").map((word, index) => {
      if (index === 0) {
        newSentence += word[0].toUpperCase() + word.slice(1) + " ";
      } else if (
        word === "the" ||
        word === "a" ||
        word === "an" ||
        word === "but" ||
        word === "and" ||
        word === "for" ||
        word === "at" ||
        word === "by" ||
        word === "from" ||
        word === "of"
      ) {
        newSentence += word + " ";
      } else {
        newSentence += word[0].toUpperCase() + word.slice(1) + " ";
      }
    });

    return newSentence.trim();
  }
}

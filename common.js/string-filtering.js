const string = "Привет! Как дела?";

const vowels = ["и", "е", "а", "ы", "э", "ё", "ю", "я", "о"];

const getVowels = stringToFilter => {
  let extractedVowels = "";

  for (let i = 0; i < stringToFilter.length; i++) {
    const currentLetter = stringToFilter[i].toLowerCase();

    if(vowels.indexOf(currentLetter) != -1) {
      extractedVowels = extractedVowels += currentLetter;
    }
  }

  return extractedVowels;
}

console.log(getVowels(string));

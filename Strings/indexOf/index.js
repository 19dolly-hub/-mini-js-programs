function secondIndexOf(s2, s1) {
    let firstIndex = s1.indexOf(s2);
    let secondIndex = s1.indexOf(s2, firstIndex + 1);
    return secondIndex;
}

function index(str, fullString) {
    const indices = [];
    const strings = [];
    let currentIndex = fullString.indexOf(str);
    for(let i=0; i<fullString.split(" ").length; i++) {
        let nextIndex = fullString.indexOf(str, currentIndex + 1);
        indices.push(currentIndex);
        strings.push(fullString.substr(currentIndex, 4));
        currentIndex = nextIndex;
    }
    console.log(indices, strings);
}

function replaceIn(full) {
    for(let i=0; i<3; i++) {
        let newFull = full.replace("the", "a");
        full = newFull;
    }
}

function normalize(str) {
    let norm = str.replace('-', '/');
    let newNorm = norm.replace('-', '/');

    return newNorm;
}

const inputText = document.getElementById("input-text");
const searchWordInput = document.getElementById("search-word");
const searchButton = document.getElementById("search-button");
const resultOutput = document.getElementById("result");

searchButton.addEventListener("click", () => {
  const fullString = inputText.value;
  const searchWord = searchWordInput.value;

  const searchIndex = fullString.indexOf(searchWord);
  
  if (searchIndex !== -1) {
    const replacedString = replaceAt(fullString, searchIndex, searchWord.length, `[${searchWord}]`);
    resultOutput.textContent = replacedString;
  } else {
    resultOutput.textContent = "Search word not found in text.";
  }
});

function replaceAt(text, index, length, replacement) {
  return text.substring(0, index) + replacement + text.substring(index + length);
}

let sentence = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi ."
// nombre de caractaire.
function lengthSentence(sentences){
    return sentence.length;
  }
  console.log(lengthSentence());

//   nombre de mots 

function WordsNumber(phrase){
    return sentence.split(' ').length;
  }
  console.log(WordsNumber());

//   nombre de voyelles 

  function getVowels(sentenc) {
    const voyelles = sentence.match(/[aeiou]/gi).length;
    return voyelles 
  }
  console.log(getVowels());
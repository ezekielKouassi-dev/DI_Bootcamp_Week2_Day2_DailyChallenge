let sentence = "The movie is not that bad, I like it";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

if(wordBad != -1 && wordNot != -1) {
    if(wordNot < wordBad) {
        sentence.replace(sentence.substring(wordNot, wordBad + 3), "good");
    }
    else {
        console.log(sentence);
    }
}
else {
    console.log(sentence);
}
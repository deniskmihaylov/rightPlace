function rightPlace(word1, charecter, word2) {
  let res = word1.replace("_", charecter);
  if (res === word2) {
    console.log('Matched');
  } else {
    console.log('Not Matched')
  }
}

rightPlace("Str_ng", "i", "String");


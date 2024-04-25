const matchElements = (array) => {

  for (let i = 0; i < array.length; ++i) {
    let pointer = array.length - 1
    while (pointer > i) {
      if (array[pointer] === array[i]) {
        return `Match found at ${i} and ${pointer}`
      }
      pointer--
    }
  }
  
  return "No matches found 😞";
};

const fruit = ["🍓", "🍐", "🍊", "🍌", "🍍", "🍑", "🍎", "🍈", "🍊", "🍇"];
console.log(matchElements(fruit)); // "Match found at 2 and 8"
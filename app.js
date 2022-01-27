const colors = [
  "red",
  "yellow",
  "blue",
  "brown",
  "orange",
  "green",
  "violet",
  "black",
  "carnationPink",
  "yellowOrange",
  "blueGreen",
  "redViolet",
  "redOrange",
  "yellowGreen",
  "blueViolet",
  "white",
  "violetRed",
  "dandelion",
  "cerulean",
  "apricot",
  "scarletGreen",
  "yellow",
  "indigo",
  "gray",
];

// tracking the current color
let color = null;

// tracking the current index of color
let index = 0;

// Main Function
const createColorManager = (
  input = colors[Math.floor(Math.random() * colors.length)]
) => {
  index = colors.indexOf(input);
  color = input;

  // Color Manager Object
  colorManager = {
    get() {
      return color;
    },
    next() {
      if (index === colors.length - 1) {
        color = colors[0];
        index = 0;
        return color;
      } else {
        color = colors[index + 1];
        index += 1;
        return color;
      }
    },
    prev() {
      if (index === 0) {
        color = colors[colors.length - 1];
        index = colors.length - 1;
        return color;
      }
      color = colors[index - 1];
      index -= 1;
      return color;
    },
    reset() {
      color = input;
      return color;
    },
  };
};

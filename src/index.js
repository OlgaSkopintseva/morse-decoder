const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const groupSize = 10;
  let decodedString = "";

  for (let i = 0; i < expr.length; i += groupSize) {
    const group = expr.slice(i, i + groupSize);

    let morseCode = "";
    for (let j = 0; j < 10; j += 2) {
      const code = group.slice(j, j + 2);
      if (code === "10") {
        morseCode += ".";
      } else if (code === "11") {
        morseCode += "-";
      }
    }

    const decodedChar = MORSE_TABLE[morseCode];

    decodedString += decodedChar || " ";
  }

  return decodedString;
}

module.exports = {
  decode,
};

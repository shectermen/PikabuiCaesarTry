const Caesar = key => {
  return string => {
    return string
      .split("")
      .map(letter => {
        return String.fromCharCode((letter.charCodeAt(0) + key) % 256);
      })
      .join("");
  };
};

let enc = Caesar(3);

console.log(enc("ABC")); // DEF

console.log(enc("hello")); // khoor

console.log(Caesar(10)("script")); // }m|sz~

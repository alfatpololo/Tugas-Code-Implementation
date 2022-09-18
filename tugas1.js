const a = "tidak";
const b = a.split("").reverse().join("");

if (a == b) {
  console.log("Ini palindrome");
} else {
  console.log("Ini bukan Palindrome");
};

const kata = "Saya belajar Javascript";
const kata2 = kata.split(" ").reverse().join(" ");

console.log(kata2);
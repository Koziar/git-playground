const a = false;
const b = true;
const c = a && b;

if (c) {
  console.log("🐈");
} else {
  console.log("🦆");
}
console.log("🦄");

const sum = (a: number, b: number) => {
  return a + b;
};

function somar(num1, num2) {
  if (typeof num1 !== "number" || typeof num1 !== "number") {
    return "Error";
  } else {
    return num1 + num2;
  }
}

const _somar = somar;
export { _somar as somar };

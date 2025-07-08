import { somar } from "../models/calculadora.js";

test("testando calculadora de soma usando números", () => {
  expect(somar(1, 3)).toBe(4);
  console.log(somar(1, 3));
});

test("testando calculadora de soma usando strings", () => {
  expect(somar("banana", "maçã")).toBe("Error");
  console.log(somar("banana", "maçã"));
});

test("testando calculadora de soma usando string e número", () => {
  expect(somar("banana", 1)).toBe("Error");
  console.log(somar("banana", 1));
});

test("testando calculadora de soma usando bools", () => {
  expect(somar(true, false)).toBe("Error");
  console.log(somar(true, false));
});

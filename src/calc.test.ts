import { sum } from "./calc";

test("sprawdzenie poprawności wynikowej", () => {
   let result = sum(100, 200, 300);
   expect(result).toBe(610);
})
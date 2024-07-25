import Sum from "../Sum";

test("sum of 2 numbers", () => {
  let result = Sum(3, 4);

  expect(result).toBe(-1);
});

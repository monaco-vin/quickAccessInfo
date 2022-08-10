import Manager from "../lib/Manager.js";

test("Manager class creates an Manager object with name", () => {
  const bob = new Manager("bob", 1, "bob@bob.com");
  expect(bob.name).toBe("bob");
});

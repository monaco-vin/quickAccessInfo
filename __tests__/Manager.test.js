const Manager = require("../lib/Manager");

test("Manager class creates an Manager object with name", () => {
  const bob = new Manager("bob", 1, "bob@bob.com");
  expect(bob.name).toBe("bob");
});
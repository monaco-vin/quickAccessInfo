const Engineer = require("../lib/Engineer");

test("Engineer class creates an Engineer object with name", () => {
  const bob = new Engineer("bob", 1, "bob@bob.com");
  expect(bob.name).toBe("bob");
});

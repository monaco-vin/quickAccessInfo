import Intern from "../lib/Intern.js";

test("Intern class creates an Intern object with name", () => {
  const bob = new Intern("bob", 1, "bob@bob.com");
  expect(bob.name).toBe("bob");
});

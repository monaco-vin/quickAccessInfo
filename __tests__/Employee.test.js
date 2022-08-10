import Employee from "../lib/Employee.js";
//const Employee = require("../lib/Employee"); // change import .... from "..." in all test files

test("Employee class creates an Employee object with name", () => {
  const bob = new Employee("bob", 1, "bob@bob.com");
  expect(bob.name).toBe("bob");
});

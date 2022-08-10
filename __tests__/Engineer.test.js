import Engineer from "../lib/Engineer.js";
//const Engineer = require("../lib/Engineer");
const bob = new Engineer("bob", 1, "bob@bob.com", "bobGitCode");

test("Engineer class creates an Engineer object with name", () => {
  expect(bob.name).toBe("bob");
});

test("getRole returns the correct role", () => {
  expect(bob.getRole()).toBe("Engineer");
});

test("getGithub will return user gitHub name", () => {
  expect(bob.getGitHub()).toBe("bobGitCode");
});

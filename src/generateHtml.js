function generateHtml(teamArray) {
  const cardArray = teamArray.map((emp) => {
    const role = emp.getRole();
    let lastParam;
    if (role === "Manager") {
      lastParam = `<li class="list-group-item">Office Number: ${emp.officeNumber} </li>`;
    } else if (role === "Engineer") {
      lastParam = `<li class="list-group-item">GitHub: ${emp.gitHub}</li>`;
    } else {
      lastParam = `<li class="list-group-item">School: ${emp.school}</li>`;
    }
    return `<div class="card" style="width: 18rem">
    <div class="card-header">
      <h3>${emp.name}</h3>
      <h4>${role} </h4>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${emp.id} </li>
        <li class="list-group-item">Email: ${emp.email}</li>
        ${lastParam}
      </ul>
    </div>
  </div>`;
  });

  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <title>Team Profile</title>
  </head>
  <body>
  <header>
  <h1>My Team</h1>
</header>
<div class="team">
${cardArray.join("")}


</div>
  </body>
</html>
`;
}

export default generateHtml;

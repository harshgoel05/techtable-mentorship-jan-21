fetchData();

function fetchData() {
  fetch("http://localhost:3000/api/")
    .then(async (res) => await res.json())
    .then((data) => {
      data.forEach((expense, index) => {
        console.log(expense);
        document.getElementById("tablebody").insertAdjacentHTML(
          "beforeend",
          `<tr>
        <th scope="row">${index + 1}</th>
        <td>${new Date(expense.timestamp).toDateString()}</td>
        <td>${expense.account}</td>
        <td>${expense.amount}</td>
        <td>${expense.source}</td>
        </tr>`
        );
      });
      $("table").DataTable();
    })
    .catch((err) => {
      console.log(err);
    });
}

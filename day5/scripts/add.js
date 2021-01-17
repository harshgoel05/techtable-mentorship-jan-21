document.getElementById("submit").addEventListener("click", () => {
  event.preventDefault();

  const data = {
    account: document.getElementById("account").value,
    amount: document.getElementById("amount").value,
    source: document.getElementById("source").value,
  };
  console.log(data);

  fetch("http://localhost:3000/api/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (res) => {
      console.log(res);
      await res.json();
    })
    .then((data) => {
      console.log(data);
      alert("Success!");
    });
});

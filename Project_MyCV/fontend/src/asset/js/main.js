fetch("http://localhost:7000/api/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(loginData),
})
.then((response) => response.json())
.then((data) => {
  console.log(1);
  console.log(JSON.stringify(data));
})
.catch((err) => {
  console.log(err.message);
});

  
  
function showAndHiend(id, type, event) {
  event.stopPropagation();
  var element = document.getElementById(id);
  console.log(type);
  if (type === "show") {
    element.style.display = "flex";
  } else if (type === "hiend") {
    element.style.display = "none";
  }
}
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(Object.fromEntries(new FormData(event.target)));
});

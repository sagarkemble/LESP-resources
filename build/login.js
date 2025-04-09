const form = document.querySelector("form");
form.addEventListener("submit", () => {
  event.preventDefault();
  const response = fetch("http://localhost:4000/user");
  const formData = {
    firstName: form.elements[0].value,
    lastName: form.elements[1].value,
    email: form.elements[2].value,
    enrollmentNumber: form.elements[3].value,
    role: form.elements[4].value,
  };
});

const createContactPage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");
  content.appendChild(pageContent);

  //create form
  const form = document.createElement("form");
  //create inputs and button
  const name = document.createElement("input");
  const email = document.createElement("input");
  const phone = document.createElement("input");
  const submit = document.createElement("button");

  //assign inputs types and placeholder text
  name.type = "text";
  name.placeholder = "Name";
  email.type = "email";
  email.placeholder = "youremail@example.com";
  phone.type = "number";
  //phone.inputmode = "numeric";
  phone.placeholder = "0123456789";
  phone.setAttribute("min", 10);
  phone.setAttribute("max", 11);
  submit.type = "submit";
  submit.value = "Submit";
  submit.textContent = "Submit";

  //append form to page content
  pageContent.appendChild(form);

  //append inputs to form
  form.appendChild(name);
  form.appendChild(email);
  form.appendChild(phone);
  form.appendChild(submit);
};

export default createContactPage;

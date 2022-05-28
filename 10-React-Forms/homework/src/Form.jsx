import React from "react";

export default function Form() {
  const [input, setInput] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({});

  const handleInputChange = function (e) {
    const { name, value } = e.target;
    const newInput = { ...input, [name]: value };

    setInput(newInput);

    setErrors(validate(newInput));
  };

  return (
    <form>
      <label>Username:</label>
      <input
        type="text"
        name="username"
        value={input.username}
        onChange={handleInputChange}
        className={errors.username ? "danger" : ""}
      />
      <p className="danger">{errors.username}</p>
      
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={input.password}
        onChange={handleInputChange}
        className={errors.password ? "danger" : ""}
      />
      <p className="danger">{errors.password}</p>
      <button type="submit">Enviar</button>
    </form>
  );
}

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = "Username is required";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      input.username
    )
  ) {
    errors.username = "Username is invalid";
  }

  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }

  return errors;
}

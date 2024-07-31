import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default App;

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          ...prevValue,
          fName: value,
        };
      } else if (name === "lName") {
        return {
          ...prevValue,
          lName: value,
        };
      } else if (name === "email") {
        return {
          ...prevValue,
          email: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <p>{fullName.email}</p>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <input
          name="email"
          onChange={handleChange}
          placeholder="Email"
          value={fullName.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

// function App() {
//   const [name, setName] = useState("");
//   const [headingText, setHeadingText] = useState("");

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   function handleClick(event) {
//     setHeadingText(name);

//     event.preventDefault();
//   }

//   return (
//     <div className="container">
//       <h1>Hello {headingText} </h1>
//       <form onSubmit={handleClick}></form>
//       <input
//         onChange={handleChange}
//         type="text"
//         placeholder="What's your name?"
//         value={name}
//       />
//       <button type="submit">Submit</button>
//     </div>
//   );
// }

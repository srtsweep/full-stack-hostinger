import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://full-stack-hostinger-server.onrender.com/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
    // .error((err) => {
    //   console.error("Error while fetching the message", err);
    // });
  }, []);

  return (
    <>
      <h1>Welcome to chaicode frontend</h1>
      <h2>data {message}</h2>
    </>
  );
}

export default App;

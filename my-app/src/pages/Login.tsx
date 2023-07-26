import { useState } from "react";
import { Button } from "react-bootstrap";
import "./productPage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function Login() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const navigate = useNavigate();

  function handleUsername(event: React.ChangeEvent<HTMLInputElement>) {
    const inputUser = event.target.value;
    setUsernameInput(inputUser);
  }

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    const inputPass = event.target.value;
    setPasswordInput(inputPass);
  }

  async function loginUser() {
    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameInput,
          password: passwordInput,
        }),
      });
      const json = await res.json();
      if (res.ok) {
        setLoginMessage("Benvenuto su Game Store!");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        setLoginMessage("Non sei autorizzato.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    loginUser();
  }

  return (
    <>
      <form
        className="form-user"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
          height: "40vh",
          marginTop: "50px",
        }}
        onSubmit={handleLogin}
      >
        <h3 style={{ textAlign: "center" }}>Inserisci i tuoi dati</h3>
        <input
          type="text"
          name="username"
          value={usernameInput}
          onChange={handleUsername}
          style={{
            padding: "6px",
            borderRadius: "5px",
            border: "1px solid black",
          }}
          placeholder="username"
        />
        <input
          type="password"
          value={passwordInput}
          onChange={handlePassword}
          style={{
            padding: "6px",
            borderRadius: "5px",
            border: "1px solid black",
          }}
          placeholder="password"
        />
        <Link to="/signup">
          <span>Registrati</span>
        </Link>
        <Button
          style={{
            borderRadius: 5,
            border: "1px solid red",
          }}
          className="prd-btn"
          type="submit"
        >
          Login
        </Button>
        {loginMessage && (
          <p
            className="text-danger"
            style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}
          >
            {loginMessage}
          </p>
        )}
      </form>
    </>
  );
}

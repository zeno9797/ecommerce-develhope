import { useState } from "react";
import { Button } from "react-bootstrap";
import "./productPage.css";

export function Signup() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  // const navigate = useNavigate();

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
      const res = await fetch("http://localhost:3000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameInput,
          password: passwordInput,
        }),
      });
      if (res.ok) {
        setLoginMessage("Benvenuto su Game Store!");
        // setTimeout(() => {
        //   navigate("/");
        // }, 1500);
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
        onSubmit={handleLogin}
        className="form-user"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
          height: "40vh",
          marginTop: "50px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Compila i campi per registrarti</h3>
        <input
          onChange={handleUsername}
          type="text"
          name="username"
          style={{
            padding: "6px",
            borderRadius: "5px",
            border: "1px solid black",
          }}
          placeholder="username"
        />
        <input
          onChange={handlePassword}
          type="password"
          style={{
            padding: "6px",
            borderRadius: "5px",
            border: "1px solid black",
          }}
          placeholder="password"
        />
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

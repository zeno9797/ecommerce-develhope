import { Button } from "react-bootstrap";
import "./productPage.css";

export function Login() {
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
      >
        <h3 style={{ textAlign: "center" }}>Inserisci i tuoi dati</h3>
        <input
          type="text"
          style={{
            padding: "6px",
            borderRadius: "5px",
            border: "1px solid black",
          }}
          placeholder="username"
        />
        <input
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
        >
          Login
        </Button>
      </form>
    </>
  );
}

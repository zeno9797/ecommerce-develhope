import { useState } from "react";
import { Button } from "react-bootstrap";
import "./productPage.css";

export function Signup() {
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
        <h3 style={{ textAlign: "center" }}>Compila i campi per registrarti</h3>
        <input
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
        {/* {loginMessage && (
          <p
            className="text-danger"
            style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}
          >
            {loginMessage}
          </p>
        )} */}
      </form>
    </>
  );
}

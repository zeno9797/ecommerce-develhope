import { useState, useEffect } from "react";
import { Button, Nav } from "react-bootstrap";
import "./productPage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { StoreItem } from "../components/StoreItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@fortawesome/fontawesome-svg-core";
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";



export function Login() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [userLog, setUserLog] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    if (token !== null) {
      setUserLog(true)
    } else {
      setUserLog(false)
    }
  }, [])

  const navigate = useNavigate();

  function handleUsername(event: React.ChangeEvent<HTMLInputElement>) {
    const inputUser = event.target.value;
    setUsernameInput(inputUser);
  }

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    const inputPass = event.target.value;
    setPasswordInput(inputPass);
  }

  function logoutUser() {
    setUserLog(false)
    localStorage.removeItem("accessToken");
  }

  async function loginUser() {
    try {
      const res = await fetch("http://localhost:3000/api/users/login", {
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
        localStorage.setItem("accessToken", "guanoajca")
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        setLoginMessage("Nome utente o password errati.");
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
      {userLog == false ? (<form
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

      </form>) : (
        <div>
          <div>
            <div className="d-flex justify-content-center">
              <div style={{
                border: "1px solid black",
                height: "200px",
                width: "300px",
                margin: "20px 20px"

              }}>
                <div
                 className="d-flex justify-content-center align-items-center"
                  // style={{
                  //   border: "2px solid #e81e25",
                  //   borderRadius: "50%",
                  //   width: "100px",
                  //   height: "100px"

                  // }}
                >
                  <FontAwesomeIcon icon={faTruckFast} bounce size="4x" style={{
                    color: "black",
                  }} />
                </div>
                <h4>Orders</h4>
                <p>Track, return or re-purchase items</p>
              </div>
              <div style={{
                border: "1px solid black",
                height: "200px",
                width: "300px",
                margin: "20px 20px"
              }}>
                <div
                 className="d-flex justify-content-center align-items-center"
                  // style={{
                  //   border: "2px solid #e81e25",
                  //   borderRadius: "50%",
                  //   width: "100px",
                  //   height: "100px"

                  // }}
                >
                  <FontAwesomeIcon icon={faGear} spin size="4x" style={{
                    color: "black",
                  }} />
                </div>
                <h4>Access and Security settings</h4>
                <p>Change login, name and mobile number</p>
              </div>
              <div style={{
                border: "1px solid black",
                height: "200px",
                width: "300px",
                margin: "20px 20px"
              }}>
                <div
                 className="d-flex justify-content-center align-items-center"
                  // style={{
                  //   border: "2px solid #e81e25",
                  //   borderRadius: "50%",
                  //   width: "100px",
                  //   height: "100px"

                  // }}
                >
                  <FontAwesomeIcon icon={faStar} size="4x"
                    style={{
                      color: "black",
                    }}
                  />
                </div>
                <h4>Premium</h4>
                <p>View benefits and payment settings</p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div style={{
                border: "1px solid black",
                height: "200px",
                width: "300px",
                margin: "20px 20px"
              }}>
                <div
                 className="d-flex justify-content-center align-items-center"
                  // style={{
                  //   border: "2px solid #e81e25",
                  //   borderRadius: "50%",
                  //   width: "100px",
                  //   height: "100px"

                  // }}
                >
                  <FontAwesomeIcon icon={faHouseUser} size="4x"
                    style={{
                      color: "black",
                    
                    }}
                  />
                </div>
                <h4>Addresses</h4>
                <p>Change addresses and delivery preferences for orders and gifts</p>
              </div>
              <div style={{
                border: "1px solid black",
                height: "200px",
                width: "300px",
                margin: "20px 20px"
              }}>
                <div
                 className="d-flex justify-content-center align-items-center"
                  // style={{
                  //   border: "2px solid #e81e25",
                  //   borderRadius: "50%",
                  //   width: "100px",
                  //   height: "100px"

                  // }}
                >
                  <FontAwesomeIcon icon={faCreditCard} size="4x"
                    style={{
                      color: "black",
                    }}
                  />
                </div>
                <h4>My payments</h4>
                <p>View all transactions, manage settings and payment methods</p>
              </div>
              <div style={{
                border: "1px solid black",
                height: "200px",
                width: "300px",
                margin: "20px 20px"
              }}>
                <div 
                className="d-flex justify-content-center align-items-center"
                // style={{
                //   border: "2px solid #e81e25",
                //   borderRadius: "50%",
                //   width: "100px",
                //   height: "100px"

                // }} 
                >
                  <FontAwesomeIcon icon={faHeadphones} size="4x"
                    style={{
                      color: "black",
                    
                    }}
                  />
                </div>
                <h4>Contact us</h4>
                <p>Contact our customer service via Phone, Chat or Email</p>
              </div>
            </div>
          </div>
          <Button onClick={logoutUser}>Logout</Button>
        </div>)}

    </>
  );
}



import React, { useEffect, useState } from "react";
import useUserStore from "../store/store";
import { decodeCaesarCipher } from "../data/students.data";
import { useNavigate } from "react-router-dom";

const Puzzle = () => {
  const { loggedInUser } = useUserStore();
  const [inputText, setInputText] = useState("");
  const [qrCodeGenerated, setQrCodeGenerated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/"); 
    }
  }, [loggedInUser, navigate]);

  const handleInputTextChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    const shift = 3;
    const decodedCorrectly = decodeCaesarCipher(
      loggedInUser?.caesarCipher ?? "",
      shift,
      inputText
    );
    setQrCodeGenerated(decodedCorrectly);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url('/im6.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
  };

  const terminalStyle = {
    backgroundColor: "#1e1e1e",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "80%",
    maxWidth: "500px",
    marginBottom: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    backgroundColor: "transparent",
    border: "1px solid #fff",
    color: "#fff",
    padding: "10px",
    marginTop: "10px",
    width: "80%",
    fontSize: "1rem",
    outline: "none",
  };

  const headingStyle = {
    fontSize: "3rem",
    marginBottom: "20px",
  };

  const subtitleStyle = {
    fontSize: "1.8rem",
    color: "#d53dd5",
    marginTop: "10px",
    fontFamily: "'Roboto Mono', monospace",
    letterSpacing: "0.1em",
  };

  return (
    <div style={containerStyle}>
      <header style={{ marginBottom: "30px" }}>
        <pre id="title" style={headingStyle}>
          EQUALIZER
        </pre>
        <h2 id="subtitle" style={subtitleStyle}>
          Welcome to the Transformer Game. In this game, you will be provided a
          phrase in transformer language, and your task is to translate it into
          English. Let's begin the translation challenge. Are you ready?
        </h2>
      </header>

      <div id="terminal" style={terminalStyle}>
        <h2>DECRYPT IF YOU CAN!!!</h2>
        
        <pre id="output" style={{ fontSize: "1rem" }}></pre>
        <pre id="generated-output" style={{ fontSize: "2rem", fontWeight: "bold" }}>
          {loggedInUser?.caesarCipher}
        </pre>
        <div id="input-container">
          <label htmlFor="group-name-input">▶ </label>
          <input
            type="text"
            id="group-name-input"
            value={inputText}
            onChange={handleInputTextChange}
            autoComplete="off"
            autoFocus
            style={inputStyle}
          />
        </div>
        <button
          onClick={handleSubmit}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#d53dd5",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>

        {qrCodeGenerated && loggedInUser?.id && (
          <div style={{ marginTop: "20px" }}>
            {/* Display the pre-generated QR code from public folder */}
            <img
              src={`/QR_codes/${loggedInUser.id}.png`} // Path to the pre-generated QR codes
              alt="User QR Code"
              style={{ width: "256px", height: "256px" }}
            />
            <p>Your QR Code with User ID has been generated!</p>
            <a
              href={`/QR_codes/${loggedInUser.id}.png`}
              download={`user-${loggedInUser.id}-qrcode.png`}
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
                marginTop: "10px",
              }}
            >
              Download QR Code
            </a>
          </div>
        )}
      </div>

      <div
        className="squid-game-bg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/squidgame.ico")',
          backgroundSize: "cover",
          zIndex: -1,
        }}
      ></div>
    </div>
  );
};

export default Puzzle;

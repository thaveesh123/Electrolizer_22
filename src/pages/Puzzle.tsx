import React, { useEffect, useState } from "react";
import useUserStore from "../store/store";
import { decodeCaesarCipher } from "../data/students.data";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

const Puzzle = () => {
  const { loggedInUser } = useUserStore();
  const [inputText, setInputText] = useState("");
  const [qrCodeGenerated, setQrCodeGenerated] = useState(false);
  const [error, setError] = useState("");
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
    setError("");
  };

  const handleSubmit = () => {
    const shift = 3;
    const decodedCorrectly = decodeCaesarCipher(
      loggedInUser?.caesarCipher ?? "",
      shift,
      inputText
    );

    if (decodedCorrectly) {
      setQrCodeGenerated(true);
      setError("");
    } else {
      setQrCodeGenerated(false);
      setError("❌ Invalid input! Please try again.");
    }
  };

  const handleDownloadQRCode = () => {
    const canvas = document.getElementById("mySvg") as HTMLCanvasElement;
    console.log(canvas);

    if (canvas) {
      const imageUrl = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "qrcode.png";
      link.click();
    }
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url('/im6.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
  };
  

  const headingStyle: React.CSSProperties = {
    fontSize: "2rem",
    marginBottom: "20px",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word", 
  };


  const terminalStyle = {
    backgroundColor: "#1e1e1e",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "90%",
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
    fontSize: window.innerWidth < 600 ? "0.9rem" : "1rem", // Adjust font size
    outline: "none",
  };

  return (
    <div style={containerStyle}>
      <header style={{ marginBottom: "30px", width: "80%" }}>
        <pre id="title" style={headingStyle}>
          Welcome to Transformer Game.
        </pre>
        <h2
          id="subtitle"
          style={{
            backgroundColor: "rgba(44, 74, 227, 0.5)", // Red with 50% transparency
            padding: "10px",
            borderRadius: "5px",
            display: "inline-block",
          }}
        >
          In a quiet corner of the universe, the Decepticons launched a covert
          operation, encrypting the name of your group's protector. To uncover
          the identity of your guardian robot, you must decrypt the hidden
          message—only then will you discover the group’s true name. The mission
          is in your hands, but only through the code will the secret be
          revealed.
        </h2>

        <h2
          id="subtitle"
          style={{
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            padding: "10px",
            borderRadius: "5px",
            display: "inline-block",
          }}
        >
          hint:: "In a world where Autobots fight Decepticons, I stand as a
          trilogy with battles and bonds. The first is 'Revenge,' the second
          'Dark,' The third is where the final fight sparks. What number am I,
          when all three are seen?"
        </h2>
      </header>

      <div id="terminal" style={terminalStyle}>
        <h2>DECRYPT IF YOU CAN!!!</h2>

        <pre id="output" style={{ fontSize: "1rem" }}></pre>
        <pre
          id="generated-output"
          style={{ fontSize: "2rem", fontWeight: "bold" }}
        >
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
        {error && (
          <p style={{ color: "red", marginTop: "10px", fontWeight: "bold" }}>
            {error}
          </p>
        )}
        {qrCodeGenerated && loggedInUser?.id && (
          <div style={{ marginTop: "20px" }}>
            <QRCodeCanvas
              id="mySvg"
              value={loggedInUser?.id.toString()}
              size={256}
              fgColor="#fff"
              bgColor="#000"
            />
            <p>Your QR Code with User ID has been generated!</p>
            <button
              onClick={handleDownloadQRCode}
              style={{
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                marginTop: "10px",
              }}
            >
              Download QR Code
            </button>
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

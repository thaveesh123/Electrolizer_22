import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { STUDENTS } from "../data/students.data";

export default function StudentQRScanner() {
  const [studentId, setStudentId] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const CORRECT_PASSWORD = "1234"; // Change this to your desired password

  const student = STUDENTS.find((std) => std.id === Number(studentId));

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.pitch = 0.7;
    utterance.rate = 0.6;
    utterance.volume = 3;

    const voices = window.speechSynthesis.getVoices();
    const optimusVoice = voices.find((voice) =>
      voice.name.toLowerCase().includes("google us english")
    );

    if (optimusVoice) {
      utterance.voice = optimusVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  const handlePasswordSubmit = () => {
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ textAlign: "center", marginTop: "20vh" }}>
        <h2>Enter Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        />
        <br />
        <button
          onClick={handlePasswordSubmit}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
        {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <img
          src={student ? student.photo : "/default.jpg"}
          alt="Student"
          style={{
            width: "99vw",
            height: "98vh",
            objectFit: "contain",
            borderRadius: "0px",
          }}
        />
      </div>

      <div style={{ display: "none" }}>
        <Scanner
          onScan={(result) => {
            setStudentId(result[0].rawValue);
            const std = STUDENTS.find((std) => std.id === Number(result[0].rawValue));

            if (std) {
              speak(`Welcome to Team ${std.team}`);
            }
          }}
          scanDelay={100}
          onError={(error) => setError(error as string)}
        />
      </div>

      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
    </div>
  );
}

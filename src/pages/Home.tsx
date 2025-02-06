import { useState } from "react";
import useUserStore from "../store/store";
import { STUDENTS } from "../data/students.data";
import { useNavigate } from "react-router-dom";


const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#121212",
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <nav
        style={{
          position: "fixed",
          width: "100vw",
          padding: "10px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <a href="#header" style={{ textDecoration: "none" }}>
            <img
              style={{ width: "150px" }}
              src="/pixelcut-export.png"
              alt="website-logo"
            />
          </a>
          <a href="#header" style={{ textDecoration: "none" }}>
            <img
              style={{ width: "100px" }}
              src="/ees_123-removebg-preview.png"
              alt="website-logo"
            />
          </a>
        </div>
      </nav>
      <div
        style={{
          padding: "40px 0",
          paddingTop: "200px",
          color: "white",
          fontSize: "90px",
          height: "100vh",
          backgroundImage: "url('/IMG-20250206-WA0002.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        ELECTROLIZER 25
      </div>
    </header>
  );
};

const ContactSection = () => {
  const [regNumber, setRegNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const {setLoggedInUser}=useUserStore()
  const navigate=useNavigate()

  const validateRegNumber = () => {
    const regex = /^E\/22\/(\d+)$/;
    const match = regNumber.match(regex);

    if (!match) {
      setErrorMessage("Invalid E Number Format (E/22/XXX)");
      return;
    }

    const studentId = parseInt(match[1], 10);
    const student = STUDENTS.find((s) => s.id === studentId);

    if (!student) {
      setErrorMessage("No student found with this ID");
      return;
    }

    setErrorMessage("");
    setLoggedInUser(student);
    navigate('/puzzle')
  };

  return (
    <section
      style={{
        backgroundColor: "#222",
        padding: "40px 0",
        textAlign: "center",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2>Enter Your Reg Number</h2>
        <input
          type="text"
          placeholder="E/22/XXX"
          value={regNumber}
          onChange={(e) => setRegNumber(e.target.value)}
          style={{
            padding: "10px",
            width: "80%",
            borderRadius: "5px",
            border: "none",
            marginTop: "10px",
          }}
        />
        <p
          style={{
            color: "red",
            fontWeight: "bold",
            display: errorMessage ? "block" : "none",
            marginTop: "10px",
          }}
        >
          {errorMessage}
        </p>
        <button
          onClick={validateRegNumber}
          style={{
            display: "inline-block",
            backgroundColor: "#ff4500",
            color: "white",
            padding: "10px 20px",
            marginTop: "15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginLeft:'13px'
          }}
        >
          Enter
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#121212",
        color: "white",
        textAlign: "center",
        padding: "20px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <img
          style={{ width: "200px" }}
          src="/ees_123-removebg-preview.png"
          alt="footer-logo"
        />
        <p style={{ fontSize: "18px" }}>
          Department of Electrical and Electronic Engineering
          <br />
          University of Peradeniya
        </p>
      </div>
      <div style={{ marginTop: "10px" }}>
        <a
          href="https://www.facebook.com/acespera/"
          style={{ margin: "0 10px", color: "white", fontSize: "24px" }}
        >
          📘
        </a>
        <a
          href="https://lk.linkedin.com/company/aces-association-of-computer-engineering-students"
          style={{ margin: "0 10px", color: "white", fontSize: "24px" }}
        >
          🔗
        </a>
      </div>
      <p style={{ marginTop: "20px", fontSize: "14px", color: "#aaa" }}>
        &#169; Developed by EEE '21 & PeraCom '21
      </p>
    </footer>
  );
};

const Home = () => {
  return (
    <div>
      <Header />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
